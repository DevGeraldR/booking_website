import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../Context/Context";
import { NAV_BAR_LINKS } from "./links";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { logOut } = useGlobal();

  const handleClick = async () => {
    await logOut().catch((error) => alert(error));
  };

  return (
    <nav className="w-full bg-white border-b border-b-blue-900">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold">MPPMNGPL Admin</h2>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_BAR_LINKS.map((link) => (
                <SidebarLink key={link.key} link={link} />
              ))}
              <li
                className="text-red-600 hover:text-red-900 cursor-pointer"
                onClick={handleClick}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={
        pathname === link.path
          ? "border-b border-b-blue-600 hover:border-b-blue-900 border-b-[2px] text-blue-600 hover:text-blue-900"
          : "text-gray-600 hover:text-blue-600"
      }
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default NavBar;
