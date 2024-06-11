import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ecomdata } from '../constants/Ecomdata';
import ContactForm from '../components/ContactForm';
import { getProductType } from '../constants/apiCalls';
import Sidebar from '../components/Ecommerce/Sidebar';
import { ECOMM_URL } from '../constants/apiCalls';
import axios from 'axios'


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

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseForm = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row ">
      <div className='w-[15vw] border-r-[1px] h-[100vh] border-black bg-yellow-200'>
         {productType?.map((item,key)=>(
            <div 
            onClick={()=>setType(item)}
            key={key} 
            className='py-[0.75vw] cursor-pointer border-b-[1px] border-black px-[2vw] font-medium'>
             {item}
         </div>
        ))} 
    </div>

    <div className='bg-pink-300 w-[85vw]'>
        {allProducts.filter((product)=>product.productType===type).map((item,key)=>(
            <div>
                {item.name}
            </div>
        ))}
    </div>
     
    </div>
  );
}

export default Ecommerce;
