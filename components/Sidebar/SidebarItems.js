import Image from 'next/image';
import React, { useState } from 'react'
import Styles from './sidebar.module.css';
import rightArrow from "../../public/Images/back-arrow-icon.svg";
import fruitVeg from "../../public/Images/fruit-veg.svg";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const MenuItems = ({ singleItem }) => {
    const [showChildren, setShowChildren] = useState(false);
    const toggleMenu = () => setShowChildren(!showChildren);
    return (
        <div>
            <div onClick={toggleMenu} className=''>
                <div className={Styles.sidebarItem}>
                    <div className='flex'>
                        {
                            singleItem?.img ?  <span><Image src={singleItem.img} alt="img" className="" width={20} height={20}/></span> : ''
                        }
                       
                        <span className='pl-2'>{singleItem?.label ?? ''}</span>
                    </div>

                    {
                        singleItem?.children ? <span style={{ height: '10px' }}>
                            {
                                showChildren ? < AiOutlineDown/> : 
                                //  <AiOutlineRight/>
                                    <Image src={rightArrow} alt="img" className='' />
                            }

                        </span> : ''
                    }
                </div>

            </div>
            {
                showChildren ? <div className='' style={{ marginLeft: "10px" }}>
                    {
                        // eslint-disable-next-line react/jsx-key
                        singleItem?.children?.map((item) => <MenuItems singleItem={item} />)
                    }
                </div> : ''
            }
            {/* { JSON.stringify(singleItem) } */}
        </div>
    )
}

export default MenuItems;