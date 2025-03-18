import React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import DonateSection from "./components/DonateSection";
import Features from "./components/Features";

const page = () => {
  return (
    <div className="p-8">
      <Hero />
      <Features />
      <Reviews />
      <DonateSection />
    </div>
  );
};

export default page;
