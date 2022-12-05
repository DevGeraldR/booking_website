import React, { useEffect, useState } from "react";

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
    <header
      className={`${
        bg ? "bg-green-900 h-20" : "h-24"
      } text-white flex items-center fixed top-0 w-full z-10 transition-all duration-300`}
    >
      <div className="mx-20 h-full w-full flex items-center justify-between">
        <span className="font-bold">
          MTS.PALAY-PALAY / MATAAS NA GULOD PROTECTED LANDSCAPE
        </span>
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
