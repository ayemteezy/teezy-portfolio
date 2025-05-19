"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/images/logo.svg";
import ScrollLink from "@/components/common/scroll-link";

export default function Logo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[40px] p-2 flex items-center justify-center">
      {isClient ? (
        <ScrollLink id="/" className="animate-fade-slide-left">
          <Image src={logo} alt="Teezy Logo" className="size-5 md:size-6" />
        </ScrollLink>
      ) : (
        <div className="size-5 md:size-6" />
      )}
    </div>
  );
}
