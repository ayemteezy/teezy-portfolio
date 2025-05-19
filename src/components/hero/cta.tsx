"use client";

import React, { useEffect, useState } from "react";
import { ArrowRightIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";

const PingEffect = ({
  x,
  y,
  fromX,
  fromY,
}: {
  x: number;
  y: number;
  fromX: number;
  fromY: number;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 50);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const dxRaw = fromX - x;
  const dyRaw = fromY - y;

  const dx = Math.abs(dxRaw) > 1000 ? 1000 * Math.sign(dxRaw) : dxRaw;
  const dy = Math.abs(dyRaw) > 1000 ? 1000 * Math.sign(dyRaw) : dyRaw;

  return (
    <div
      className="absolute pointer-events-none z-10"
      style={{
        left: `${x - 15}px`,
        top: `${y - 15}px`,
        width: "30px",
        height: "30px",
      }}
    >
      <div
        className="absolute inset-0 rounded-full bg-blue-200/20 animate-slide-in"
        style={
          {
            "--dx": `${dx}px`,
            "--dy": `${dy}px`,
          } as React.CSSProperties
        }
      />

      {show && (
        <div
          className="absolute inset-0 rounded-full bg-blue-300/70 opacity-50 animate-hover-ping"
          style={{ animationFillMode: "forwards" }}
        />
      )}
    </div>
  );
};

export const CTA = () => {
  const [prevMouseGallery, setPrevMouseGallery] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [galleryPing, setGalleryPing] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [prevMouseCv, setPrevMouseCv] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [cvPing, setCvPing] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>,
    setPrevMouse: React.Dispatch<
      React.SetStateAction<{ x: number; y: number } | null>
    >
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPrevMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePing = (
    e: React.MouseEvent<HTMLButtonElement>,
    setPing: React.Dispatch<
      React.SetStateAction<{ x: number; y: number } | null>
    >
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPing({ x, y });
  };

  return (
    <div className="lg:mt-8 mt-10 flex items-center md:flex-row flex-col gap-4 md:gap-8">
      {/* GALLERY BUTTON */}
      <div className="relative">
        {galleryPing && prevMouseGallery && (
          <PingEffect
            x={galleryPing.x}
            y={galleryPing.y}
            fromX={prevMouseGallery.x}
            fromY={prevMouseGallery.y}
          />
        )}

        <Button
          size="lg"
          className="group relative overflow-hidden inline-flex items-center justify-around border bg-white/10 backdrop-blur-sm rounded-full pr-1 py-5 md:py-6 cursor-pointer text-accent-foreground/90  hover:text-black transition-colors duration-300 shadow"
          onMouseEnter={(e) => handleMouseEnter(e, setPrevMouseGallery)}
          onMouseMove={(e) => handlePing(e, setGalleryPing)}
          onMouseLeave={() => setGalleryPing(null)}
        >
          <div className="absolute inset-0 bg-white/80 translate-x-full rounded-full group-hover:translate-x-0 transition-transform duration-180 ease-out z-0" />

          <span className="relative z-10 flex items-center gap-4">
            Let's Connect
            <div className="group relative size-8 md:size-10 overflow-hidden rounded-full bg-white/80 group-hover:bg-transparent transition z-10">
              <ArrowRightIcon className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0" />
              <ArrowRightIcon className="absolute left-0 top-1/2 size-5 -translate-x-full -translate-y-1/2 text-black opacity-0 transition-all duration-300 group-hover:translate-x-1/2 group-hover:opacity-100" />
            </div>
          </span>
        </Button>
      </div>

      {/* CV BUTTON */}
      <div className="relative">
        {cvPing && prevMouseCv && (
          <PingEffect
            x={cvPing.x}
            y={cvPing.y}
            fromX={prevMouseCv.x}
            fromY={prevMouseCv.y}
          />
        )}

        <Button
          size="lg"
          className="relative overflow-hidden bg-transparent text-shadow-2xs text-accent-foreground/70 hover:bg-transparent cursor-pointer"
          onMouseEnter={(e) => handleMouseEnter(e, setPrevMouseCv)}
          onMouseMove={(e) => handlePing(e, setCvPing)}
          onMouseLeave={() => setCvPing(null)}
        >
          <CopyIcon />
          laurencelestercarino@gmail.com
        </Button>
      </div>
    </div>
  );
};
