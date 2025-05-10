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

  if (!isClient) return;

  return (
    <ScrollLink id="">
      <Image src={logo} alt="Teezy Logo" className=" size-6" />
    </ScrollLink>
  );
}
