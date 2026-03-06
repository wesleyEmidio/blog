"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPagePros = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPagePros) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTile="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente mais tarde."
    />
  );
}
