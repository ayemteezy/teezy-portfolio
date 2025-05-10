"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { links } from "@/const";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="bg-primary/5 backdrop-blur-sm px-2 py-0.5 rounded-full border font-sans">
      <NavigationMenuList>
        {links.map((link) => {
          const isActive =
            link.id === "/" ? pathname === "/" : pathname.startsWith(link.id);

          return (
            <NavigationMenuItem key={link.name}>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-full hover:bg-transparent hover:text-muted-foreground z-10 px-4",
                  isActive &&
                    "bg-accent hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <NavigationMenuLink
                  href={link.id}
                  className="relative rounded-full font-normal text-sm capitalize text-accent-foreground/70 hover:text-accent-foreground/90"
                >
                  {link.name}
                  {isActive && (
                    <>
                      {/* silhouette lighting */}
                      <div className="absolute bg-primary h-1 w-8 -top-[9px] rounded-t-full" />
                      <div className="absolute bg-primary/20 h-4 w-10 -top-[9px] rounded-t-full blur-md" />
                      <div className="absolute bg-primary/20 h-6 w-8 -top-[9px] rounded-t-full blur-md" />
                      <div className="absolute bg-primary/20 h-6 w-8 -top-[9px] rounded-t-full blur-md" />
                    </>
                  )}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-full font-medium capitalize text-muted-foreground cursor-pointer hover:bg-transparent bg-transparent hover:text-accent-foreground/90">
            more
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            size="sm"
            className="rounded-full text-accent-foreground cursor-pointer bg-gradient-to-t from-gray-200/30 via-white/15 to-gray-100/10 hover:bg-accent/50 transition-colors duration-300"
          >
            <NavigationMenuLink className="font-normal text-accent-foreground/70">
              Let's Connect
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
