import React from "react";
import Navbar from "@/components/desktop/NavbarDesktop";
import { VscHome, VscNotebook, VscChatSparkle, VscPerson } from "react-icons/vsc";

const MainLayout = ({ children }) => {
  const navItems = [
    { icon: <VscHome size={20} />, label: "Home", onClick: () => console.log("Home") },
    { icon: <VscPerson size={20} />, label: "Profile", onClick: () => console.log("Profile") },
    { icon: <VscNotebook size={20} />, label: "Archive", onClick: () => console.log("Settings") },
    { icon: <VscChatSparkle size={20} />, label: "Contact", onClick: () => console.log("Archive") },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[0%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* RENDER KONTEN */}
      <main className="relative z-10 min-h-screen">{children}</main>

      {/* Desktop Version */}
      <div className="hidden lg:block fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
        <Navbar items={navItems} magnification={70} baseItemSize={50} panelHeight={70} />
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full flex justify-center px-6">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 w-fit">
          <Navbar items={navItems} magnification={0} baseItemSize={45} panelHeight={60} distance={0} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;