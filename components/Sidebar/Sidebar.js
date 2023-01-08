import SidebarItem from "./SidebarItems"
import Styles from './sidebar.module.css';
import SidebarData from "./SidebarData";
import { useState } from "react";

export default function Sidebar({windowSize,showSidebar}) {
 
  return (
    <div  className={windowSize > 1023 ? [Styles.scrollbarCustom," "].join(' ') : (showSidebar ?  [Styles.sideBarSmallScreenOpen," "].join(' ') : [Styles.sideBarSmallScreenClose," "].join(' ')) }  >
      {
        // eslint-disable-next-line react/jsx-key
        SidebarData.map((singleItem) => <SidebarItem  singleItem={singleItem} />)
      }
    </div>
  )
}