import Button from "@/app/ui/Button";
import Link from "next/link";
import React from "react";

const Navber = () => {
  return (
    <div className="navbar bg-blue-200 z-50 fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <a>Classes</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-black">Fit🏋🏻‍♀️Fine</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Classes</summary>
              <ul className="p-2 bg-transparent">
                <li>
                  <Link href={"/class"}>Class</Link>
                </li>
                <li>
                  <Link href={"class-details"}>Class Details</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 bg-transparent">
                <li>
                  <Link href={"/features"}>Features</Link>
                </li>
                <li>
                  <Link href={"/details"}>Details</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/class"}>
          <Button description="Join Now" />
        </Link>
      </div>
    </div>
  );
};

export default Navber;
