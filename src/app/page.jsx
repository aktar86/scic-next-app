import Contact from "@/components/Sections/Contact";
import FeaturedCategories from "@/components/Sections/FeaturedCategories";
import LatestProducts from "@/components/Sections/LatestProducts";
import Newsletter from "@/components/Sections/NewsLetter";
import Testimonials from "@/components/Sections/Testimonials";
import TopProducts from "@/components/Sections/TopProducts";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Hero from "@/components/UI/Hero";
import React from "react";

export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCategories />
      <TopProducts />
      <LatestProducts />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
