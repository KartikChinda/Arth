"use client";
import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const ComingSoonModal = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setModalOpen(false));
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
      <div
        className="bg-white p-6 rounded-lg w-[90%] md:w-[600px] shadow-lg relative "
        ref={modalRef}
      >
        <button
          onClick={() => {
            setModalOpen(false);
          }}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 font-heading-barlow">
          Coming Soon!
        </h2>
        <p className="text-base text-textBrown font-subtext-heebo mt-10 text-justify px-2 h-[300px] overflow-auto md:h-auto ">
          "Thank you so much for your interest in what we&apos;re building!{" "}
          <br />
          It truly means the world to us. <br />
          <br />
          We&apos;re working hard behind the scenes to create something special,
          and we can&apos;t wait to share it with you. Every detail matters, and
          we want to make sure it&apos;s just right before it reaches you.{" "}
          <br />
          <br />
          Stay tuned, and check back soon—we promise it&apos;ll be worth the
          wait!"
        </p>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            className="mt-10 rounded-xl bg-navorange px-4 py-1  font-hero-heading tracking-wider font-black  text-2xl hover:bg-white border-4 border-navorange hover:border-navorange duration-150 "
          >
            Close Popup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
