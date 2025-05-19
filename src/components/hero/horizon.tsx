import React from "react";

export const Horizon = () => {
  return (
    <>
      <div aria-hidden="true" className="relative mx-auto w-full -z-10">
        <div className="animate-scaleIn origin-center pointer-events-none relative z-10 mx-auto md:-mt-34 -mt-36 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div
            className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#5506ba,transparent_85%)]"
            style={{ opacity: 0.5 }}
          ></div>
          <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] ">
            <div className="absolute inset-0 rounded-[100%] bg-black"></div>
            <div
              className="absolute inset-0 overflow-hidden rounded-[100%]"
              style={{
                background: "transparent",
                boxShadow: "inset 0 2px 20px #fff, 0 -10px 50px 1px #ffffff6e",
              }}
            >
              <div
                className="absolute top-0 right-[25%] left-[25%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255, 0.8) 0px 0px 15.0702px 3.02808px",
                }}
              ></div>
            </div>
          </div>
          <div
            className="absolute top-1/2 -left-1/2 z-15 aspect-[1/0.7] w-[200%] rounded-[100%] bg-transparent"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.404) 0px -5px 40.2808px 1px, rgba(255, 255, 255, 0.404) 0px 1px 10.0702px inset",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
