import Button from "@/components/atoms/Button";
import MainHeaderMobileMenu from "@/components/atoms/MainHeaderMobileMenu";
import { meetingLink, navigationItems } from "@/utils/constants";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

interface IMainHeaderProps {
  theme?: "light" | "dark";
}

const MainHeader = ({ theme = "dark" }: IMainHeaderProps) => {
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
              className="h-12 w-auto"
              src={
                theme === "light"
                  ? "/wondercraft-dark-horizontal.svg"
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
                "text-gray-900": theme === "light",
                "text-white": theme === "dark",
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
