import React from "react";
import { Link } from "react-scroll";
import { NAVIGATION_LINK } from "./link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 capitalize text-[15px]">
        {NAVIGATION_LINK.map((item, id) => {
          return (
            <li
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#4b6043] duration-300 p-1 rounded-lg"
              key={id}
            >
              <Link
                to={item.path}
                activeClass="active"
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
    </nav>
  );
};

export default Nav;
