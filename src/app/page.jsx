import Contact from "@/components/Sections/Contact";
import Newsletter from "@/components/Sections/NewsLetter";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Hero from "@/components/UI/Hero";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
