import PageFeatures from "@/components/molecules/PageFeatures";
import PageHero from "@/components/molecules/PageHero";
import PageProjects from "@/components/molecules/PageProjects";
import Testimonial from "@/components/molecules/Testimonial";
import {
  ChatBubbleBottomCenterIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development - Wondercraft",
  description:
    "We help your branding, design, and creative firm produce an amazing digital product for your client. We want to help you shine!",
};

const heroContent = {
  title: "Expert Web Development",
  description:
    "Web and mobile products that make you and your company proud. We take your design and marketing ideas and bring them to life, to all screen sizes, in a way that beautifully and effortlessly works.",
  iconSrc: "/react-logo.svg",
  imgSrc: "/projects/axon-desk.png",
  cta: "What is your project about?",
};

const pageFeaturesContent = {
  eyebrow: "Expertise you can trust",
  title: "Everything you need to build a product",
  description:
    "We've been doing this for a while and had worked with lots of tools, Content Management Systems, and frameworks. We've found the best ones and put them together to make your life easier.",
  features: [
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
  ],
};

const projects = [
  {
    title: "Axon",
    agency: "Direct",
    tags: ["Nextjs", "Algolia", "Storyblok"],
    href: "https://www.axon.com/resources/",
    imageUrl: "/projects/axon-bg.jpg",
  },
  {
    title: "SkyFi",
    agency: "Decimal",
    tags: ["Nextjs", "Contentful"],
    href: "https://www.skyfi.com/",
    imageUrl: "/projects/skyfi-bg.jpg",
  },
  {
    title: "The gaming Society",
    agency: "Wondersauce",
    tags: ["Nextjs", "Contentful"],
    href: "https://thegamingsociety.com/",
    imageUrl: "/projects/tgs-bg.png",
  },
  {
    title: "Modus Agency Website",
    agency: "Modus Agency",
    tags: ["Gatsby", "Prismic"],
    href: "https://www.modusagency.com/",
    imageUrl: "/projects/modus-bg.png",
  },
];

export default function Page() {
  return (
    <>
      <PageHero {...heroContent} />
      <PageProjects projects={projects} />
      <PageFeatures {...pageFeaturesContent} />
      <Testimonial
        quote={`“The team at Wondercraft exceeded all our expectations, they not only helped us build an amazing product but also contributed hugely to how we present our brand to our clients”`}
        name="John Hill"
        title="CEO @ Hourwise"
      />
    </>
  );
}
