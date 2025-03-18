import React from "react";

const DonateSection = () => {
  return (
    <section id="donate" className="flex justify-center items-center h-screen ">
      <div
        className="relative  h-[100vh] bg-contain bg-center bg-no-repeat  flex items-center justify-center text-black"
        style={{ backgroundImage: "url('/donatebg.png')" }}
      >
        <div className="relative -top-10 p-8 rounded-lg text-center">
          <h1 className="text-4xl font-bold font-hero-heading tracking-wide">
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
          <button className="relative top-24 rotating-button bg-black text-white px-6 py-6 w-32 h-32 rounded-full font-bold hover:animate-none hover:text-xl duration-300 hover:bg-navorange hover:text-black border-2 border-black">
            Donate Now.
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
