import React from "react";
import { motion } from "framer-motion";
import { HoverText } from "@/components/desktop/AnimaText";
import { HoverTitle } from "@/components/desktop/AnimaTitle";

const AboutSection = () => {
  const introText =
    "I’m Pey, so Welcome to my space, where I chronicle the milestones of mylife. Whether it be a small moment or a big bang, its all quite enchanting, as nothing here could have unfold nor flourish w/o the divine will of God.";

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-10 md:px-24">
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}photo/cover.jpg`} className="w-full h-full object-cover" alt="Background" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }} className="relative w-full md:w-1/2 flex items-left justify-left">
          <motion.img
            src={`${import.meta.env.BASE_URL}photo/sun.png`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute md:w-[700px] opacity-80 mix-blend-screen top-5 -left-10"
            alt="Sun"
          />
          <img src={`${import.meta.env.BASE_URL}photo/catperson.png`} className="relative z-10 w-[250px] md:w-[600px] drop-shadow-2xl top-50" alt="Cat Person" />
        </motion.div>

        <div className="w-full md:w-1/2 text-right flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <HoverTitle text="Ssup! Here I Am" className="font-angel md:text-5xl text-white super-glow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-desc md:text-3xl text-white/90 leading-relaxed tracking-normal"
          >
            <HoverText text={introText} className="justify-center uppercase" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;