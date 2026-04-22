import React from "react";
import { motion } from "framer-motion";
import { HoverTitle } from "@/components/desktop/AnimaTitle";

const HomeContent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 brightness-100">
        <source src={`${import.meta.env.BASE_URL}video/cover1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.{" "}
      </video>
      <div className="absolute inset-0 backdrop-blur-[1px] z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
          <h1 className="font-angel text-[clamp(4rem,6vw,25rem)] text-white super-glow leading-[0.7] tracking-tight select-none"><HoverTitle 
              text="What's Inside Pey's Life" 
            /></h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContent;