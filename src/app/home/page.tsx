"use client";
import Solutions from "../components/home/Solutions"
import Hero from "../components/home/Hero"
import WhyChooseUs from "../components/home/WhyChooseUs"
import TechStack from "../components/home/TechStack"
import CallToAction from '../components/home/CallToAction'; // Import the new CTA component
import AboutUsBrief from '../components/home/AboutUsBrief';

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
    

      <WhyChooseUs/>
      <TechStack/>
      <AboutUsBrief /> {/* A brief intro before a final CTA */}
      <CallToAction /> {/* A strong final call to action */}
    </>
  );
}

