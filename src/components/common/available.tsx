import { isAvailable } from "@/const";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { BlurFade } from "../magicui/blur-fade";

export const Available = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-max gap-2.5 px-4 py-1.5 border bg-primary/5 backdrop-blur-sm shadow rounded-full">
      {isAvailable ? (
        <>
          <div className="size-2.5 bg-emerald-500 rounded-full relative">
            <div className="size-2.5 bg-emerald-500 rounded-full absolute top-0 left-0 animate-ping-large" />
          </div>
        </>
      ) : (
        <div className="size-2.5 bg-muted-foreground opacity-50 rounded-full relative" />
      )}
      <AnimatedShinyText className="font-medium text-muted-foreground text-sm text-shadow-white">
        {isAvailable ? "Open for Projects" : "Currently Unavailable"}
      </AnimatedShinyText>
    </div>
  );
};
