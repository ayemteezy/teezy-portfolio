"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useIsMobile } from "@/hooks/use-is-mobile";
import memoji from "../../../public/images/memoji.png";

import { CTA } from "./cta";
import { Horizon } from "./horizon";
import { Available } from "../common/available";
import { BlurFade } from "../magicui/blur-fade";
import { Particles } from "../magicui/particles";
import { AuroraText } from "../magicui/aurora-text";

export const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="size-5 md:size-6" />;
  }

  return (
    <>
      <section
        id="#"
        className="relative flex flex-col items-center justify-center lg:pt-26 pt-18"
      >
        <div className="px-4 font-sans md:px-5 lg:px-25 md:pt-6 pt-4 z-10 shadow">
          <BlurFade delay={0.25}>
            <Available />
          </BlurFade>

          <div className="mt-5">
            <div className="flex flex-col items-center gap-1">
              <BlurFade delay={0.5}>
                <span className="text-white/70">Hey, Welcome!</span>
              </BlurFade>

              <BlurFade
                delay={0.75}
                className="flex w-full xl:w-[70%] text-center items-center justify-center mx-auto lg:mb-2"
              >
                <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-2 leading-snug text-shadow-2xs">
                  I <AuroraText>craft</AuroraText> ideas that evolve into
                  scalable{" "}
                  <em className="italic">
                    <span className="inline-block">web solutions</span>
                  </em>
                  .
                </h1>
              </BlurFade>

              <div className="text-center lg:w-[90%] w-full ">
                <BlurFade delay={1}>
                  <p className="flex flex-col items-center justify-center md:flex-row text-balance text-lg md:text-2xl bg-gradient-to-b from-white via-50% to-muted-foreground bg-clip-text text-transparent">
                    <span className="flex items-center md:font-medium font-semibold text-shadow-2xs">
                      I&apos;m Laurence Lester Cariño,
                      <span className="bg-blue-500 border border-b-4 hover:border-b-transparent border-b-blue-700 md:px-2.5 px-1.5 mx-1.5 rounded-full inline-block align-middle group cursor-pointer relative">
                        <Image
                          src={memoji}
                          alt="a person with eyeglasses and mask"
                          className="md:size-8 size-6 scale-160 transition shadow group-hover:scale-200 group-hover:rotate-10"
                          width={60}
                          height={60}
                        />
                        <Image
                          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                          alt="a hand waving"
                          height={28}
                          width={28}
                          className="absolute opacity-0 group-hover:opacity-100 transition -bottom-2 -left-1.5"
                        />
                      </span>
                    </span>
                    <span className="font-medium">
                      but you can call me Teezy
                    </span>
                  </p>
                </BlurFade>

                <BlurFade delay={1.25}>
                  <p className="mt-2 md:mt-4 text-muted-foreground text-shadow-2xs text-sm  sm:text-lg w-full md:w-[90%] xl:w-[70%] mx-auto">
                    A full-stack software engineer specializing in creating
                    fast, user-focused web applications for startups,
                    businesses, and creators.
                  </p>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
        <BlurFade delay={1.5}>
          <CTA />
        </BlurFade>

        <Particles
          className="absolute -inset-10 opacity-80 mt-16 -z-10 w-full"
          quantity={isMobile ? 80 : 60}
          ease={80}
          refresh
        />
      </section>
      <Horizon />
    </>
  );
};
