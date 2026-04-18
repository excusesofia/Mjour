import React from "react";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 brightness-100">
        <source src="/video/cover1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 backdrop-blur-[1px] z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: "easeOut" }} className="flex flex-col items-center">
          <h1 className="font-angel text-[clamp(4rem,15vw,25rem)] text-white super-glow leading-[0.7] tracking-wide select-none">What's Inside Pey's Life</h1>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  );
};

export default HomeContent;