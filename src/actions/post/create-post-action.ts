"use server";

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { v4 as uuidV4 } from "uuid";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  //TODO: verificar se o usuario esta logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    };
  }

  const formDataToObject = Object.fromEntries(formData.entries());
  const zodParseResult = PostCreateSchema.safeParse(formDataToObject);

  if (!zodParseResult.success) {
    const errors = getZodErrorMessages(zodParseResult.error);

    return {
      formState: makePartialPublicPost(formDataToObject),
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

  return {
    formState: newPost,
    errors: [],
  };
}
