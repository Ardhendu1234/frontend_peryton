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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 bg-zinc-700 w-[85vw] p-[1vw]">
        {allProducts.filter((product)=>product.productType===type).map((item,key)=>(
             <div key={key} class="container page-wrapper">
             <div class="page-inner">
               <div class="row">
                 <div class="el-wrapper">
                   <div class="box-up">
                     <img class="img" src={item.imageUrls} alt=""/>
                     <div class="img-info">
                       <div class="info-inner">
                         <span class="p-name">{item.name}</span>
                         {/* <span class="p-company">Yeezy</span> */}
                       </div>
                       <div class="a-size">Stock : <span class="size">{item.stock}</span></div>
                     </div>
                   </div>
           
                   <div class="box-down">
                     <div class="h-bg">
                       <div class="h-bg-inner"></div>
                     </div>
           
                     <a 
                    onClick={() => handleButtonClick(item.name)}
                     class="cart" href="#">
                       <span className="price ">${item.price}</span>
                       <span class="add-to-cart">
                         <span class="txt">Buy Now</span>
                       </span>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
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


