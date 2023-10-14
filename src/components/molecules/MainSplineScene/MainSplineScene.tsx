"use client";
import { cn } from "@/utils/util";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

interface IMainSplineSceneProps {}

const MainSplineScene = ({}: IMainSplineSceneProps) => {
  const [splineReady, setSplineReady] = useState(false);
  return <div
    className={cn(
      "absolute w-full h-full -top-16 md:top-0 left-0 transition-opacity duration-1000 ease-in-out -z-10",
      {
        "opacity-0": !splineReady,
        "opacity-100": splineReady,
      }
    )}
  >
    <Spline
      onLoad={() => {
        setTimeout(() => {
          setSplineReady(true);
        }, 100);
      }}
      scene="https://prod.spline.design/10D1Hq0QsPJVKX9c/scene.splinecode"
    />
  </div>;
};

export default MainSplineScene;
