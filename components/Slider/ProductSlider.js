import React from 'react';
import Styles from './slider.module.css';
import MyCard from './MyCard';

function ProductSlider(props) {



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


  function btnPressPreBtn() {
    let box = document.querySelector(".productContainer")
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }
  function btnPressNextBtn() {
    let box = document.querySelector(".productContainer")
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
  }

  return (
    <div className={Styles.productCarousel}>
      <button className={Styles.preBtn} onClick={btnPressPreBtn}><p className={Styles.preBtnP}>&lt;</p></button>
      <button className={Styles.nextBtn} onClick={btnPressNextBtn}><p className={Styles.nextBtnP}>&gt;</p></button>
      <div className="productContainer">
        {
          Groceries.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <MyCard img={item.img} title={item.title} />
          ))
        }
      </div>
    </div>
  );
}

export default ProductSlider;