import React from "react";

const ProductCard = ({item,handleButtonClick,handleAddToCart}) => {
  return (
    <div className="container page-wrapper  w-[85%] sm:w-[40vw] lg:w-[26vw] xl:w-[19vw]">
      <div className="page-inner ">
        <div className="row ">
          <div className=" w-[100%]  bg-white el-wrapper">
            <div className="box-up">
              <img className="img" src={item.imageUrls} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="font-bold">{item.name}</span>
                  {/* <span className="p-company">Yeezy</span> */}
                </div>
                <div className="a-size">
                  Stock : <span className="size">{item.stock}</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a
                // onClick={() => handleButtonClick(item.name)}
                className="cart"
                href="#"
              >
                <span className="price ">${item.price}</span>
                <span className="add-to-cart">
                  <span onClick={()=>handleAddToCart(item)} className="txt">Add to Cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
