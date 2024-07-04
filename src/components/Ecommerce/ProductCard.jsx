import React from "react";


const ProductCard = ({item,handleAddToCart,cart,handleRemoveFromCart}) => {
 return (
    <div className="flex w-[40vw] sm:w-[25vw] flex-col bg-white items-center justify-between gap-1 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl md:hover:scale-[1.02] transition ease-in">

      <div>
        <p className="text-[#1d783e] font-semibold text-[3.25vw] sm:text-[1.75vw] text-left truncate  mt-1">
          {item.name}
        </p>
      </div>

      <div>
        <p className=" text-gray-400 font-normal text-[2vw] md:text-[1vw] text-left">
          {item.description}
        </p>
      </div>

      <div className="h-[15vw]">
        <img src={item.imageUrls} className="h-full w-full" alt=""/>
      </div>

      <div className="flex flex-row justify-between  items-center w-full mt-2">
       
          <div className="text-green-600 text-[2.75vw] sm:text-[1.25vw] items-center font-semibold ">${item.price}</div>
   
          {cart.some(product => product._id === item._id) ? (
  <button
    className="text-gray-100 border-[1px] bg-red-600 rounded-full font-semibold 
    text-[1.75vw] sm:text-[1vw] p-[0.5vw] px-[1vw] uppercase 
    hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
    onClick={() => handleRemoveFromCart(item)}
  >
    Remove
  </button>
) : (
  <button
    className="text-gray-700 border-[1px] border-gray-700 rounded-full font-semibold 
    text-[1.75vw] sm:text-[1vw] p-[0.5vw] px-[1vw] uppercase 
    hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
    onClick={() => handleAddToCart(item)}
  >
    Add&nbsp;to&nbsp;Cart
  </button>
)}
     

     
        
      </div>
     

    </div>
  );
};

export default ProductCard;
