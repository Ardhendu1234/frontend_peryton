import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaBriefcase,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { blogData, customers, products, services } from "../constants/data";
import { MdGroups } from "react-icons/md";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { TbDrone } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import BlogPost from "../components/blogPost";
import { Tilt } from "react-tilt";
import Glassy from "../components/Glassy";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursor, setCursor] = useState(false);
  const [cursor2, setCursor2] = useState(false);
  const [index, setIndex] = useState(0);
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
    // console.log(10 + position / 10);
    setScrollPosition(position);
  };

  // const incrementIndex = () => {
  //   if (index < products.length - 1) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // };

  // const decrementIndex = () => {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   } else {
  //     setIndex(products.length - 1);
  //   }
  // };

  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1500,
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
      <div className="w-[100vw] h-screen relative top-0 max-w-s bg-black z-[-2]">
        <div
        style={{
          backgroundImage: 'url("/imgs/drone4.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',          
        }}
          className="w-full h-full flex flex-col justify-center items-center"
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

          {/* <div className="flex flex-row overflow-hidden align-middle justify-center text-gray-400 gap-6 mt-12 text-3xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div> */}
        </div>
      </div>

    
      <div className="pb-[100px] w-[100vw] bg-black relative pt-8  flex flex-col justify-center items-center">

        <div className="flex justify-between align-center w-[80%] mx-auto py-8">
          <h3 className="text-white text-4xl font-bold">Products</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Products
          </button>
        </div>

        <div
          className={` w-[70vw] h-[55vw] `}
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
                        className="w-[12vw] h-[12vw] rounded-[50%] shadow-md"
                      />
                      <p className="text-white text-lg h-[8vw] mt-[2vw] text-center">
                        {item.description}
                      </p>
                      <button
                        className="text-white bg-gray-700 px-6 py-3 rounded font-bold hover:bg-blue-700"
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

        <div className="flex justify-between align-center w-[80%] mx-auto py-8 my-8">
          <h3 className="text-white text-4xl font-bold">Services</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Services
          </button>
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-10 pt-[5vw] rounded-md shadow-md">
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
                className={`gradient-green z-[-10] rounded-full h-[100px] blur-[100px] w-[240px] absolute cursor ${
                  cursor ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                onMouseEnter={toggle}
                onMouseLeave={toggle2}
                ref={main}
                className={`${
                  cursor ? "border-[2px] border-green-500 " : ""
                } h-[100%] text-[2.5vw] w-[100%] cursor-pointer bg-black bg-opacity-10 rounded-2xl px-[4vw] text-white flex flex-row py-[7vw] gap-[0vw]`}
              >
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <MdGroups className="text-green-500 text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white text-4xl font-bold">
                      <CountUp end={1} duration={2} />
                      K+
                    </div>
                  )}
                  <div className="text-gray-400 text-2xl">Buyers</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <FaBriefcase className="text-green-500 text-4xl mb-4" />
                  {isVisible && (
                    <div className="text-white text-4xl font-bold">
                      <CountUp end={110} duration={2} />+
                    </div>
                  )}
                  <div className="text-gray-400 text-2xl">Projects</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <TbDrone className="text-green-500 text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white text-4xl font-bold">
                      <CountUp end={25} duration={2} />+
                    </div>
                  )}
                  <div className="text-gray-400 text-2xl">Drones</div>
                </div>
                <div className="flex flex-col w-[25%] justify-center items-center">
                  <FaUser className="text-green-500 text-5xl mb-4" />
                  {isVisible && (
                    <div className="text-white text-4xl font-bold">
                      <CountUp end={6} duration={2} />
                    </div>
                  )}
                  <div className="text-gray-400 text-2xl">Employees</div>
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

        <Tilt
        options={defaultOptions}
         className={`${cursor2 ? "": ""} bg-gray-900 rounded-2xl flex flex-col justify-center items-center w-[80%] mx-auto py-8 pb-6 my-8`}>
          <h3 className="text-white text-4xl font-bold">
            Our Sponsors and Partners
          </h3>
          <div className="text-gray-500">
            Driving technology for leading brands
          </div>

          <div className="flex md:flex-row flex-col gap-24  w-full h-auto p-12 m-12 mb-0 justify-center items-center rounded-md">
            {customers.map((item) => {
              return (
                <img src={item.image} alt={item.name} className="h-24 w-auto" />
              );
            })}
          </div>
        </Tilt>

        <div className="flex justify-between align-center w-[80%] mx-auto py-8 my-8">
          <h3 className="text-white text-4xl font-bold">Blogs</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Blogs
          </button>
        </div>

        <div className="flex md:flex-row flex-col gap-6 w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
          {blogData.map((item) => {
            return (
              <BlogPost
                key={item.id}
                id={item.id}
                img={item.image}
                category={item.category}
                title={item.title}
              />
            );
          })}
        </div>

        <div className="flex justify-center align-center md:w-[70%] w-[80%] mx-auto py-8 pb-6 my-8">
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-1/2 w-full flex flex-col justify-end">
              <div className="w-full md:h-3/4 h-max bg-gray-800 p-10">
                <h2 className="text-white text-5xl font-bold mb-12">
                  Let's talk about you project
                </h2>
                <Link
                  to="/contact"
                  className="bg-blue-700 py-4 px-16 text-white font-bold text-2xl mt-8 hover:bg-gray-700 hover:text-blue-700"
                >
                  Contact
                </Link>
              </div>
            </div>
            <img
              src="imgs/pexels-oleksandr-pidvalnyi-1093236-1024x681.jpg"
              alt="drone"
              className="md:w-1/2 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
