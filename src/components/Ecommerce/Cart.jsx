import React from "react";
import ContactForm from "../ContactForm";

const Cart = ({ cart, setCart, handleCloseForm }) => {
  const handleIncreaseQuantity = (itemId) => {
    const updateCart = cart.map((item) =>
      item._id === itemId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCart(updateCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updateCart = cart
      .map((item) =>
        item._id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updateCart);
  }

  return (
    <div className="flex flex-col flex-end p-[1vw] flex-wrap items-center gap-[2vw] bg-zinc-600 sm:w-[20vw] w-[30vw] pl-[1vw] overflow-scroll hover:cursor-pointer">
      <div
        onClick={()=>handleCloseForm()}
        className="w-full bg-blue-500 text-white text-[1.5vw] text-center py-[0.5vw] rounded-md">
        Contact Us
      </div>

      <div className="flex flex-col gap-[1vw]">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center border border-gray-300 rounded-lg p-2 m-2 shadow-sm"
          >
            <img
              src={item.imageUrls}
              alt={item.name}
              className="w-[6vw] h-[6vw] object-cover rounded-md mr-4"
            />
            <div className="flex flex-col flex-grow">
              <h3 className=" text-sm md:text-lg text-white font-semibold mb-2">{item.name}</h3>
              <div className="flex items-center">
                <button
                  onClick={() =>handleDecreaseQuantity(item._id)}
                  className="bg-gray-200 text-gray-700 text-[2vw] px-[1vw] md:text-[1.25vw] py-[0.5vw] rounded-l-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="bg-gray-100 px-[1vw] text-[2vw] md:text-[1.25vw] py-[0.5vw]">{item.quantity}</span>
                <button
                  onClick={() =>handleIncreaseQuantity(item._id)}
                  className="bg-gray-200 text-gray-700 text-[2vw] md:text-[1.25vw] px-[1vw] py-[0.5vw] rounded-r-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cart;
