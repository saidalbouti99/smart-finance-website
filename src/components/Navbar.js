import React from "react";
import logo from "../img/logo.svg";
function Navbar() {
  return (
    <nav className="bg-primary sticky top-0">
      <div className="container flex items-center mx-auto md:px-28 md:py-4 justify-between">
        <a
          className="text-secondary flex flex-row items-center text-lg font-bold"
          href="#"
        >
          <img src={logo} className="w-11 text-secondary mr-2.5 " />
          SmartFinance
        </a>
        <div className="w-auto">
          <ul className="flex justify-between">
            <li>
              <a
                className="text-secondary text-md mr-10 font-semibold"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-secondary text-md mr-10 font-semibold"
                href="#Features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-secondary text-md mr-10 font-semibold"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-secondary text-md mr-10 font-semibold"
                href="#"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
