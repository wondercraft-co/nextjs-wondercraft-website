"use client";
import Button from "@/components/atoms/Button";
import MainHeaderMobileMenu from "@/components/atoms/MainHeaderMobileMenu";
import { meetingLink, navigationItems } from "@/utils/constants";
import useScrollDirection from "@/utils/useScrollDirection";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useMemo } from "react";

interface IMainHeaderProps {
  theme?: "light" | "dark";
}

const MainHeader = ({ theme = "dark" }: IMainHeaderProps) => {
  const scrollDirection = useScrollDirection();
  const [{ y }] = useWindowScroll();

  const finalTheme = useMemo(() => {
    if (!y || y < 100) {
      return theme;
    } else {
      return "light";
    }
  }, [theme, y]);

  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-50 transition-all", {
        "bg-transparent shadow-sm": finalTheme === "dark",
        "bg-white shadow-sm": finalTheme === "light",
      })}
      style={{
        transform: `translateY(${scrollDirection === "up" ? 0 : "-100%"})`,
      }}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-12 w-auto"
              src={
                finalTheme === "light"
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
          <MainHeaderMobileMenu theme={theme} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("text-sm font-semibold leading-6", {
                "text-gray-900": finalTheme === "light",
                "text-white": finalTheme === "dark",
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
