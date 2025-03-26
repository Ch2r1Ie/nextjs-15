import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Michael Brown",
    title: "UX Researcher",
    bio: "Lead user research for Slack. Contractor for Netflix and Udacity.",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Team05Page = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Meet Our Team
        </h2>
        <p className="mt-6 text-base sm:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary"
              width={600}
              height={600}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3">{member.bio}</p>
            <div className="mt-4 flex items-center gap-2.5">
              <Button
                className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team05Page;
