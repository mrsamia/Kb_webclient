import React from "react";
import Image from "next/image";
import KbLogo from "../../public/Images/kb logo.png";
import GooglePlay from "../../public/Images/google-play.svg";
import visa from "../../public/Images/visa.svg";
import master from "../../public/Images/master-card.svg";
import american from "../../public/Images/American.png";
import AppStore from "../../public/Images/app-store.svg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import { IoLogoYoutube } from "react-icons/io";
import Styles from "./footer.module.css";
import Link from "next/link";

function Footer(props) {
  const Company = [
    {
      title: "About us",
    },
    {
      title: "Contact us",
    },
    {
      title: "FAQs",
    },
  ];
  const QuickLinks = [
    {
      title: "Privacy policy",
    },
    {
      title: "Return policy",
    },
    {
      title: "Terms of use",
    },
  ];
  const Business = [
    {
      title: "Marchaint",
    },
    {
      title: "Partnership",
    },
    {
      title: "Delivery agent",
    },
  ];
  return (
    <div className="bg-secondary-color text-white pt-14 pb-20 px-12">
      <div className="pt-5">
        <div className="flex justify-center ">
          <Image src={KbLogo} alt="img" className="" />
        </div>
        <div className="flex justify-center pt-5 pb-5">
          <p className="text-lg flex justify-center text-center ">
            Krazy Bazaar is your one stop destination for all South Asian
            <br></br>grocery, fashion and gadget across all over Australia.
          </p>
        </div>
        <div class="grid gap-x-2 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-5 ">
          <div className="flex justify-center lg:justify-start">
           <div>
           <h3 className="text-2xl pb-2">Company</h3>
            <div>
              {Company.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div className="pt-2 flex justify-center md:justify-start">
                  <ul>
                    <Link href="#" >{item.title}</Link>
                  </ul>
                </div>
              ))}
            </div>
           </div>
          </div>
          <div className="flex justify-center lg:justify-start">
          <div >
          <h3 className="text-2xl pb-2">Quick Links</h3>
            <div>
              {QuickLinks.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <ul className="pt-2 flex justify-center md:justify-start">
                  <Link href="#">{item.title}</Link>
                </ul>
              ))}
            </div>
          </div>

          </div>
          <div className=" flex justify-center">
            <div>
              <div className="hidden lg:block  ">
               <div className="flex md:justify-start lg:justify-center">
               <div className="h-12 border-l "></div>
                </div>
              </div>
              <h3 className="text-2xl pb-3 flex justify-center">Download our App</h3>
              <div className="flex md:justify-start lg:justify-center">
               <div>
               <Image src={GooglePlay} alt="img" className={Styles.Img}/>
               </div>
             <div>
             <Image src={AppStore} alt="img" className={Styles.Img} />
             </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div>
              <h3 className="text-2xl pb-2">Business</h3>
              <div>
                {Business.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <ul className="pt-2 flex justify-center md:justify-start">
                    <Link href="#">{item.title}</Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-end">
            <div>
              <div className="justify-center lg:justify-end flex">
                <h3 className="text-2xl">Stay connected</h3>
              </div>
              <div className="flex pt-5 justify-center lg:justify-end">
                <div className="pr-3 text-2xl ">
                  <BsInstagram />
                </div>
                <div className="pr-3 text-2xl">
                  <FaFacebookF />
                </div>
                <div className="pr-3 text-2xl">
                  <ImLinkedin />
                </div>
                <div className="pr-3 text-2xl">
                  <IoLogoYoutube />
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <h3 className="text-2xl pt-4 ">Pay with</h3>
              </div>
              <div className="flex pt-4 justify-center lg:justify-end">
                <div className="pr-2">
                  <Image src={visa} alt="img" />
                </div>
                <div className="pr-2">
                  <Image src={master} alt="img" />
                </div>
                <div>
                  <Image src={american} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
