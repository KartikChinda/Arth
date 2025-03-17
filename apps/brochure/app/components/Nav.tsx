"use client";
import React, { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";
import ComingSoonModal from "./ComingSoonModal";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const popupRef = useRef(null);

  useClickOutside(popupRef, () => setIsOpen(false));

  return (
    <div className="">
      {modalOpen && <ComingSoonModal />}
      <header className="bg-navorange shadow-md p-2 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="pl-10 flex gap-2 justify-center items-center">
            <Image src={"/logo.png"} alt="" width={60} height={30} />
            <Link
              href={"/"}
              className="text-5xl font-semibold font-hero-heading tracking-wider mt-1"
            >
              ARTH
            </Link>
          </div>

          <button
            className="p-2 pr-8 duration-200 hover:font-extrabold rounded focus:ring-0 focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {isOpen && (
            <div
              ref={popupRef}
              className="absolute top-4 right-4 bg-white shadow-lg rounded-lg p-4 w-48 border-2 border-navorange"
            >
              <ul className="flex flex-col space-y-2 gap-2">
                <li>
                  <Link
                    href="#"
                    onClick={() => {
                      setmodalOpen(true);
                    }}
                    className="nav-feature"
                  >
                    Expense Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => {
                      setmodalOpen(true);
                    }}
                    className="nav-feature"
                  >
                    Goal Setter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => {
                      setmodalOpen(true);
                    }}
                    className="nav-feature"
                  >
                    Progress Map
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Nav;
