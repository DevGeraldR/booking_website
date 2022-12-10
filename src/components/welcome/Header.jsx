import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

// import components
import Nav from "./Nav";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div
      className={`${
        bg ? "bg-opacity-100 h-20 " : "h-24 bg-gray-800 bg-opacity-20"
      } bg-[#354a21] text-white flex items-center fixed top-0 w-full z-10 transition-all duration-300`}
    >
      <div className="mx-5 lg:mx-20 h-full w-full flex items-center justify-between">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <span className="font-bold text-center">
          MTS.PALAY-PALAY / MATAAS NA GULOD PROTECTED LANDSCAPE
        </span>
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
