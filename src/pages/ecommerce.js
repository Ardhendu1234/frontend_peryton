import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { ECOMM_URL } from '../constants/apiCalls';
import axios from 'axios'
import ProductCard from '../components/Ecommerce/ProductCard';
import UpdateProductForm from '../components/Ecommerce/UpdateForm';
import UploadProductForm from '../components/Ecommerce/UploadProductForm';


function Ecommerce() {

  const [productType,setProductType]=useState([])
  const [allProducts,setAllProducts]=useState([])
  const [uploadProductForm,setUploadProductForm]=useState(false)
  const [updateProductForm,setUpdateProductForm]=useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const [updateItem,setUpdateItem]=useState()
  const [type,setType]=useState("FPV Goggles")
  
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


  },[allProducts])



  

  const handleClick=(item)=>{
    setType(item)
  }

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  const handleUploadForm = () => {
    setUploadProductForm(!uploadProductForm);
  };

  const handleUpdateForm = () => {
    setUpdateProductForm(!updateProductForm);
  };

  const handleCloseForm = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row ">
    <div className='w-[30vw] text-[2.5vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1.25vw] sm:w-[15vw] border-r-[1px] h-[100vh] border-black flex flex-col items-center'>
        <div className='w-full'>
         {productType?.map((item,key)=>(
            <div 
            onClick={()=>handleClick(item)}
            key={key} 
            className={`py-[0.5vw] cursor-pointer border-b-[1px] border-black px-[2vw] font-medium ${type===item ? "bg-amber-500 text-white scale-105 transition-all duration-200 ease-linear" : "bg-zinc-100 text-black"}`}>
             {item}
         </div>
        ))} 
    </div>
        <button
        onClick={()=>handleUploadForm()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[0.75vw] px-[2vw] rounded focus:outline-none mt-[2vw] w-fit focus:shadow-outline"
            type="submit">
            Upload Product
        </button>
        </div>
     

    <div className="flex p-[1vw] flex-wrap justify-center md:justify-start items-center md:items-start gap-[2vw] bg-zinc-700 w-[70vw] sm:w-[85vw] pl-[1.5vw]">
        {allProducts.filter((product)=>product.productType===type).map((item,key)=>(
            <div key={key}>
 <ProductCard item={item}  handleButtonClick={handleButtonClick} setUpdateItem={setUpdateItem} setUpdateProductForm={setUpdateProductForm}/>
            </div>
            
        ))}
    </div>
    {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ContactForm item={selectedItem} onClose={handleCloseForm} />
        </div>
      )}

    {uploadProductForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <UploadProductForm item={selectedItem} onClose={handleUploadForm} productTypeData={productType} />
        </div>
      )}

    {updateProductForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <UpdateProductForm updateItem={updateItem} onClose={handleUpdateForm} productTypeData={productType} />
        </div>
      )}
     
    </div>
  );
}

export default Ecommerce;


