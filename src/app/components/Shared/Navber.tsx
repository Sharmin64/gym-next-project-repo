import Button from "@/app/commonui/Button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#ffab91] z-50 fixed top-0 w-full ">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
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
            className="menu menu-sm dropdown-content bg-[#ffcdbd] rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Classes</summary>
                <ul className="p-2 bg-blue-200">
                  <li>
                    <Link href={"/class"}>Class</Link>
                  </li>
                  <li>
                    <Link href={"/class-details"}>Class Details</Link>
                  </li>
                </ul>
              </details>
              <details>
                <summary>Authentication</summary>
                <ul className="p-2 bg-blue-200">
                  <li>
                    <Link href={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link href={"/register"}>Sign Up</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-blue-200">
                  <li>
                    <Link href={"/features"}>Features</Link>
                  </li>
                  <li>
                    <Link href={"/feature-details"}>Feature Details</Link>
                  </li>
                  <li>
                    <Link href={"/pricing"}>PricingPlan</Link>
                  </li>
                  <li>
                    <Link href={"/trainer-profile"}>Trainer Profile</Link>
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
        {/* Brand Logo */}
        <Link href={"/"} className="btn btn-ghost text-2xl text-black">
          Fit🏋🏻‍♀️Fine
        </Link>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">
          <li className="relative group">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="relative group">
            <span className="hover:text-white cursor-pointer">Classes</span>
            <ul
              className="absolute left-0 mt-2 w-40 p-2 bg-[#ffcdbd] border rounded shadow-lg 
              transform scale-95 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 
              group-hover:translate-y-8 transition-all duration-500 ease-in-out "
            >
              <li>
                <Link
                  href={"/class"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Class
                </Link>
              </li>
              <li>
                <Link
                  href={"/class-details"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Class Details
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="hover:text-white cursor-pointer">Services</span>
            <ul
              className="absolute left-0 mt-2 w-40 p-2 bg-[#ffcdbd] border rounded shadow-lg 
              transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
              group-hover:translate-y-8 transition-all duration-500 ease-in-out"
            >
              <li>
                <Link
                  href={"/features"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href={"/feature-details"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Feature Details
                </Link>
              </li>
              <li>
                <Link href={"/pricing"}>PricingPlan</Link>
              </li>
              <li>
                <Link href={"/trainer-profile"}>Trainer Profile</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="hover:text-white cursor-pointer">Auth</span>
            <ul
              className="absolute left-0 mt-2 w-40 p-2 bg-[#ffcdbd] border rounded shadow-lg 
              transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
              group-hover:translate-y-8 transition-all duration-500 ease-in-out"
            >
              <li>
                <Link
                  href={"/login"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link href={"/class"}>
          <Button buttonName="Join_Now" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
