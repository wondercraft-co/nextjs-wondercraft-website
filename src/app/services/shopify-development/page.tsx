import MainLayout from "@/components/molecules/MainLayout";
import PageFeatures from "@/components/molecules/PageFeatures";
import PageHero from "@/components/molecules/PageHero";
import PageProjects from "@/components/molecules/PageProjects";
import Testimonial from "@/components/molecules/Testimonial";
import {
  ArrowDownOnSquareStackIcon,
  BuildingStorefrontIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development - Wondercraft",
  description:
    "One of our core services is Shopify development. We can help you build a custom theme or app for your client.",
};

const heroContent = {
  title: "Shopify Development",
  description:
    "Get your clients' shop running on the leading e-commerce platform in the world. Give them a better chance to succeed.",
  iconSrc: "/shopify-logo.svg",
  imgSrc: "/projects/sleepcode-desk.png",
  cta: "So your client wants a Shopify store?",
};

const pageFeaturesContent = {
  eyebrow: "Expertise you can trust",
  title: "Custom Shopify solutions, from themes to apps",
  description:
    "You've designed an amazing store, now you need to get it ready for the end user. You want it to be responsive, fast, and you need it to integrate with your preferred 3rd party service.  You may also need to have a special functionality that no plug-in can do for you. If any of that sounds like you, we'd love to help your reach your goals. See how we develop web products. See how we develop web products",
  // features: [
  //   {
  //     name: "Shopify themes",
  //     description:
  //       "Giving great service is one of the most (if not the most) important of our core values. We want you to feel comfortable and confident that you made a great decision in hiring us. We can integrate into your teams PM tools and communication channels so you feel we are part of your team and not just a group of outsiders.",
  //     icon: SwatchIcon,
  //   },
  //   {
  //     name: "Shopify app development",
  //     description:
  //       "Perfect if you need to have a custom app for Shopify commerce or you have an idea for an app you’d like to put on the Shopify Store.",
  //     icon: ArrowDownOnSquareStackIcon,
  //   },
  //   {
  //     name: "Headless Shopify",
  //     description:
  //       "Integrate a store outside of Shopify: If you have a site on a mother platform (such as WordPress) but you still want to use Shopify to manage your e-commerce, we can use the Shopify Front End API to create the store where your website is. Shopify will still handle both the checkout payment and payment security.",
  //     icon: BuildingStorefrontIcon,
  //   },
  // ],
};

const projects = [
  {
    title: "The Sleep Code",
    agency: "Wondersauce",
    tags: ["Shopify", "Algolia"],
    href: "https://thesleepcode.com/",
    imageUrl: "/projects/sleepcode-bg.jpg",
  },
  {
    title: "Janessa Leoné",
    agency: "Direct",
    tags: ["Shopify", "Algolia", "API"],
    href: "https://janessaleone.com/",
    imageUrl: "/projects/janessa-bg.jpeg",
  },
  {
    title: "Levain Bakery",
    agency: "Wondersauce",
    tags: ["Shopify", "Bundles"],
    href: "https://levainbakery.com/",
    imageUrl: "/projects/levain-bg.jpeg",
  },
  {
    title: "Velvet Caviar",
    agency: "Progress Labs",
    tags: ["Shopify", "Bundles", "Scripts"],
    href: "https://velvetcaviar.com/",
    imageUrl: "/projects/velvetcaviar-bg.png",
  },
  {
    title: "Six Penny",
    agency: "Wondersauce",
    tags: ["Shopify", "Bundles"],
    href: "https://sixpenny.com/",
    imageUrl: "/projects/sixpenny-bg.jpeg",
  },
  {
    title: "Pinhook Bourbon",
    agency: "Decimal",
    tags: ["Shopify"],
    href: "https://www.pinhookbourbon.com/",
    imageUrl: "/projects/pinhook-bg.jpeg",
  },
];

export default function Page() {
  return (
    <MainLayout>
      <PageHero {...heroContent} />
      <PageFeatures {...pageFeaturesContent} />
      <PageProjects projects={projects} title="Our Shopify Work" />
      <Testimonial
        quote={`“We wanted someone that would really care about our store. We were really thrilled with how Juan handled all our requests. We could not be happier with our decision to hire them”`}
        name="Jaymee Harney"
        title="CFO @ Janessa Leoné"
      />
    </MainLayout>
  );
}
