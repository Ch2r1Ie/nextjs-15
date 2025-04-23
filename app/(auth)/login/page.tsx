import { LoginForm } from "@/components/layout/login-form";

export default function Login() {
  return (
    <div
      className="flex min-h-svh w-full items-center justify-center bg-cover bg-center p-6 md:p-10"
      style={{ backgroundImage: "url('/assets/auth-background.jpg')" }}
    >
      <div className="w-full max-w-md rounded-xl p-6 shadow-xl backdrop-blur-sm">
        <LoginForm />
      </div>
    </div>
  );
}
