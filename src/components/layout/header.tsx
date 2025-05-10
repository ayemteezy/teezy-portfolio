import { CommandIcon } from "lucide-react";

import Logo from "../common/logo";
import { Button } from "../ui/button";
import { NavLinks } from "../ui/navigation-links";
import { BlurFade } from "../magicui/blur-fade";

export const Header = () => {
  return (
    <header className="h-full w-full">
      <BlurFade>
        <nav className="px-6 md:px-25 py-6 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <Button
            className="rounded-full cursor-pointer"
            size="icon"
            variant="ghost"
          >
            <CommandIcon />
          </Button>
        </nav>
      </BlurFade>
    </header>
  );
};
