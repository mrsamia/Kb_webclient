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
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPersonPlusFill } from "react-icons/bs";

function Nav({ showSideBarHandler }) {
  const [language, setLanguage] = useState(false)

  function languageHandler() {
    setLanguage(!language);

  }
  const [threeDotsVertical,setthreeDotsVertical]= useState(false)
function ThreeDotsVertical(){
  setthreeDotsVertical(!threeDotsVertical);
}
  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-green-500 shadow ">
        <div className="flex md:items-center">


          {/* logo section */}
          <div className="w-60 flex items-center text-white">
            <div className="lg:hidden" onClick={showSideBarHandler} >
              <RxHamburgerMenu className={Styles.hamBergerMenuIcon} />

            </div>
            <div className=" pt-3 pb-3 sm:pl-4 sm:pr-4 lg:pl-12 lg:pr-12 ">
              <Image src={KbLogo} alt="img" className="" />
            </div>
          </div>


          {/* search bar with othder item section */}
          <div className="bg-green-500 flex-grow flex items-center sm:px-2 md:px-10 ">
            <div className="flex-grow">
              <form>
                <div className="relative sm:w-full">
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

            <div className="lg:flex  hidden ">
              <div className="flex text-white sm:pl-4">
                <div className="flex items-center pr-2 pl-7 ">
                  <Image src={location} alt="img" />
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="text-xs ">Deliver to</p>
                    <h3 className="text-sm font-bold">NSW</h3>
                  </div>
                </div>
              </div>

              <div className="flex text-white sm:pl-4">
                <div className="flex items-center pr-2 pl-8 ">
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
                  language ? <div className="absolute right-0 z-10 mt-10  w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                    <ul>
                      <li>
                        <a href="" className="text-green-700 block px-4 py-2 text-xs hover:bg-gray-100 hover:rounded-md">Bangla</a>
                      </li>
                      <li>
                        <a href="#" className="text-green-700 block px-4 py-2 text-xs hover:bg-gray-100 hover:rounded-md">English</a>
                      </li>
                    </ul>
                  </div> : null
                }
              </div>
            </div>
            <div className="text-white lg:hidden" onClick={ThreeDotsVertical}>
              <BsThreeDotsVertical className={Styles.hamBergerMenuIcon}/>
            </div>

          { threeDotsVertical ? <div className="absolute right-0 z-10 mt-60 py-5 w-96 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         
              <div className="flex sm:pl-4 ">
                <div className="flex items-center pr-2 pl-8 ">
                  <BsPersonPlusFill className="text-2xl"/>
                </div>
                <div>
                  <p className="text-lg font-light">Sign in</p>
                </div>
              </div>
              <div className="flex  sm:pl-4 py-4">
                <div className="flex items-center pr-2 pl-7 ">
                <TbTruckDelivery className="text-2xl"/>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center ">
                    <p className="text-lg font-light">Deliver to NSW</p>    
                  </div>
                </div>
              </div>
              <div className="flex sm:pl-4">
             <div className="flex items-center pr-2 pl-7">
             <Image src={flag1} alt="img" />
             </div>
                <p className=" flex items-center text-lg font-light">language</p>
              </div>
              
            </div> : " "}
          </div>
        </div>


      </nav>
    </div>
  );
}

export default Nav;
