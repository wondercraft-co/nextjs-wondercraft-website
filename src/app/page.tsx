import Clients from "@/components/molecules/Clients";
import MainHero from "@/components/molecules/MainHero";
import MainLayout from "@/components/molecules/MainLayout";
import OurServices from "@/components/molecules/OurServices";
import Testimonial from "@/components/molecules/Testimonial";

export default function Home() {
  return (
    <MainLayout>
      <MainHero />
      <Clients />
      <Testimonial
        logo="/logos/wondersauce-white.svg"
        quote={`"They have been an incredible partner in many of our projects. I would trust them with any hard project we come across."`}
        name="Marc Cracco"
        title="CTO of Wondersauce"
      />
      <OurServices />
    </MainLayout>
  );
}
