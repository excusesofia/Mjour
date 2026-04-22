import { motion } from 'framer-motion';

const AnimatedLetter = ({ letter }) => {
  return (
    <motion.span
      className="inline-block cursor-default hover:text-white transition-colors duration-300"
      whileHover={{ 
        y: -15, 
        rotate: -10, 
        scale: 1.2,
        textShadow: "0px 0px 15px rgba(255,255,255,0.8)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export const HoverText = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split("").map((char, i) => (
        <AnimatedLetter key={i} letter={char} />
      ))}
    </div>
  );
};