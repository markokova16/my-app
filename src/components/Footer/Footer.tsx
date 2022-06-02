import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center items-center bg-black text-white w-full overflow-x-hidden">
      <div className="flex justify-between space-x-10 tracking-widest overflow-x-hidden md:justify-center">
        <div className="font-bold">DIGITAL PRODUCT DESIGN</div>
        <div>REMOTE WORK</div>
        <div className="font-bold">UX DESIGN</div>
        <div>DISTRIBUTED TEAMS</div>
        <div className="font-bold">CREATIVITY</div>
        <div>STRATEGY</div>
        <div className="font-bold">SUSPENSE</div>
        <div>GROWTH</div>
        <div className="font-bold">SUPPORT 24/7</div>
        <div>MAGIC</div>
        <div className="font-bold">IMPROVEMENT</div>
        <div>CLASS</div>
      </div>

      <div className="my-5 flex justify-center items-center space-x-10 tracking-widest ">
        NORDIC ROSE
      </div>
      <div className="text-xs text-center ml-10 mr-10  ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        reiciendis facere debitis similique quidem? Ad temporibus quasi cumque
        amet error?
      </div>

      <div className="flex  my-5 underline ">
        <div>Twitter</div>
        <div className="mx-5">Linkedin</div>
        <div>RSS</div>
      </div>

      <div className="my-5 text-xs">2012-2020 Nordic Rose Co.</div>
      <div className="text-xs">All rights reserved.</div>
    </div>
  );
};

export default Footer;
