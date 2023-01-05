import Image from "next/image";
import atta from "../../public/Images/atta.png";
import React from "react";
import ProductCardData from "./ProductCardData";

function ProductCard(props) {
  return (
    // <div class="w-52 rounded overflow-hidden hover:shadow-lg mt-5 mb-5 pt-5">
    //   <div className="flex justify-center">
    //   <Image class="" src={atta} />
    //     </div>
    //   <div class="px-6 py-4 text-center">
    //     <div class="text-lg mb-2">
    //       <p >Aashirvaad Atta</p>
    //     </div>
    //     <div className="pt-3">
    //       <p>$45.78</p>
    //     </div>
    //   </div>
    //   <div class="px-6 pt-4 pb-2 flex justify-center ">
    //     <span class="inline-block border  px-3 py-1 text-md text-center text-gray-700 mr-2 mb-2 w-52">
    //       View Details
    //     </span>
    //   </div>
    // </div>

    <div className="">
      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 ">
      
        {ProductCardData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="">
            <div className=" rounded overflow-hidden hover:shadow-lg mt-5 mb-5 pt-5 bg-white ">
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
                {/* <span class="inline-block border  px-3 py-1 text-md text-center text-gray-700 mr-2 mb-2 w-52">
                  
                </span> */}
                <button className="border w-full inline-block  py-2 text-sm text-center text-gray-700  hover:bg-green-500 hover:text-white">View Details</button>
              </div>
            </div>
            </div>
        ))}
      
      </div>
     
    </div>
  );
}

export default ProductCard;
