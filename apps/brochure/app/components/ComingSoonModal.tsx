"use client";
import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const ComingSoonModal = (setmodalOpen: any) => {
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setmodalOpen(false));
  return <div ref={popupRef}>ComingSoonModal</div>;
};

export default ComingSoonModal;
