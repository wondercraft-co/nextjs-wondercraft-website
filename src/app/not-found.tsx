import MainLayout from "@/components/molecules/MainLayout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ArrowUpRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "Web development",
    href: "/services/web-development",
    description: "Building interactive and dynamic web applications.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Shopify development",
    href: "/services/shopify-development",
    description: "Create stunning and smooth online stores with Shopify.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Wordpress development",
    href: "/services/wordpress-development",
    description:
      "Develop super custom CMSs for your clients very specific needs.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "About us",
    href: "/about-us",
    description: "Read our latest news and articles.",
    icon: HeartIcon,
  },
];

export default function NotFound() {
  return (
    <MainLayout theme="light">
      <div className="bg-white isolate min-h-screen flex items-center relative">
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
        <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
            <p className="text-base font-semibold leading-8 text-indigo-600">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This page does not exist
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
            <h2 className="sr-only">Popular pages</h2>
            <ul
              role="list"
              className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
            >
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="relative flex gap-x-6 py-6">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                    <link.icon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      <Link href={link.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {link.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-none self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-indigo-600"
              >
                <span aria-hidden="true">&larr;</span>
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
