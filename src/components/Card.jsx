import { motion } from 'framer-motion';

const GlassCard = ({ title, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl transition-all"
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};