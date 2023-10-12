import PageFeatures from "@/components/molecules/PageFeatures";
import PageHero from "@/components/molecules/PageHero";
import PageProjects from "@/components/molecules/PageProjects";
import Testimonial from "@/components/molecules/Testimonial";

export default function Page() {
  return (
    <>
      <PageHero />
      <PageFeatures />
      <Testimonial
        quote={`“The team at Wondercraft exceeded all our expectations, they not only helped us build an amazing product but also contributed hugely to how we present our brand to our clients”`}
        name="John Hill"
        title="CEO @ Hourwise"
      />
      <PageProjects />
    </>
  );
}
