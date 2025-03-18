import React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import DonateSection from "./components/DonateSection";

const page = () => {
  return (
    <div className="p-8">
      <Hero />
      <Reviews />
      <DonateSection />
    </div>
  );
};

export default page;
