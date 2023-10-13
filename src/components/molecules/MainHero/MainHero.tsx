import Button from "@/components/atoms/Button";
import { meetingLink } from "@/utils/constants";
import Link from "next/link";

export default function MainHero() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
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
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hidden">
                Announcing our new Shopify Partners service.{" "}
                <Link href="#" className="font-semibold text-wonder">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-regular tracking-tight text-gray-700 sm:text-6xl">
                We are{" "}
                <span className="font-bold text-gray-900">
                  your marketing agency&apos;s dev team
                </span>{" "}
                <br />
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                We focus on helping your branding, design, and creative firm produce amazing
                digital products for your clients. We want to help you shine!
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
