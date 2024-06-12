import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { ECOMM_URL } from '../constants/apiCalls';
import axios from 'axios'
import ProductCard from '../components/Ecommerce/ProductCard';


function Ecommerce() {

  const [productType,setProductType]=useState([])
  const [allProducts,setAllProducts]=useState([])
  const [type,setType]=useState("HEllo")
  
  useEffect(()=>{

    const getAllProduct = async () => {
        try {
          const res = await axios.get(`${ECOMM_URL}/getAllProducts`);
          if (res) {
            const data=res.data.data
            console.log(data)
            setAllProducts(data)
          }
        } catch (error) {
          console.error('Error while fetching Product types:', error);
        }
    };

     const getProductType = async () => {
        try {
          const res = await axios.get(`${ECOMM_URL}/getProductType`);
          if (res) {
            const data=res.data.data
            setProductType(data)
          }
        } catch (error) {
          console.error('Error while fetching Product types:', error);
        }
    };

    getProductType()
    getAllProduct()
  },[])



  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick=(item)=>{
    setType(item)
  }
  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseForm = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row ">
      <div className='w-[15vw] border-r-[1px] h-[100vh] border-black'>
         {productType?.map((item,key)=>(
            <div 
            onClick={()=>handleClick(item)}
            key={key} 
            className={`py-[0.75vw] cursor-pointer border-b-[1px] border-black px-[2vw] font-medium ${type===item ? "bg-amber-500 text-white scale-105 transition-all duration-200 ease-linear" : "bg-zinc-100 text-black"}`}>
             {item}
         </div>
        ))} 
    </div>

    <div className="flex p-[1vw] flex-wrap justify-center md:justify-start items-center gap-[2vw] bg-zinc-700 w-[85vw]">
        {allProducts.filter((product)=>product.productType===type).map((item,key)=>(
             <ProductCard item={item} key={key} handleButtonClick={handleButtonClick}/>
        ))}
    </div>
    {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ContactForm item={selectedItem} onClose={handleCloseForm} />
        </div>
      )}
     
    </div>
  );
}

export default Ecommerce;


