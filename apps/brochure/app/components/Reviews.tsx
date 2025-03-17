import React from "react";

const Reviews = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-6xl font-bold mb-6 font-hero-heading tracking-wider">
          Learning that makes a difference
        </h2>
        <div className="mt-10 p-8 grid grid-cols-1 md:grid-cols-2 gap-10 font-subtext-heebo">
          {/* gotta make a map of userDetails for this */}
          <div className="review-card group">
            <img
              src="/girl.png"
              alt="User 1"
              className="w-52 h-52 rounded-full mb-4 border-2 border-[#5A7D9A] group-hover:brightness-110 duration-300 group-hover:scale-105"
            />
            <p className="text-lg italic">
              "This isn’t just about saving. It’s about planning my future."
            </p>
            <h4 className="mt-2 font-semibold">- Meera</h4>
          </div>
          <div className="review-card group">
            <img
              src="/boy.png"
              alt="User 2"
              className="w-52 h-52 rounded-full mb-4 border-2 border-[#5A7D9A] group-hover:brightness-110 duration-300 group-hover:scale-105"
            />
            <p className="text-lg italic">
              "I learned to budget my pocket money and saved for my favorite
              book!"
            </p>
            <h4 className="mt-2 font-semibold">- Kabir</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
