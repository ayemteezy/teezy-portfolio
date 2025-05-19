import { CommandIcon, MenuIcon } from "lucide-react";

import Logo from "../common/logo";
import { NavLinks } from "../ui/navigation-links";
import { CommandMenu } from "../common/command-menu";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full ">
      <nav className="px-4 md:px-5 lg:px-25 lg:py-6 md:py-4 py-5 flex items-center justify-between ">
        <Logo />
        <NavLinks />
        <CommandMenu />
      </nav>
    </header>
  );
};
