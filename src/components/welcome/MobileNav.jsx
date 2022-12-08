import React, { useState } from "react";
import { Link } from "react-scroll";
import { NAVIGATION_LINK } from "./link";

function MobileNav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <button
        className="p-2 text-white rounded-md outline-none border-black border bg-gray-900"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <div>
        <div className={`fixed text-white ${navbar ? "block" : "hidden"}`}>
          <ul className="items-center justify-center bg-black p-3 rounded-lg">
            {NAVIGATION_LINK.map((item, id) => {
              return (
                <li
                  className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 p-1 rounded-lg"
                  key={id}
                >
                  <Link
                    to={item.path}
                    activeClass="active"
                    onClick={() => setNavbar(false)}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
