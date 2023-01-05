// import React from "react";
// import Image from "next/image";
// import KbLogo from "../../public/Images/kb logo.png";
// import SidebarItems from "./SidebarItems";
// import SidebarData from "./SidebarData";
// function Sidebar(props) {
//   return (
//     <div className="w-60 border h-screen">
//       <div className=" pt-3 pb-3 pl-12 pr-12 ">
//      {
//       SidebarData.map((item)=>(
//         <SidebarItems title={item.title}/>
//       ))
//      }
//       </div>
//     </div>
//   );
// }

// export default Sidebar;




import SidebarItem from "./SidebarItems"
import items from "./sidebar.json"
import Styles from './sidebar.module.css';

export default function Sidebar(){
    return (
        <div className={Styles.sidebar}>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}