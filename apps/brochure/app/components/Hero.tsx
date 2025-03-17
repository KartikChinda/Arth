"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[80vh] lg:flex lg:justify-around lg:items-center p-10">
      <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col">
        <div className=" font-hero-heading font-extrabold text-4xl lg:text-8xl mb-8 tracking-wide text-center lg:text-left">
          <span className="text-3xl lg:text-7xl font-semibold">
            Master Money.
          </span>
          <br />
          Shape Your Future.
        </div>
        <div className="font-subtext-heebo font-light mt-6 lg:mb-0 text-xl text-center lg:text-left">
          At Arth, we believe that financial education is the foundation for a
          secure future.
          <p className="font-subtext-heebo font-light mt-4 lg:mb-0 text-xl text-center lg:text-left">
            Our gamified platform helps learners master the skill of financial
            management through interactive lessons, engaging challenges, and
            powerful tools. Guided by Arth, our playful owl mascot, users learn
            to save smart, spend wisely, and achieve their financial goals—all
            while having fun.
          </p>
        </div>
        <div className="mt-6 flex justify-center items-center gap-4">
          <Link
            href={"/"}
            onClick={() => {}}
            className="mt-4 rounded-xl bg-navorange px-8 py-3  font-subtext-heebo uppercase font-black text-2xl hover:bg-white border-4 border-navorange hover:border-navorange duration-150 "
          >
            <span className="lg:hidden">Start</span>
            <span className="hidden lg:block">Start Your Journey</span>
          </Link>
          <Link
            href={"#donate"}
            className="mt-4 rounded-xl bg-white px-8 py-3  font-subtext-heebo uppercase font-black text-2xl border-4 border-navorange"
          >
            Donate
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center  lg:w-[50%]">
        <Image
          src={"/mascot.png"}
          alt="Notebook"
          priority
          width={500}
          height={500}
          className="rounded-2xl  hover:brightness-105 duration-300 hover:scale-[1.04] "
        />
      </div>
    </div>
  );
};

export default Hero;
