import React from "react";
import { motion } from "framer-motion";
import { HoverText } from "@/components/desktop/AnimaText";
import { HoverTitle } from "@/components/desktop/AnimaTitle";

const AboutSection = () => {
  const introText =
    "I’m Pey, so Welcome to my space, where I chronicle the milestones of mylife.";

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-24">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}photo/cover.jpg`}
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Matahari di pojok kanan atas, lebih kecil */}
      <motion.img
        src={`${import.meta.env.BASE_URL}photo/sun.png`}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150px] md:w-[220px] opacity-80 mix-blend-screen top-6 right-6 md:top-10 md:right-10 z-0"
        alt="Sun"
      />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center -translate-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <HoverTitle
            text="Hold on, something's cooking"
            className="font-angel text-5xl text-white super-glow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-desc text-3xl text-white/90 leading-relaxed tracking-normal"
        >
          <HoverText text={introText} className="justify-center uppercase" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
