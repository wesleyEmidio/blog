"use server";

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { postRepository } from "@/repositories/post";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParseResult = PostCreateSchema.safeParse(formDataToObj);

  const isAuthenticated = await verifyLoginSession();
  if (!isAuthenticated) {
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ["Faça login em outra aba para criar um post"],
    };
  }

  if (!zodParseResult.success) {
    const errors = getZodErrorMessages(zodParseResult.error);

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: errors,
    };
  }

  const validatedData = zodParseResult.data;
  const newPost: PostModel = {
    ...validatedData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validatedData.title),
  };

  try {
    await postRepository.create(newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: newPost,
        errors: [e.message],
      };
    }

    return {
      formState: newPost,
      errors: ["Erro desconhecido"],
    };
  }

  revalidateTag("posts", "max");
  redirect(`/admin/post/${newPost.id}?created=1`);
}
