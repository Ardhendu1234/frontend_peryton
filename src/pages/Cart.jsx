import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../UseContext/CartContext";
import ContactForm from "../components/ContactForm";


const Cart = () => {

  const [price,setPrice]=useState(0)
  const [cart,setCart]=useCart()
  const [form,setForm]=useState(false)

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

  useEffect(()=>{
    const countPrice=()=>{
      let total=0;
       cart?.forEach((element) =>{ 
        total+=element.price * element.quantity
      });
      setPrice(total)
    }
    countPrice()
  })

  const handleForm=()=>{
    setForm(!form)
  }



  return (
    <div className="bg-zinc-950">
  {
    cart?.length > 0  ? 
    
    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

      <div className="lg:w-[70%]">
        {
          cart?.map((item) => {
            return  <div className="p-4 border-b-2 last:border-none  border-slate-700">

            <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
      
              <div className="md:w-[30%] w-full flex justify-center items-center">
                <img src={item.imageUrls} alt="" className="w-[50%] md:w-[50%] rounded-xl lg:w-full"/>
              </div>
              <div className="md:w-[70%] w-full flex flex-col gap-5 justify-center items-center md:items-start md:justify-start">
                <h1 className="text-4xl md:text-xl font-[600] text-slate-100">{item.name}</h1>
                <div className="flex items-center">
                      <button
                        onClick={() =>handleDecreaseQuantity(item._id)}
                        className="bg-gray-200 text-gray-700 text-[4vw] md:text-[1.5vw] px-[2vw] md:px-[1vw] py-[0.25vw] md:py-[0.5vw] rounded-l-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="bg-gray-100  text-[4vw] md:text-[1.5vw] px-[2vw] md:px-[1vw] py-[0.25vw] md:py-[0.5vw]">{item.quantity}</span>
                      <button
                        onClick={() =>handleIncreaseQuantity(item._id)}
                        className="bg-gray-200 text-gray-700 text-[4vw] md:text-[1.5vw] px-[2vw] md:px-[1vw] py-[0.25vw] md:py-[0.5vw] rounded-r-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                <h1 className="text-slate-100 text-lg">
                  {item.description}
                </h1>
                <div className="flex justify-between">
                  <p className="font-bold text-[#5378e7] text-3xl md:text-xl">${item.price}</p>
                </div>
      
              </div>
      
      
            </div>
      
          </div>
          } )
        }
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">

        <div className="mt-20">
          <p className="text-xl text-gray-100 uppercase font-[600]">Your Cart</p>
          <p className="text-5xl font-[600] text-gray-100 uppercase mb-4">Summary</p>
          <p className="font-[600] text-xl text-slate-100">
            Total Items: <span className="font-normal">{cart.length}</span>
          </p>
        </div>

        <div className="mb-20">
          <p className="text-slate-100 text-xl font-[600] mb-5 ">Total Amount: 
            <span className="font-bold ml-2 text-blue-500">${price.toFixed(2)}</span>
          </p>
          <button 
          onClick={()=>{
            setForm(!form)
          }}
          className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-blue-600
           hover:bg-white hover:text-blue-500 transition-all duration-200 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>
    </div>) 
    
    : 

    
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>
      <Link to={"/ecommerce"}>
        <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }

{form && (
        <div className="fixed inset-0 bg-black z-[10000] bg-opacity-50 flex items-center justify-center">
          <ContactForm cart={cart} onClose={handleForm}/>
        </div>
      )}
    </div>
  );
};

export default Cart;
