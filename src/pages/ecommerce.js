import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import axios from "axios";
import ProductCard from "../components/Ecommerce/ProductCard";
import { useCart } from "../UseContext/CartContext";
import Cart from "./Cart";
import { toast } from "react-hot-toast";

function Ecommerce() {
  const [productType, setProductType] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(false);
  const [type, setType] = useState("FPV Goggles");
  const [cart,setCart]=useCart()

  const handleAddToCart=(selectedItem)=>{
    console.log(selectedItem._id)
    toast.success("Item added to Cart")
      const existingItemIndex = cart.findIndex((item)=>item._id===selectedItem._id);
      console.log(existingItemIndex)
      if(existingItemIndex!==-1){
        const updatedCart= cart.map((item)=>item._id===selectedItem._id ? {...item, quantity:(item.quantity || 1) + 1 } : item)
        setCart(updatedCart)
      }
      else {
        setCart([...cart,{...selectedItem,quantity:1}]);
      }
  }

  const handleRemoveFromCart = (selectedItem) => {
    console.log(selectedItem._id);
    toast.success("Item removed from Cart");
  
    const updatedCart = cart.filter((item) => item._id !== selectedItem._id);
    setCart(updatedCart);
  };

  useEffect(()=>{
    console.log(cart)
  },[cart])

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        console.log(process.env.REACT_APP_ECOMM_URL)
        const res = await axios.get(`${process.env.REACT_APP_ECOMM_URL}/getAllProducts`);
        if (res) {
          const data = res.data.data;
          console.log(data);
          setAllProducts(data);
        }
      } catch (error) {
        console.error("Error while fetching Product types:", error);
      }
    };

    getAllProduct();
  }, []);


  useEffect(() => {
    const getProductType = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_Category_url}/getAllCategory`);
        if (res) {
          const data = res.data.data;
          console.log(data);
          setProductType(data);
        }
      } catch (error) {
        console.error("Error while fetching Product types:", error);
      }
    };

    getProductType();
  }, []);



  const handleClick = (item) => {
    setType(item);
  };

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseForm = () => {
    setSelectedItem(!selectedItem);
  };



  return (
    <div className="flex flex-row min-h-[100vh] ">

      <div className=" text-[2.5vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1.25vw] border-r-[1px] border-black flex flex-col items-center w-[15vw]">

        <div className="bg-black text-white text-[2.5vw] md:text-[1.75vw] w-full font-semibold py-[0.75vw] px-[2vw]">
          Category
        </div>

        <div className="w-full overflow-y-scroll overflow-scroll">
          {productType?.map((item, key) => (
            <div
              onClick={() => handleClick(item.name)}
              key={key}
              className={`py-[0.65vw] cursor-pointer border-b-[1px] border-black px-[1vw] font-medium ${
                type === item.name
                  ? "bg-cyan-500 text-white scale-105 transition-all duration-200 ease-linear"
                  : "bg-zinc-100 text-black"
              }`}
            >
              <div className="flex flex-row justify-between">
                <div> {item.name}</div>
              </div>
            </div>
          ))}
        </div>   

      </div>

      <div className="flex w-[85vw] h-fit overflow-scroll p-[1vw] flex-wrap justify-start md:items-start gap-[2vw] bg-zinc-200 min-h-[100vh] pl-[1.5vw]">
        {allProducts
          .filter((product) => product.productType === type)
          .map((item, key) => (
            <div key={key}>
              <ProductCard item={item} handleRemoveFromCart={handleRemoveFromCart} cart={cart} handleButtonClick={handleButtonClick} handleAddToCart={handleAddToCart} />
            </div>
          ))}
      </div>
      
    </div>
  );
}

export default Ecommerce;
