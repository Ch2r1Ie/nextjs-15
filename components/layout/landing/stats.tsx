import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function CardGroup() {
  return (
    <>
      <div className="container py-6">
        <div className="mx-auto max-w-5xl px-4 py-10 xl:px-0">
          <div className="container flex flex-col items-center text-center">
            <h2 className="mt-3 mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Activity
            </h2>
          </div>
          <div className="rounded-xl border">
            <div className="sm:m-2 sm:p-2 md:m-6">
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-20 sm:grid-cols-3">
                <div className="before:bg-border relative text-center before:absolute before:start-1/2 before:-top-full before:mt-3.5 before:h-20 before:w-px before:-translate-x-1/2 before:rotate-[60deg] before:transform first:before:hidden sm:before:-start-6 sm:before:top-1/2 sm:before:mt-0 sm:before:-translate-x-0 sm:before:-translate-y-1/2 sm:before:rotate-12">
                  <svg
                    className="mx-auto size-6 shrink-0 sm:size-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg font-semibold sm:text-3xl">
                      2,000+
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                      Acme partners
                    </p>
                  </div>
                </div>
                <div className="before:bg-border relative text-center before:absolute before:start-1/2 before:-top-full before:mt-3.5 before:h-20 before:w-px before:-translate-x-1/2 before:rotate-[60deg] before:transform first:before:hidden sm:before:-start-6 sm:before:top-1/2 sm:before:mt-0 sm:before:-translate-x-0 sm:before:-translate-y-1/2 sm:before:rotate-12">
                  <div className="flex items-center justify-center -space-x-5">
                    <Avatar className="border-primary relative z-[2] size-8 shrink-0 border">
                      <AvatarImage src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"></AvatarImage>
                    </Avatar>
                    <Avatar className="border-primary relative z-[1] -mt-7 size-8 shrink-0 border">
                      <AvatarImage src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"></AvatarImage>
                    </Avatar>{" "}
                    <Avatar className="border-primary relative size-8 shrink-0 border">
                      <AvatarImage src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"></AvatarImage>
                    </Avatar>
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg font-semibold sm:text-3xl">85%</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                      Happy customers
                    </p>
                  </div>
                </div>
                <div className="before:bg-border relative text-center before:absolute before:start-1/2 before:-top-full before:mt-3.5 before:h-20 before:w-px before:-translate-x-1/2 before:rotate-[60deg] before:transform first:before:hidden sm:before:-start-6 sm:before:top-1/2 sm:before:mt-0 sm:before:-translate-x-0 sm:before:-translate-y-1/2 sm:before:rotate-12">
                  <svg
                    className="mx-auto size-6 shrink-0 sm:size-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg font-semibold sm:text-3xl">$55M+</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                      Ads managed yearly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
