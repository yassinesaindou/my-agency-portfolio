"use client";

import { Menu } from "lucide-react";

// import Button from "./components/Button";

import { useState } from "react";
import Button from "./components/Button";
// import Button from "./components/Button";
// import { Menu } from "lucide-react";

export default function Navbar() {
  const links = ["Services", "Why us", "Ou Tech Stack"];
  const [hidden, setHidden] = useState(true);
  return (
    <nav className="flex z-50 gap-4 md:flex-row justify-between items-center py-2 px-4 backdrop backdrop-blur-sm border-b border-gray-700  flex-wrap text-gray-300 mx-auto w-[100%]  fixed top-0">
      <div>LOGO</div>

      <Menu
        size={32}
        className="md:hidden"
        onClick={() => setHidden(!hidden)}
      />
      <div
        className={`${
          hidden ? "hidden md:flex" : ""
        } w-[100%]  md:w-auto text-center`}>
        <ul className=" md:flex gap-3 ">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          hidden ? "hidden md:flex" : ""
        } flex gap-3 flex-col md:flex-row justify-center md:justify-normal w-[100%] md:w-auto`}>
        <Button text="FAQ's" variant="outline" />
        <Button text="Contact us" variant="primary" />
      </div>
    </nav>
  );
}
