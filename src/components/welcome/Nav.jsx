import React from "react";

// import navigation data
import { navigation } from "../../lib/data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, id) => {
          return (
            <li className="hover:text-accent cursor-pointer" key={id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
