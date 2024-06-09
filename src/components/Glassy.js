import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const Glassy = ({ icon, name, subtitle,servicePage,handleClick,itemName }) => {
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
        gradientRef.current.style.left = `${newLeft - 20}%`; // Adjust for the gradient size
        gradientRef.current.style.top = `${newTop - 20}%`;
      }
    };

    main.current.addEventListener("mousemove", handleCursor);


  }, []);

  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 2000,
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
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
       className="md:w-[28vw] md:h-[25vw] w-[60vw] h-[32vw] rounded-2xl flex justify-center items-center"
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
        style={{ clipPath: "inset(0)" }}
        className={`${
          cursor ? "border-[2px] border-blue-700 " : "border-[1px] border-blue-300"
        }  text-[4vw] md:text-[2vw] h-[100%] cursor-pointer  bg-black bg-opacity-10 rounded-2xl text-white flex flex-col ${subtitle ? "gap-[2vw] pt-[4vw]":"gap-[4vw] pt-[5vw]"} ${servicePage ? "gap-[1vw] pt-[0vw]":"gap-[4vw] pt-[5vw]"}`}
      >

        {/* <div>{icon}</div> */}
        <img src={icon} className="w-[30vw] rounded-2xl"/>
        <div className="ml-[2vw]">{name}</div>

        {subtitle && 
        (<div className="text-[2vw]  md:text-[1.3vw]">
          {subtitle}
        </div>
        )}

        {servicePage && 
        (<div 
        onClick={()=>{itemName(name);handleClick()}}
         className="px-[1vw] ml-[2vw] w-fit bg-blue-600 text-[1.5vw] py-[0.4vw] rounded-lg">
          Contact
        </div>)
        }

      </div>

    </Tilt>
  );
};

export default Glassy;