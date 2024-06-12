import React from "react";
import axios from 'axios'
import { ECOMM_URL } from "../../constants/apiCalls";

const ProductCard = ({
  item,
  key,
  handleButtonClick,
  setUpdateItem,
  setUpdateProductForm,
}) => {

  const deleteProduct=async(id)=>{
    try {
      console.log(id)
      const res=await axios.delete(`${ECOMM_URL}/deleteProduct?_id=${id}`)
    if(res){
      window.location.reload();
    }
    } catch (error) {
      console.log(error,"not able to delte the product")
    }
  }
  return (
    <div
      key={key}
      className="container page-wrapper  w-[85%] sm:w-[40vw] lg:w-[26vw] xl:w-[19vw]"
    >
      <div class="page-inner ">
        <div class="row ">
          <div class=" w-[100%]  bg-white el-wrapper">
            <div class="box-up">
              <img class="img" src={item.imageUrls} alt="" />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{item.name}</span>
                  {/* <span class="p-company">Yeezy</span> */}
                </div>
                <div class="a-size">
                  Stock : <span class="size">{item.stock}</span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a
                onClick={() => handleButtonClick(item.name)}
                class="cart"
                href="#"
              >
                <span className="price ">${item.price}</span>
                <span class="add-to-cart">
                  <span class="txt">Buy Now</span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <button
              onClick={() => {
                setUpdateItem(item);
                setUpdateProductForm(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-[2vw] md:text-[1vw] text-white font-bold py-[0.5vw] px-[1vw]  focus:outline-none w-1/2 focus:shadow-outline"
              type="submit"
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteProduct(item._id)
              }}
              className="bg-red-500 hover:bg-red-700 text-[2vw] md:text-[1vw] text-white font-bold py-[0.5vw] px-[1vw]  focus:outline-none w-1/2 focus:shadow-outline"
              type="submit"
            >
              Delete 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
