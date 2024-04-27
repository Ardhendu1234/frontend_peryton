import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaBriefcase,FaUser} from "react-icons/fa";
import { blogData, customers, products, services } from "../constants/data";
import { MdGroups } from "react-icons/md";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { TbDrone } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import Glassy from "../components/Glassy";
import Glassy2 from "../components/Glassy2";
import Glassy3 from "../components/Glassy3";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursor, setCursor] = useState(false);
  

  const main = useRef(null);
  const gradientRef = useRef(null);

  const toggle = () => {
    setCursor(true);
  };

  const toggle2 = () => {
    setCursor(false);
  };

  
  useEffect(() => {
    const cursorElement = document.querySelector(".cursor");
    const handleCursor = (event) => {
      const containerRect = main.current.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const containerWidth = containerRect.width;

      let newTop = event.clientY - containerRect.top;
      let newLeft = event.clientX - containerRect.left;

      // Calculate the position within the container
      newTop = (newTop / containerHeight) * 100;
      newLeft = (newLeft / containerWidth) * 100;

      // Update cursor position
      cursorElement.style.left = `${newLeft}%`;
      cursorElement.style.top = `${newTop}%`;

      // Update gradient position
      if (gradientRef.current) {
        gradientRef.current.style.left = `${newLeft -10}%`; // Adjust for the gradient size
        gradientRef.current.style.top = `${newTop - 20}%`;
      }
    };

    main.current.addEventListener("mousemove", handleCursor);
  }, []);

  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 2500,
    scale: 1,
    speed: 500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "linear",
  };

  return (
    <>
      <div className="w-[100vw] h-screen relative top-0 max-w-s  z-[-2]">
        <div
        style={{
          backgroundImage: 'url("/imgs/drone4.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',     
          backgroundPosition:'center'     
        }}
          className="w-full h-full pt-[5vw] flex flex-col justify-center items-center"
          alt="home"
        >
          <img
            src="imgs/logo.png"
            alt="site-logo"
            className="md:h-20 h-12 w-auto z-10 m-4"
          />
          <img
            src="imgs/sub-logo.png"
            alt="site-logo"
            className="md:h-6 h-2 w-auto z-10"
          />
        </div>
      </div>

    
      <div className="pb-[100px] w-[100vw] bg-black relative pt-8 flex flex-col justify-center items-center px-4">

        <div className="flex justify-between align-center w-full mx-auto py-8 ">
          <h3 className="text-white text-3xl md:text-4xl font-bold">Products</h3>
          <button className="text-white bg-gray-700 px-4 py-2 md:px-6 md:py-3 rounded-[2vw] font-bold uppercase hover:bg-blue-700">
            View All Products
          </button>
        </div>

        <div
          className={` w-[70vw] md:h-[55vw] `}
        >
          <Slider {...settings}>
            {products.map((item,index) => {
              return (
                  <div
                  key={index}
                    className={`bg-zinc-900 w-[100%] h-[100%] flex justify-center items-center rounded-xl py-[4vw] px-[2vw]`}
                  >
                    <div className="flex flex-col gap-[2vw] items-center justify-between">
                      <h3 className="text-white text-3xl font-bold">
                        {item.name}
                      </h3>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-[50%] shadow-md"
                      />
                      <p className="text-white text-lg  mt-[2vw] text-center">
                        {item.description}
                      </p>
                      <button
                        className="text-white bg-gray-700 px-6 py-3 rounded font-bold hover:bg-blue-700 "
                        onClick={() => {
                          navigate("/products/" + item.id);
                        }}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
       
              );
            })}
          </Slider>
        </div>


        <div className="flex justify-between align-center w-full mx-auto py-8 ">
          <h3 className="text-white text-3xl md:text-4xl font-bold">Services</h3>
          <button className="text-white bg-gray-700 px-4 py-2 md:px-6 md:py-3 rounded-[2vw] font-bold uppercase hover:bg-blue-700">
            View All Services
          </button>
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-6 md:gap-10 pt-[5vw] rounded-md shadow-md">
          {services.map((item,index) => {
            return <div key={index}><Glassy icon={item.icon} name={item.title} /> </div>;
          })}
        </div>

        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <Tilt
              options={defaultOptions}
              style={{
                clipPath: cursor ? "inset(0)" : "none",
                width: "80vw",
                marginTop:"10vw",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className=" rounded-2xl flex justify-center items-center"
            >
              <div
                ref={gradientRef}
                className={`gradient-blue z-[-10] rounded-full h-[100px] blur-[100px] w-[240px] absolute cursor ${
                  cursor ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                onMouseEnter={toggle}
                onMouseLeave={toggle2}
                ref={main}
                className={`${
                  cursor ? "border-[2px] border-blue-400 " : ""
                } h-[100%] text-[2.5vw] w-[100%] cursor-pointer bg-black bg-opacity-10 rounded-2xl text-3xl md:text-4xl px-[4vw] text-white flex flex-row py-[7vw] gap-[0vw]`}
              >
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <MdGroups className="text-blue-500 text-3xl md:text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white font-bold">
                      <CountUp end={1} duration={2} />
                      K+
                    </div>
                  )}
                  <div className="text-gray-400 text-lg md:text-2xl">Buyers</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <FaBriefcase className="text-blue-500 text-3xl md:text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white  font-bold">
                      <CountUp end={110} duration={2} />+
                    </div>
                  )}
                  <div className="text-gray-400 text-lg md:text-2xl">Projects</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <TbDrone className="text-blue-500 text-3xl md:text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white  font-bold">
                      <CountUp end={25} duration={2} />+
                    </div>
                  )}
                  <div className="text-gray-400 text-lg md:text-2xl">Drones</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <FaUser className="text-blue-500 text-3xl md:text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white  font-bold">
                      <CountUp end={6} duration={2} />
                    </div>
                  )}
                  <div className="text-gray-400 text-lg md:text-2xl">Employees</div>
                </div>
              </div>
            </Tilt>
          )}
        </VisibilitySensor>

        <div className="flex justify-center align-center w-[80%] mx-auto py-8 pb-6 my-8">
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Projects
          </button>
        </div>

        <Glassy2/>
        
        <div className="mt-[8vw]">
        <Glassy3/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
