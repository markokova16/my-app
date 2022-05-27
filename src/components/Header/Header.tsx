import React, { useState } from "react";

// youtube https://www.youtube.com/watch?v=74ys-dT94mA, nije responzivno

const Nav = () => {
  let Links = [
    { name: "Blog", link: "/" },
    { name: "About", link: "/" },
    { name: "Links", link: "/" },
    { name: "Projects", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="border-b-4 w-full sticky z-10 top-0 left-0 md:block">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ld:hidden">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          Nordic Rose
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        ></div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;