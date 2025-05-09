import Image from "next/image";
import { LoginForm } from "@/components/layout/login/login-form";

export default function Login() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Image
        src="/assets/auth-background.jpeg"
        alt="Background"
        fill
        className="-z-10 object-cover object-center"
        priority
      />
      <LoginForm isReturnLink={true} />
    </div>
  );
}
