"use client";
import Button from "@/components/atoms/Button";
import { meetingLink, navigationItems } from "@/utils/constants";
import { cn } from "@/utils/util";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IMainHeaderProps {
  theme?: "light" | "dark";
}

const MainHeader = ({ theme = "dark" }: IMainHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-10 w-auto"
              src={
                theme === "dark"
                  ? "/wondercraft-purple-horizontal.svg"
                  : "/wondercraft-white-horizontal.svg"
              }
              alt=""
              width={350}
              height={50}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              {
                "text-gray-700": theme === "dark",
                "text-white": theme === "light",
              }
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("text-sm font-semibold leading-6", {
                "text-gray-900": theme === "dark",
                "text-white": theme === "light",
              })}
            >
              {item.name}
            </Link>
          ))}
          <Link href={meetingLink} target="_blank">
            <Button>Schedule a call</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
