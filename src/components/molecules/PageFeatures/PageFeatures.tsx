import {
  ChatBubbleBottomCenterIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Communications, Availability, and Reliability",
    description:
      "Giving great service is one of the most (if not the most) important of our core values. We want you to feel comfortable and confident that you made a great decision in hiring us. We can integrate into your teams PM tools and communication channels so you feel we are part of your team and not just a group of outsiders.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Powerful, robust web products for all devices",
    description:
      "We make sure our code is always clean, responsive and the highest quality possible by utilizing the latest tools and best practices in the industry. We want you to have the fastest and most powerful sites so that your clients are confident in the product they receive.",
    icon: LockClosedIcon,
  },
  {
    name: "Javascript Artisans",
    description:
      "Javascript is one of our core competencies since we use it every day in every project we work on. We use Javascript in both the front and back end as well as in our build systems and testing automation. JS is ubiquitous in our company.",
    icon: CommandLineIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "One of the most important steps in our process is performing Quality Assurance. For a dev shop like ours, it is of the utmost importance that the initial design really matches the final product and that our clients’ expectations are exceeded every time. \n\nWe also run checks on our websites to make sure the load speed is fast and that it is W3C and SEO compliant",
    icon: CursorArrowRaysIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-wonder">
            Expertise you can trust
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build a product
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;ve been doing this for a while and had worked with lots of
            tools, Content Management Systems, and frameworks. We&apos;ve found
            the best ones and put them together to make your life easier.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-wonder">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
