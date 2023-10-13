import Link from "next/link";

interface IOurServicesProps {}

const OurServices = ({}: IOurServicesProps) => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 relative">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-wonder">
          We work best with
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Core services
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We specialize in web development, with a focus on React, Shopify, and
          WordPress. Our team of experts is dedicated to delivering high-quality
          solutions tailored to your specific needs.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
              Web Development
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                web and mobile products that make you and your company proud. We
                take your awesome design and marketing ideas and bring them to
                life, to all screen sizes, in a way that beautifully and
                effortlessly works.
              </p>
              <p className="mt-6">
                <Link
                  href="/services/web-development"
                  className="text-sm font-semibold leading-6 text-wonder"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
              Shopify Development
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Get your clients&apos; shop running on the leading e-commerce
                platform in the world. Give them a better chance to succeed.
              </p>
              <p className="mt-6">
                <Link
                  href="/services/shopify-development"
                  className="text-sm font-semibold leading-6 text-wonder"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
              Wordpress development
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                One of the most popular and versatile Content Management System.
                We love it as much as you do because it enables your clients to
                have the control they need without a steep learning curve.
              </p>
              <p className="mt-6">
                <Link
                  href="/services/wordpress-development"
                  className="text-sm font-semibold leading-6 text-wonder"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default OurServices;
