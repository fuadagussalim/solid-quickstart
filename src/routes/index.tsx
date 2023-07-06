
import Navbar from "~/components/NavBar/Navbar";
import ExploreSection from "~/components/Section/ExploreSection";
import FeaturedSection from "~/components/Section/FeatureSection";
import HeroSection from "~/components/Section/HeroSection";


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturedSection></FeaturedSection>
      <ExploreSection></ExploreSection>
    </main>
  );
}
