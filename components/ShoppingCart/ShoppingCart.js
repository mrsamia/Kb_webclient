import React, { useState } from 'react';
import atta from '../../public/Images/atta.png';
import { RxCross2 } from "react-icons/rx";
import { HiChevronUp } from "react-icons/hi2";
import Image from 'next/image';
import styles from "../../styles/Home.module.css";

function ShoppingCart(props) {
    const [specialCode, setSpecialCode] = useState(false)
    function SpecialCodeHandler() {
        setSpecialCode(!specialCode)
    }
    return (
        <div className={styles.shoppingCartWrapper}>
            <div className="relative h-5/6">
                <div className="flex justify-between px-4 py-2 bg-amber-400">
                    <p>0 ITEMS</p>
                    <button className="text-lg px-4 border border-black" onClick={props.cartCloseHandler} >close</button>
                </div>
                <div className="px-4 flex items-center justify-between">
                    <div className="pr-3">
                        <p>+</p>
                        <p>1</p>
                        <p>-</p>
                    </div>
                    <div className="flex items-center">
                        <Image src={atta} width={50} height={50} alt="img" />
                        <div className="pl-3">
                            <p>Parle G</p>
                            <p>Per:$30.96</p>
                        </div>
                    </div>
                    <div className="pl-10">
                        <p>$300.96</p>
                    </div>
                    <div className="pl-8">
                        <RxCross2 />
                    </div>
                </div>
                <div className=" absolute right-0 left-0 bottom-0">
                    <div className='border'>

                        <div className='flex justify-center items-center py-1 bg-gray-50 cursor-pointer hover:bg-gray-200' onClick={SpecialCodeHandler}>
                            <HiChevronUp className="border rounded-full text-lg " />
                            <p className="pl-2 font-light">Have a special code?</p>
                        </div>
                        {specialCode ? <div className='flex justify-between px-4 py-2 bg-gray-50'>
                            <input placeholder='Refferal/Discount Code' className='font-light text-center mx-2 bg-slate-100 rounded-md text-sm px-3 focus:border focus:bg-slate-200 outline-none ' />
                            <button className='bg-red-500 px-4 py-1 rounded-md text-white font-light shadow-lg'>Go</button>
                            <button className='font-light' onClick={SpecialCodeHandler}>Close</button>
                        </div> : ""}
                    </div>
                    <div className="flex py-2 justify-center">
                        <button className="bg-red-300 text-white px-14 py-2 text-lg">Place Order</button>
                        <div className="flex bg-red-600 px-12 items-center text-white text-lg">
                            <p>$</p>
                            <p className="pl-2">15</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ShoppingCart;