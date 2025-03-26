import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      <div>
        <div className="container mt-15 p-24 lg:py-32">
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Let&apos;s Build Together
            </h1>
          </div>
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Over 10+ fully responsive, UI blocks you can drop into your Shadcn
              UI projects and customize to your heart&apos;s content.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-5">
            <Link href="/home">
              <Button className="cursor-pointer hover:bg-gray-700" size={"lg"}>
                Get started
              </Button>
            </Link>
            <Button size={"lg"} variant={"outline"}>
              Learn more
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span className="text-muted-foreground text-sm">
              Package Manager:
            </span>
            <span className="text-sm font-bold">npm </span>
            <svg
              className="text-muted-foreground h-5 w-5"
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
              className="inline-flex items-center gap-x-1 text-sm font-medium decoration-2 hover:underline"
              href="#"
            >
              Installation Guide
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
