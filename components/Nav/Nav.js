import React, { useEffect, useRef } from "react";
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

function Nav(props) {
  const [language, setLanguage] = useState(false)
  const [Hamburger, setHamburger] = useState(true)
  function HamburgerHandler() {
    setHamburger(!Hamburger)
  }

  function languageHandler() {
    setLanguage(!language);
  }
  const [threeDotsVertical, setthreeDotsVertical] = useState(false)
  function ThreeDotsVertical() {
    setthreeDotsVertical(!threeDotsVertical);
  }

  let menuRef = useRef();
useEffect(()=>{
  document.addEventListener("mousedown",(event)=>{
    if(!menuRef.current.contains(event.target)){
      setthreeDotsVertical(false)
    }
   
  })
})

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-green-500 shadow ">
        <div className="flex md:items-center">

          {/* logo section */}
          <div className="lg:w-60 xl:w-60 flex items-center text-white">
            <div className="lg:hidden" onClick={props.showSideBarHandler} >
              {Hamburger ? <RxHamburgerMenu className={Styles.hamBergerMenuIcon} onClick={HamburgerHandler} /> : <RxCross2 className={Styles.hamBergerMenuIcon} onClick={HamburgerHandler} />}
            </div>
            <div className=" pt-3 pb-3 sm:pl-4 sm:pr-4 lg:pl-12 lg:pr-12 ">
              <Image src={KbLogo} alt="img" className="" />
            </div>
          </div>


          {/* search bar with othder item section */}
          <div className="bg-green-500 flex-grow flex items-center sm:px-2 md:px-10 xs:px-4">
            <div className="flex-grow">
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
            <div className="text-white lg:hidden" onClick={ThreeDotsVertical} ref={menuRef}>
              <BsThreeDotsVertical className={Styles.hamBergerMenuIcon} />
            </div>

            {threeDotsVertical ? <div className="absolute right-0 z-10 mt-56 py-5 w-64 rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

              <Link href="#"> <div className="flex pl-1 ">
                <div className="flex items-center pr-2 pl-8 ">
                  <BsPersonPlusFill className="text-xl" />
                </div>
                <div>
                  <p className="text-md font-light">Sign in</p>
                </div>
              </div></Link>
              <Link href="#"><div className="flex  sm:pl-1 py-4">
                <div className="flex items-center pr-2 pl-7 ">
                  <TbTruckDelivery className="text-xl" />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center ">
                    <p className="text-md font-light">Deliver to NSW</p>
                  </div>
                </div>
              </div></Link>
              <Link href="#"><div className="flex sm:pl-1">
                <div className="flex items-center pr-2 pl-7">
                  <Image src={flag1} alt="img" />
                </div>
                <p className=" flex items-center text-md font-light">language</p>
              </div></Link>

            </div> : " "}
          </div>
        </div>


      </nav>
    </div>
  );
}

export default Nav;
