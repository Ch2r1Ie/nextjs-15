"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CheckIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function PricingSectionCards() {
  return (
    <>
      <div className="container py-24 lg:py-32">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="text-muted-foreground mt-1">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Label htmlFor="payment-schedule" className="me-3">
            Monthly
          </Label>
          <Switch id="payment-schedule" />
          <Label htmlFor="payment-schedule" className="relative ms-3">
            Annual
            <span className="absolute start-auto -end-28 -top-10">
              <span className="flex items-center">
                <svg
                  className="-me-6 h-8 w-14"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
              </span>
            </span>
          </Label>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <Card className="flex flex-col">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="mb-7">Free</CardTitle>
              <span className="text-5xl font-bold">Free</span>
            </CardHeader>
            <CardDescription className="text-center">
              Forever free
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary flex flex-col">
            <CardHeader className="pb-2 text-center">
              <Badge className="mb-3 w-max self-center uppercase">
                Most popular
              </Badge>
              <CardTitle className="!mb-7">Startup</CardTitle>
              <span className="text-5xl font-bold">$1</span>
            </CardHeader>
            <CardDescription className="mx-auto w-11/12 text-center">
              All the basics for starting a new business
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">2 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <Link href="/login">
              <CardFooter>
                <Button
                  variant="default"
                  className="w-full cursor-pointer hover:text-white"
                >
                  Startup Plan
                </Button>
              </CardFooter>
            </Link>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="mb-7">Team</CardTitle>
              <span className="text-5xl font-bold">£89</span>
            </CardHeader>
            <CardDescription className="mx-auto w-11/12 text-center">
              Everything you need for a growing business
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">5 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <Link href="/login">
              <CardFooter>
                <Button
                  className="hover:text-accent-foreground w-full cursor-pointer"
                  variant={"outline"}
                >
                  Team Plan
                </Button>
              </CardFooter>
            </Link>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="mb-7">Enterprise</CardTitle>
              <span className="text-5xl font-bold">149</span>
            </CardHeader>
            <CardDescription className="mx-auto w-11/12 text-center">
              Advanced features for scaling your business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">10 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <Link href="https://buy.stripe.com/aEU6rf3NhegqdpucMN">
              <CardFooter>
                <Button
                  className="hover:text-accent-foreground w-full cursor-pointer"
                  variant={"outline"}
                >
                  Enterprise Plan
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
