import React from "react";

const ProductCard = ({item,handleButtonClick,handleAddToCart}) => {
  // return (
  //   <div className="container page-wrapper  w-[85%] sm:w-[40vw] lg:w-[26vw] xl:w-[19vw]">
  //     <div className="page-inner ">
  //       <div className="row ">
  //         <div className=" w-[100%]  bg-white el-wrapper">
  //           <div className="box-up">
  //             <img className="img" src={item.imageUrls} alt="" />
  //             <div className="img-info">
  //               <div className="info-inner">
  //                 <span className="font-bold">{item.name}</span>
  //                 {/* <span className="p-company">Yeezy</span> */}
  //               </div>
  //               <div className="a-size">
  //                 Stock : <span className="size">{item.stock}</span>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="box-down">
  //             <div className="h-bg">
  //               <div className="h-bg-inner"></div>
  //             </div>

  //             <a
  //               // onClick={() => handleButtonClick(item.name)}
  //               className="cart"
  //               href="#"
  //             >
  //               <span className="price ">${item.price}</span>
  //               <span className="add-to-cart">
  //                 <span onClick={()=>handleAddToCart(item)} className="txt">Add to Cart</span>
  //               </span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col bg-white items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.02] transition ease-in">
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate  mt-1">
          {item.name}
        </p>
      </div>
      <div>
        <p className=" text-gray-400 font-normal text-[20px] text-left">
          {item.description}
        </p>
      </div>
      <div className="h-[250px]">
        <img src={item.imageUrls} className="h-full w-full" alt=""/>
      </div>

      <div className="flex justify-between items-center w-full mt-3">
        <div>
          <p className="text-green-600 font-semibold mt-3">${item.price}</p>
        </div>
          
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={()=>handleAddToCart(item)}>
            Add&nbsp;to&nbsp;Cart
          </button>
        
      </div>
     

    </div>
  );
};

export default ProductCard;
