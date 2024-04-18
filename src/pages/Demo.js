import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData, customers, products, services } from "../constants/data";

const Demo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {products.map((item)=>(
        <div>
          {item.name}
        </div>
      ))}
    </Slider>
  )
}

export default Demo