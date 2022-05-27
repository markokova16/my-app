import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "BLOG", link: "#" },
    { name: "ABOUT", link: "#" },
    { name: "LINKS", link: "#" },
    { name: "PROJECT", link: "#" },
  ];
  let [open, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-4xl font-bold cursor-pointer flex items-center font-[Poppins]">
          Nordic Rose
        </div>

        <div
          className="w-10 text-3xl absolute right-7 top-6 cursor-pointer md:hidden"
          onClick={toggleHamburger}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
            alt=""
          />
        </div>

        <ul
          className={`${
            !open ? "hidden" : ""
          } md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-5">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
