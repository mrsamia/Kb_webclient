import Image from "next/image";
// import React from "react";
// import fruitVeg from "../../public/Images/fruit-veg.svg";
import rightArrow from "../../public/Images/back-arrow-icon.svg";
// import sidebarData from "./SidebarData";

// function SidebarItems(props) {
//   return (
//     <div>
//       <div className="flex justify-between">
//         <span className="flex text-sm pt-3">
//           <Image src={fruitVeg} alt="img" />
//           {props.title}
//         </span>
//         <Image src={rightArrow} alt="img" />
//       </div>
//       <div>
//       {/* { sidebarData.children.map((item) => <SidebarItems key={index} item={item.title} />) } */}
//       </div>
//     </div>
//   );
// }

// export default SidebarItems;
import { useState } from "react"
import Styles from './sidebar.module.css';

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    // {[styles.a,styles.b].join(' ')}
    if(item.childrens){
        return (
            // <div className={open ?{Styles. sidebar-item open }: {Styles.sidebar-item}>}
            <div className={open ? [Styles.sidebarItem,'open' ] : [Styles.sidebarItem ]}>
                <div className={Styles.sidebarTitle}>
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    {/* <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i> */}
                    <Image src={rightArrow} alt="img" onClick={() => setOpen(!open)} className={[Styles.toggleBtn]}/>
                </div>
               {open?<div>
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>:<div className={Styles.sidebarContent}>
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>}
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className={[Styles.sidebarItem,Styles.plain]}>
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}