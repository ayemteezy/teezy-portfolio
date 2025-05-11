import { CommandIcon, MenuIcon } from "lucide-react";

import Logo from "../common/logo";
import { Button } from "../ui/button";
import { NavLinks } from "../ui/navigation-links";
import { BlurFade } from "../magicui/blur-fade";

export const Header = () => {
  return (
    <header className="h-full w-full">
      <BlurFade>
        <nav className="px-4 md:px-5 lg:px-25 lg:py-6 md:py-4 py-5 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <Button
            className="rounded-full cursor-pointer hidden md:flex items-center justify-center"
            size="icon"
            variant="ghost"
          >
            <CommandIcon />
          </Button>
          <Button
            className="rounded-full cursor-pointer flex md:hidden items-center justify-center"
            size="icon"
            variant="ghost"
          >
            <MenuIcon className="size-4" />
          </Button>
        </nav>
      </BlurFade>
    </header>
  );
};
