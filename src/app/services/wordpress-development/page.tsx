import PageFeatures from "@/components/molecules/PageFeatures";
import PageHero from "@/components/molecules/PageHero";
import PageProjects from "@/components/molecules/PageProjects";
import Testimonial from "@/components/molecules/Testimonial";
import {
  ClipboardDocumentCheckIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordpress Development - Wondercraft",
  description:
    "One of our core services is Wordpress development. We can help you build a custom theme or plugin for your client.",
};

const heroContent = {
  title: "Wordpress Development",
  description:
    "Wordpress is the most popular and versatile Content Management System. We love it as much as you do because it enables your clients to have the control they need without a steep learning curve.",
  iconSrc: "/wordpress-logo.svg",
  imgSrc: "/projects/lifestance-desk.png",
  cta: "What is your project about?",
};

const pageFeaturesContent = {
  eyebrow: "Expertise you can trust",
  title: "Unlock the Power of WordPress Development",
  description:
    "At our company, we specialize in WordPress development, harnessing the full potential of this versatile platform to create stunninq websites that drive results. With our expertise, you can take your online presence to the next level.",
  features: [
    {
      name: "Custom WordPress Theme Development",
      description:
        "We specialize in creating custom WordPress themes tailored to your unique brand and design requirements. Our experienced developers will work closely with you to ensure that your website stands out and delivers an exceptional user experience.",
      icon: SwatchIcon,
    },
    {
      name: "WordPress Plugin Development",
      description:
        "Need a custom plugin for your WordPress website? Our team of skilled developers can create powerful and reliable plugins that enhance the functionality of your site. Whether it's a simple contact form or a complex e-commerce integration, we've got you covered.",
      icon: ClipboardDocumentCheckIcon,
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero {...heroContent} />
      <PageFeatures {...pageFeaturesContent} />
      <Testimonial
        quote={`“They always keep the integrity of our designs, and they make our products come to life like no one else.”`}
        name="Allison Sromek"
        title="Account Director @ Studio Neue"
      />
      {/* <PageProjects /> */}
    </>
  );
}
