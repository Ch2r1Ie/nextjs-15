import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      <div>
        <div className="container p-24 lg:py-32">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Let&apos;s Build Together
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              Over 10+ fully responsive, UI blocks you can drop into your Shadcn
              UI projects and customize to your heart&apos;s content.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Button size={"lg"}>
              <Link href="/home">Get started</Link>
            </Button>
            <Button size={"lg"} variant={"outline"}>
              <Link href="https://shadcn-ui-blocks.vercel.app/">
                Learn more
              </Link>
            </Button>
          </div>
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-muted-foreground">
              Package Manager:
            </span>
            <span className="text-sm font-bold">npm </span>
            <svg
              className="h-5 w-5 text-muted-foreground"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
              href="#"
            >
              Installation Guide
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
