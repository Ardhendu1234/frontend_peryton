import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import axios from "axios";
import ProductCard from "../components/Ecommerce/ProductCard";
import Cart from "../components/Ecommerce/Cart";

function Ecommerce() {
  const [productType, setProductType] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(false);
  const [type, setType] = useState("FPV Goggles");
  const [cart,setCart]=useState([])

  const handleAddToCart=(selectedItem)=>{
    console.log(selectedItem._id)
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
    <div className="flex flex-row h-[100vh]">
      <div className="w-[30vw] h-[100%] text-[2.5vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1.25vw] sm:w-[15vw] border-r-[1px] border-black flex flex-col items-center">
        <div className="bg-black text-white text-xl tracking-wider font-semibold py-[0.75vw] px-[2vw] focus:outline-none w-full focus:shadow-outline">
          Category
        </div>
        <div className="w-full overflow-y-scroll max-h-[55%]">
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
              <div className="flex flex-row  justify-between ">
                <div> {item.name}</div>
            
              </div>
            </div>
          ))}
        </div>        
      </div>

      <div className="flex p-[1vw] flex-wrap justify-center md:justify-start items-center md:items-start gap-[2vw] bg-zinc-700 w-[40vw] sm:w-[65vw] pl-[1.5vw]">
        {allProducts
          .filter((product) => product.productType === type)
          .map((item, key) => (
            <div key={key}>
              <ProductCard item={item} handleButtonClick={handleButtonClick} handleAddToCart={handleAddToCart} />
            </div>
          ))}
      </div>

      
        <Cart cart={cart} setCart={setCart} handleCloseForm={handleCloseForm}/>
   

      {selectedItem && (
        <div className="fixed inset-0 bg-black z-[10000] bg-opacity-50 flex items-center justify-center">
          <ContactForm item={selectedItem} onClose={handleCloseForm} cart={cart}/>
        </div>
      )}
    </div>
  );
}

export default Ecommerce;
