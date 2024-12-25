"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { data: session } = useSession();

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  // Handling Logout Btn
  const handleLogOutBtn = () => {
    signOut()
    console.log("Successfully Logout");
    
  }
  return (
    <header className="bg-gray-900 py-2 fixed top-0 left-0 z-50 w-full text-white">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo">
            <Link className="text-4xl text-gray-100" href="#">
              <span>Bear</span>
              <span className="text-gray-300 text-3xl">UP</span>
            </Link>
          </div>
          {/* Navbar Section */}
          {session && (
            <ul className="flex text-lg items-center">
              <li className="relative">
                <button
                  onClick={() => setShowDropDown((prev) => !prev)}
                  onBlur={()=>setTimeout(()=> setShowDropDown(false), 500)}
                  id="dropdownDefaultButton"
                  datadropdowntoggle="dropdown"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  type="button"
                >
                  <span>{`Welcome ${session.user.email}`}</span>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className={`z-10 ${
                    showDropDown ? "" : "hidden"
                  }  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 absolute top-11 -left-1 w-full`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li className="self-end">
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <button
                          onClick={handleLogOutBtn}
                          type="button"
                          className="text-white "
                        >
                          SignOut
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          )}
          <div className={`navLinks ${session && "hidden"}`}>
            <ul className="flex justify-center gap-2 items-center">
              <li className="hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded">
                <Link href="#">About</Link>
              </li>
              <li className="hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded">
                <Link href="#">Projects</Link>
              </li>
              <li
                className={` hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded`}
              >
                <Link href="#">Register</Link>
              </li>
              <li className="hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded">
                <Link href="/login">LogIn</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
