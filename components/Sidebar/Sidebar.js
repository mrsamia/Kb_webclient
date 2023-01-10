import SidebarItem from "./SidebarItems"
import Styles from './sidebar.module.css';
import SidebarData from "./SidebarData";
import { useState } from "react";
import Image from "next/image";
import dealicon from '../../public/Images/dealicon.svg';
import BazarIcon from '../../public/Images/BazarIcon.svg';
import grocery from '../../public/Images/geocery.jpg';
import fashion from '../../public/Images/fashion.jpg';
import gadget from '../../public/Images/gadget.jpg';
import Link from "next/link";

export default function Sidebar({ windowSize, showSidebar }) {

  return (
    <div className={windowSize > 1023 ? [Styles.scrollbarCustom, " "].join(' ') : (showSidebar ? [Styles.sideBarSmallScreenOpen, " "].join(' ') : [Styles.sideBarSmallScreenClose, " "].join(' '))}  >

      <div className="flex px-4 py-4 bg-white">
        <div>
          <Link href="#"> <Image src={grocery} alt="img" width={60} height={100}  />
            <p className="text-sm text-center font-light pt-0.5">Grocery</p></Link>
        </div>
        <div>
          <Link href="#"><Image src={fashion} alt="img" width={60} height={100} className="mx-3 " />
            <p className="text-sm text-center font-light pt-0.5">Fashion</p></Link>
        </div>
        <div>
          <Link href="#"> <Image src={gadget} alt="img" width={60} height={100}/>
            <p className="text-sm text-center font-light pt-0.5">Gadget</p></Link>
        </div>
      </div>

      <div className="px-4 border border-gray py-4 bg-[#F9FDFE]">
        <div className="flex">
          <Image src={BazarIcon} alt="img" />
          <Link href="#"><p className="text-[#F38020] text-sm uppercase pl-2">Krazy points</p></Link>
        </div>
        <div className="flex">
          <Image src={BazarIcon} alt="img" />
          <Link href="#"><p className="text-[#16A8E1] text-sm py-3 uppercase pl-2">Krazy offers</p></Link>
        </div>
        <div className="flex">
          <Image src={dealicon} alt="img" />
          <Link href="#"><p className="text-[#EB2326] text-sm uppercase pl-2">weekly deals</p></Link>
        </div>
      </div>
      {/* <div>
        <p className="uppercase pt-2 pb-4 underline underline-offset-2 px-4">All categories</p>
      </div> */}
      <div className="pt-2 bg-[#F9FDFE]">
        {
          // eslint-disable-next-line react/jsx-key
          SidebarData.map((singleItem) => <SidebarItem singleItem={singleItem} />)
        }
      </div>
    </div>
  )
}