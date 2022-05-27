import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center items-center bg-black text-white w-screen overflow-x-hidden">
      <div className="flex justify-between">
        <div className="font-bold">DIGITAL PRODUCT DESIGN</div>
        <div>REMOTE WORK</div>
        <div className="font-bold">UX DESIGN</div>
        <div>DISTRIBUTED TEAMS</div>
        <div className="font-bold">CREATIVITY</div>
        <div>STRATEGY</div>
        <div className="font-bold">SUPPORT 24/7</div>
        <div>AGILE</div>
      </div>

      <div className="my-5 flex justify-center items-center">NORDIC ROSE</div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        reiciendis facere debitis similique quidem? Ad temporibus quasi cumque
        amet error?
      </div>

      <div className="flex justify-between items-center my-5 underline">
        <div>Twitter</div>
        <div className="mx-5">Linkedin</div>
        <div>RSS</div>
      </div>

      <div className="my-5">2012-2020 Nordic Rose Co.</div>
      <div>All rights reserved.</div>
    </div>
  );
};

export default Footer;
