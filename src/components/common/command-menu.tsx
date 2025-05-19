"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CommandIcon,
  CornerDownLeftIcon,
  FileUserIcon,
  LogInIcon,
  MenuIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { links, moreNav, socials } from "@/const";
import { useIsMobile } from "@/hooks/use-is-mobile";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "../ui/button";
import { DialogFooter } from "../ui/dialog";
import { Badge } from "../ui/badge";

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <div>
      <>
        <Button
          className="rounded-full text-muted-foreground hover:text-primary/80 cursor-pointer hidden md:flex gap-0.5 items-center justify-center animate-fade-slide-right"
          size="icon"
          variant="ghost"
          onClick={handleOpen}
        >
          <CommandIcon />
          <span className="text-xs font-semibold">S</span>
        </Button>
        <Button
          className="rounded-full cursor-pointer flex md:hidden items-center justify-center animate-fade-slide-right"
          size="icon"
          variant="ghost"
          onClick={handleOpen}
        >
          <MenuIcon className="size-4" />
        </Button>
      </>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList className="w-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {links.map((link) => {
              const isActive =
                link.id === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.id);

              return (
                <CommandItem
                  key={link.id}
                  onSelect={() => handleSelect(link.id)}
                  className="py-2 gap-2 font-sans group"
                >
                  <div
                    className={cn(
                      "p-2 bg-accent-foreground/10 rounded-md shadow",
                      isActive && "bg-accent-foreground"
                    )}
                  >
                    <link.icon
                      className={cn(
                        "text-accent-foreground text-shadow-2xs size-8",
                        isActive && "text-black"
                      )}
                    />
                  </div>
                  <div>
                    <p className="capitalize text-sm font-medium flex items-center gap-2">
                      {link.name}
                      {isActive && (
                        <Badge
                          variant="secondary"
                          className={cn(
                            "rounded-full h-3.5 w-12 text-[10px] shadow group-hover:bg-accent-foreground/10",
                            isActive && "bg-accent-foreground/10"
                          )}
                        >
                          Current
                        </Badge>
                      )}
                    </p>
                    <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                      {link.desc}
                    </span>
                  </div>
                </CommandItem>
              );
            })}
            {moreNav.map((nav) => {
              const isActive =
                nav.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(nav.href);

              return (
                <CommandItem
                  key={nav.href}
                  onSelect={() => handleSelect(nav.href)}
                  className="py-2 gap-2 font-sans group"
                >
                  <div
                    className={cn(
                      "p-2 bg-accent-foreground/10 rounded-md shadow",
                      isActive && "bg-accent-foreground"
                    )}
                  >
                    <nav.icon
                      className={cn(
                        "text-accent-foreground text-shadow-2xs size-8",
                        isActive && "text-black"
                      )}
                    />
                  </div>
                  <div>
                    <p className="capitalize text-sm font-medium flex items-center gap-2">
                      {nav.name}
                      {isActive && (
                        <Badge
                          variant="secondary"
                          className={cn(
                            "rounded-full h-3.5 w-12 text-[10px] shadow group-hover:bg-accent-foreground/10",
                            isActive && "bg-accent-foreground/10"
                          )}
                        >
                          Current
                        </Badge>
                      )}
                    </p>
                    <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                      {nav.desc}
                    </span>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Account">
            <CommandItem className="py-2 gap-2 font-sans group">
              <div
                className={cn("p-2 bg-accent-foreground/10 rounded-md shadow")}
              >
                <LogInIcon
                  className={cn(
                    "text-accent-foreground text-shadow-2xs size-8"
                  )}
                />
              </div>
              <div>
                <p className="capitalize text-sm font-medium flex items-center gap-2">
                  Sign In
                </p>
                <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                  Log in to your account
                </span>
              </div>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resources">
            <CommandItem className="relative py-2 gap-2 font-sans group">
              <div
                className={cn("p-2 bg-accent-foreground/10 rounded-md shadow")}
              >
                <FileUserIcon
                  className={cn(
                    "text-accent-foreground text-shadow-2xs size-8"
                  )}
                />
              </div>
              <div>
                <p className="capitalize text-sm font-medium gap-2">
                  Resume
                  <ArrowUpRightIcon className="absolute top-2 right-2" />
                </p>
                <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                  View my resume
                </span>
              </div>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            {socials.map((social) => {
              return (
                <CommandItem
                  key={social.name}
                  onSelect={() => handleSelect(social.href)}
                  className="relative py-2 gap-2 font-sans group"
                >
                  <div
                    className={cn(
                      "p-2 bg-accent-foreground/10 rounded-md shadow"
                    )}
                  >
                    <social.icon
                      className={cn(
                        "text-accent-foreground text-shadow-2xs size-8"
                      )}
                    />
                  </div>
                  <div>
                    <p className="capitalize text-sm font-medium flex items-center gap-2">
                      {social.name}
                      <ArrowUpRightIcon className="absolute top-2 right-2" />
                    </p>
                    <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                      Visit my {social.name} account
                    </span>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
        <DialogFooter className="bg-popover justify-between items-center py-1 px-3 border-t text-muted-foreground font-sans">
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <div key={social.name}>
                <a className="cursor-pointer hover:text-accent-foreground/80 transition">
                  <social.icon />
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="bg-accent p-2 border rounded-sm">
                <ArrowUpIcon className="size-2" />
              </div>
              <div className="bg-accent p-2 border rounded-sm">
                <ArrowDownIcon className="size-2" />
              </div>
              <p className="text-xs font-medium ml-1">navigate</p>
            </div>
            {!isMobile && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="bg-accent p-2 border rounded-sm">
                    <CornerDownLeftIcon className="size-2" />
                  </div>
                  <p className="text-xs font-medium ml-1">select</p>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="bg-accent py-1 px-2 border rounded-sm">
                    <p className="text-xs">esc</p>
                  </div>
                  <p className="text-xs font-medium ml-1">close</p>
                </div>
              </>
            )}
          </div>
        </DialogFooter>
      </CommandDialog>
    </div>
  );
};
