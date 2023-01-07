import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import WebsiteLayout from "../components/Layout/WebsiteLayout";


export default function Home() {

  return (
    <>
      <WebsiteLayout>
        <ProductCard />
      </WebsiteLayout>
    </>
  );
}
