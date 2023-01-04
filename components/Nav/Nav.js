import React from "react";
import Link from "next/link";
import { useState } from "react";
import KbLogo from "../../public/Images/kb logo.png";
import location from "../../public/Images/location.svg";
import cart from "../../public/Images/cart.svg";
import profile from "../../public/Images/profile_outlined.svg";
import flag1 from "../../public/Images/flag1.svg";
import downArrow from "../../public/Images/down_arrow_filled.png";
import Image from "next/image";
import Styles from "./nav.module.css";

function Nav(props) {
  const [language,setLanguage]=useState(false)
  function languageHandler(){
    setLanguage(!language);

  }
  return (
    <div>
      <nav className="bg-green-500 shadow">
        <div className="flex">
          <div className="w-60">
            <div className=" pt-3 pb-3 pl-12 pr-12 ">
              <Image src={KbLogo} alt="img" className="" />
            </div>
          </div>
          <div className="bg-green-500 flex-grow flex items-center px-10">
            <div className=" flex-grow">
              {/* <input type="search" className={Styles.searchbar}/> */}

              <form>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full py-2 pl-5 pr-4 text-gray-500 border rounded-md outline-none  focus:bg-white"
                  />
                </div>
              </form>
            </div>
            <div className="flex ml-auto">
              <div className="flex text-white">
                <div className="flex items-center pr-2 pl-7">
                  <Image src={location} alt="img" />
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="text-xs">Deliver to</p>
                    <h3 className="text-sm font-bold">NSW</h3>
                  </div>
                </div>
              </div>

              <div className="flex text-white">
                <div className="flex items-center pr-2 pl-8">
                  <Image src={profile} alt="img" />
                </div>
                <div>
                  <p className="text-xs">Sign in</p>
                  <h3 className="text-sm font-bold">Account</h3>
                </div>
              </div>
              <div className="flex text-white relative pl-7" onClick={languageHandler}>  
                <div className="flex items-center">
                 <Image src={flag1} alt="img" />
                  <button className="flex items-center pl-2">
                    EN
                    <svg
                      class="ml-2 w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                 
                </div>
                 {
                  language? <div className="absolute right-0 z-10 mt-10  w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                  <ul>
                    <li>
                      <a href="" className="text-green-700 block px-4 py-2 text-xs hover:bg-gray-100 hover:rounded-md ">Bangla</a>
                    </li>
                    <li>
                      <a href="#" className="text-green-700 block px-4 py-2 text-xs hover:bg-gray-100 hover:rounded-md" >English</a>
                    </li>
                  </ul>
                </div>:null
                 }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
