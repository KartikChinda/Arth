import React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

const page = () => {
  return (
    <div className="p-8">
      <Hero />
      <Reviews />
    </div>
  );
};

export default page;
