import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { customers, } from "../constants/data";

const Glassy3 = () => {
  const main = useRef(null);
  const [cursor, setCursor] = useState(false);
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
      cursorElement.style.left = `${newLeft-5}%`;
      cursorElement.style.top = `${newTop}%`;

      // Update gradient position
      if (gradientRef.current) {
        gradientRef.current.style.left = `${newLeft - 13}%`; // Adjust for the gradient size
        gradientRef.current.style.top = `${newTop - 20}%`;
      }
    };

    main.current.addEventListener("mousemove", handleCursor);


  }, []);

  const defaultOptions = {
    reverse: false,
    max: 10,
    perspective: 2500,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt
      options={defaultOptions}
      style={{
        clipPath: cursor ? "inset(0)" : "none",
        width: "70vw",
        height: "27vw",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transformStyle: 'preserve-3d',
      }}
     
    >
      {/* Gradient clipped by parent using clip-path */}
      <div
        ref={gradientRef}
        className={`gradient-blue z-[-10] rounded-full h-[140px] blur-[100px] w-[270px] absolute cursor ${
          cursor ? "opacity-100" : "opacity-0"
        }`}
      />
      
      <div
        onMouseEnter={toggle}
        onMouseLeave={toggle2}
        ref={main}
        style={{ 
            clipPath: "inset(0)" 
        }}
        className={`${
          cursor ? "border-[2px] border-blue-700 " : "border-[1px] border-blue-200"
        } h-[100%] pb-[2vw] justify-center items-center text-[2.5vw] w-[100%] cursor-pointer flex flex-col bg-black bg-opacity-10 rounded-2xl px-[4vw] text-white`}
      >
        <div className="flex flex-row  w-full">
            <div className="md:w-1/2 w-full flex flex-col ">
              <div className="w-full bg-transparent">
                <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
                  Let's Connect
                </h2>
                <Link
                  to="/contact"
                  className="bg-blue-700 py-2 lg:py-4 px-10 lg:px-16 rounded-[1vw] text-white font-bold text-lg md:text-2xl hover:bg-gray-200 hover:text-blue-700 "
                >
                  Contact
                </Link>
              </div>
            </div>
            <img
              src="imgs/dronePNG.png"
              alt="drone"
              style={{ 
                transform: 'translateZ(600px)',
            }}
              className="w-[30vw] h-[18vw] mt-[2vw] hover:scale-105 transition-all duration-100 ease-linear"
            />
          </div>
      </div>
    </Tilt>
  );
};

export default Glassy3;