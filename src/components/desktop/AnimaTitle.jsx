import { motion } from "framer-motion";

const Letter = ({ char }) => {
  return (
    <motion.span
      className="inline-block cursor-default select-none"
      // Animasi saat hover: Hanya memperkuat glow dan sedikit scale up
      whileHover={{
        scale: 1.1, // Sedikit membesar agar efek interaktif terasa
        color: "#ffffff",
        // Glow yang jauh lebih ketara dibanding default super-glow
        filter: "drop-shadow(0 0 25px rgba(255,255,255,1)) drop-shadow(0 0 50px rgba(255,255,255,0.8))",
      }}
      // Transisi balik ke default (tanpa glow tambahan)
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export const HoverTitle = ({ text, className = "" }) => {
  return (
    <h1 className={`flex flex-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <Letter key={index} char={char} />
      ))}
    </h1>
  );
};
