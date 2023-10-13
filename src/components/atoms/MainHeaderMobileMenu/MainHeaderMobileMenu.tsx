"use client";
import { navigationItems } from "@/utils/constants";
import { cn } from "@/utils/util";
import { Bars3Icon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
interface IMainHeaderMobileMenuProps {
  theme?: "light" | "dark";
}
const MainHeaderMobileMenu = ({
  theme = "dark",
}: IMainHeaderMobileMenuProps) => {
  const path = usePathname();
  return (
    <DropdownMenu.Root key={path}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={cn(
            "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
            {
              "text-gray-700": theme === "light",
              "text-white": theme === "dark",
            }
          )}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="min-w-[220px] py-3 bg-white rounded-md p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Label className="pl-6 py-2 text-sm text-gray-400">
            Services
          </DropdownMenu.Label>
          {navigationItems.map((item, index) => (
            <Fragment key={item.href}>
              <DropdownMenu.Item
                key={item.name}
                className="group text-gray-900 rounded-[3px] py-2 flex items-center px-1 relative pl-6 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-wonder data-[highlighted]:text-white    "
              >
                <Link href={item.href}>{item.name}</Link>
              </DropdownMenu.Item>
              {index === 2 ? (
                <DropdownMenu.Separator className="h-[1px] bg-gray-200 m-1" />
              ) : null}
            </Fragment>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MainHeaderMobileMenu;
