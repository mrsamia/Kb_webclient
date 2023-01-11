import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from './SlickSlider.module.css'
import Image from 'next/image';
import hero from "../../public/Images/hero.png";
import KBBanner from '../../public/Images/KB-Banner.jpg'
import MyCard from '../Slider/MyCard';
import Link from 'next/link';

function SlickSlider(props) {
    const settings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const Groceries = [
        {
            title: "Vegetables",
            img: '/Images/chicken-poultry.webp',
            url: "#"
        },
        {
            title: "Meat & Fish",
            img: "/Images/fresh-vegetables.webp",
            url: "#"
        },
        {
            title: "Rice",
            img: "/Images/meat.webp",
            url: "#"
        },
        {
            title: "Spices",
            img: '/Images/frozen-fish.webp',
            url: "#"
        },
        {
            title: "desserts",
            img: '/Images/chicken-poultry.webp',
            url: "#"
        },
        {
            title: "Snacks",
            img: "/Images/fresh-vegetables.webp",
            url: "#"
        },
        {
            title: "Rice",
            img: "/Images/meat.webp",
            url: "#"
        },
        {
            title: "Spices",
            img: '/Images/frozen-fish.webp',
            url: "#"
        },
        {
            title: "desserts",
            img: '/Images/chicken-poultry.webp',
            url: "#"
        },
        {
            title: "Vegetables",
            img: "/Images/meat.webp",
            url: "#"
        }
    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",marginLeft:"15px",zIndex:"1" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",zIndex:"1" }}
            onClick={onClick}
          />
        );
      }


    return (
        <div className='py-10'>

            <Slider {...settings} className="">
                {Groceries.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={Style.myCard}>
                        <div className="flex justify-center">
                            <Image src={item.img} alt="img" width={200} height={200} />
                        </div>
                        <Link href="#"><p className="text-center pt-4">{item.title}</p></Link>
                    </div>
                ))}

            </Slider>
        </div>
    );
}

export default SlickSlider;