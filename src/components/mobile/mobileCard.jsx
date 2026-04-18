const MobileNav = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-16 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-around px-6 z-50">
      {['Home', 'Journal', 'Me'].map((item) => (
        <motion.button 
          key={item}
          whileTap={{ scale: 0.8 }}
          className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
        >
          {item}
        </motion.button>
      ))}
    </nav>
  );
};