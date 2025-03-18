"use client";
import React, { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import ComingSoonModal from "./ComingSoonModal";

const DonateSection = () => {
  const [openModal, setopenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setopenModal(false));
  return (
    <section id="donate" className="flex justify-center items-center h-screen ">
      {openModal && <ComingSoonModal setModalOpen={setopenModal} />}
      <div
        className="relative  h-[100vh] bg-contain bg-center bg-no-repeat  flex items-center justify-center text-black"
        style={{ backgroundImage: "url('/donatebg.png')" }}
      >
        <div className="relative -top-10 p-8 rounded-lg text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold font-hero-heading tracking-wide">
            Together, let's empower the next generation
          </h1>
          <p className="pt-14 font-subtext-heebo">
            Your support helps us bring <strong>financial literacy</strong> to
            more students. <br />
            Every contribution empowers young minds with the knowledge they need
            to build a <strong>brighter future</strong>. <br />
            With your help, we can reach more classrooms, provide better
            resources, and create <strong>lasting change</strong>. <br />
            Thank you for believing in our mission and making a difference.{" "}
            <br />
            Together, we can shape a world where <strong>
              every student
            </strong>{" "}
            has the tools to succeed.
          </p>
          <button
            onClick={() => setopenModal(true)}
            className="relative top-24 rotating-button bg-[#FFF7D1] text-black font-subtext-heebo px-6 py-6 w-32 h-32 rounded-full font-bold hover:animate-none hover:text-xl duration-300 hover:bg-black hover:text-[#FFF7D1] "
          >
            Donate Now.
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
