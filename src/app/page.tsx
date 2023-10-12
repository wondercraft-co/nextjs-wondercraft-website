import Clients from "@/components/molecules/Clients";
import MainFooter from "@/components/molecules/MainFooter";
import MainHeader from "@/components/molecules/MainHeader";
import MainHero from "@/components/molecules/MainHero";
import OurServices from "@/components/molecules/OurServices";
import Testimonial from "@/components/molecules/Testimonial";

export default function Home() {
  return (
    <main className="">
      <MainHero />
      <Clients />
      <Testimonial
        logo="/logos/wondersauce-white.svg"
        quote={`"They have been and incredible partner in many of our projects. I
              would trust them any hard project we come across"`}
        name="Marc Cracco"
        title="CTO of Wondersauce"
      />
      <OurServices />
    </main>
  );
}
