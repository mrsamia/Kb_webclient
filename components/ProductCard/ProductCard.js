import Image from "next/image";
import atta from "../../public/Images/atta.png";
import React from "react";
import ProductCardData from "./ProductCardData";

function ProductCard(props) {
  return (
    <div className="">
      <div className="grid gap-x-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 px-4 ">
      
        {ProductCardData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="">
            <div className=" rounded overflow-hidden hover:shadow-lg mt-5 mb-5 pt-5 bg-white transition duration-150 ease-out hover:ease-in">
              <div className="flex justify-center h-24 w-full" style={{ height: '100px', position: 'relative'}}>
                <Image className="" width={100} height={0} src={item.img}  alt="" />
              </div>

              <div className="px-4 py-4 text-center">
                <div className="text-sm h-14">
                  <p>{item.name}</p>
                </div>
                <div className="">
                  <p className="text-sm">{item.price}</p>
                </div>
              </div>
              <div className=" pt-4 flex justify-center ">
                <button className="border w-full inline-block  py-2 text-sm text-center text-gray-700  hover:bg-green-500 hover:text-white transition duration-150 ease-out hover:ease-in">View Details</button>
              </div>
            </div>
            </div>
        ))}
      
      </div>
     
    </div>
  );
}

export default ProductCard;
