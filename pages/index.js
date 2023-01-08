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


export default function Home() {
  const Groceries=[
    {
      title:"Vegetables",
      img:'/Images/chicken-poultry.webp',
      url:"#"
    },
    {
      title:"Meat & Fish",
      img:"/Images/fresh-vegetables.webp",
      url:"#"
    },
    {
      title:"Rice",
      img:"/Images/meat.webp",
      url:"#"
    },
    {
      title:"Spices",
      img:'/Images/frozen-fish.webp',
      url:"#"
    },
    {
      title:"desserts",
      img:'/Images/chicken-poultry.webp',
      url:"#"
    },
    {
      title:"Snacks",
      img:"/Images/fresh-vegetables.webp",
      url:"#"
    },
    {
      title:"Vegetables",
      img:"/Images/meat.webp",
      url:"#"
    }
  ]

  return (
    <>
      <WebsiteLayout>
        <Image src={hero} alt="img" className="w-full"/>
        <div>
          <h3 className="text-3xl pt-20 flex justify-center w-full font-semibold">Find your Groceries</h3>
        </div>
        <div className="">
          <div className="grid gap-x-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 px-4">
            {
              Groceries.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <div className="pt-5">
                 <div className="flex justify-center">
                 <Image src={item.img} alt="img" width={200} height={200} />
                 </div>
                <Link href={item.url}><p className="text-center pt-4">{item.title}</p></Link>
                </div>
              ))
            }
          </div>
          </div>
          <div className="pt-24 pb-10 object-cover">
          <Image src={SpecialOffer} alt="img" className="w-full"/>
          </div>
          <div className="flex justify-between px-10 py-10 text-lg uppercase font-light ">
            <Link href="#">Special offer products</Link>
            <Link href="#">see more</Link>
          </div>
        <ProductCard />
      </WebsiteLayout>
    </>
  );
}
