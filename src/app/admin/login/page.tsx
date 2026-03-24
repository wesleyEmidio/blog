import { LoginForm } from "@/components/admin/LoginForm";
import ErrorMessage from "@/components/ErrorMessage";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Login",
};

export default async function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTile="403"
        content="Login desabilitado, libere o ALLOW_LOGIN"
      />
    );
  }

  return <LoginForm />;
}
