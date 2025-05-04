import { Button } from "@/components/ui/button";
import Link from "next/link";
import Globe from "@/components/3d/world-globe";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      <div>
        <div className="container lg:py-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Let&apos;s Build Your own World
            </h1>
            <div className="mx-auto h-[30vh] w-full md:h-[40vh] lg:h-[50vh]">
              <Globe />
            </div>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-muted-foreground text-xl md:text-3xl">
              Connect with the places you&apos;ve posted on Instagram and create
              your own interactive 3D world.
            </span>
          </div>
          <div className="mt-6 flex justify-center gap-5">
            <Link href="/">
              <Button className="cursor-pointer hover:bg-gray-700" size={"lg"}>
                Get started
              </Button>
            </Link>
            <Button size={"lg"} variant={"outline"} className="cursor-pointer">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
