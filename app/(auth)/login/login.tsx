import { LoginForm } from "@/components/layout/login/login-form";

export default function Login() {
  return (
    
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <LoginForm isReturnLink={true} />
    </div>
  );
}
