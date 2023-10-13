"use client";
import Button from "@/components/atoms/Button";
import { meetingLink } from "@/utils/constants";
import { cn } from "@/utils/util";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
interface IMainHeroProps {
  theme?: "light" | "dark";
}

export default function MainHero({ theme = "dark" }: IMainHeroProps) {
  const [splineReady, setSplineReady] = useState(false);
  return (
    <>
      <div
        className={cn("mb-20 md:mb-32", {
          "bg-gray-900": theme === "dark",
          "bg-white": theme === "light",
        })}
      >
        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
          <motion.div
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
          </motion.div>

          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-3xl py-32 sm:py-56 lg:py-80">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                className={cn(
                  "relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hidden",
                  {
                    "text-gray-200": theme === "dark",
                    "text-gray-600": theme === "light",
                  }
                )}
              >
                Announcing our new Shopify Partners service.{" "}
                <Link href="#" className="font-semibold text-wonder">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1
                className={cn(
                  "text-4xl font-regular tracking-tight sm:text-6xl",
                  {
                    "text-gray-300": theme === "dark",
                    "text-gray-700": theme === "light",
                  }
                )}
              >
                We are{" "}
                <span
                  className={cn("font-bold ", {
                    "text-white": theme === "dark",
                    "text-gray-900": theme === "light",
                  })}
                >
                  your marketing agency&apos;s dev team
                </span>{" "}
                <br />
              </h1>
              <p
                className={cn("mt-10 text-xl leading-8", {
                  "text-gray-200": theme === "dark",
                  "text-gray-600": theme === "light",
                })}
              >
                We focus on helping your branding, design, and creative firm
                produce amazing digital products for your clients. We want to
                help you shine!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href={meetingLink} target="_blank">
                  <Button>Let&apos;s talk about your web project</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
