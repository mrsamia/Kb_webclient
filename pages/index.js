import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import WebsiteLayout from "../components/Layout/WebsiteLayout";
import hero from "../public/Images/hero.png";
import Image from "next/image";
import meatFish from '../public/Images/meatFish.png';
import FV from '../public/Images/fresh-vegetables.webp';
import SpecialOffer from '../public/Images/Group 666.png';
import Link from "next/link";
import ProductSlider from "../components/Slider/ProductSlider";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
  const[cart,setCart]=useState(false)
  function CartHandler(){
    setCart(true)
  }
  function cartCloseHandler(){
    setCart(false)
  }

  return (
    <>
      <WebsiteLayout>
        <Image src={hero} alt="img" className="w-full" />
       <section>
       <div>
          <h3 className="text-3xl pt-20 flex justify-center w-full font-light">Find your Groceries</h3>
        </div>     
          <ProductSlider />  
       </section>
        <div className="pt-24 pb-10 object-cover">
          <Image src={SpecialOffer} alt="img" className="w-full" />
        </div>
        <div className="flex justify-between px-10 py-10 text-lg uppercase font-light ">
          <Link href="#">Special offer products</Link>
          <Link href="#">see more</Link>
        </div>
        <ProductCard />

       <section className="" onClick={CartHandler}>
        <div className={styles.stickyCartHeader}>
        <div className={styles.timeCountWrapper}>
       <div className="text-3xl flex justify-center">
       <HiShoppingCart className=""/>
       </div>
          <p className={styles.itemCount}>0 ITEMS</p>
        </div>
          <p className={styles.total}>0</p>
        </div>
       </section>

       {/* {styles.shoppingCartWrapper} */}
      {cart? <section>
          <div className= {[styles.shoppingCartWrapper,"md:w-full"].join(' ')}>
            <button className="text-lg px-4 border" onClick={cartCloseHandler} >close</button>
          </div>
       </section>:""}

      </WebsiteLayout>
    </>
  );
}
