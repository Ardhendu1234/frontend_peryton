import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import JoinForm from "./joinForm";

const Footer = () => {

  const [active,SetActive]=useState(false)

  const handleClick=()=>{
    SetActive(!active)
  }

  return (
    <div className="w-[100%] py-[2vw] px-[3vw] flex flex-col bg-gray-950 z-100">
      <div className=" flex md:flex-row flex-col md:gap-0 gap-6">
        <div className="md:w-[60%] w-full ">
          <img src="imgs/Peryton-Logo-White.png" alt="site-logo" className="h-5 md:h-6 mb-8 md:mb-12" />
          <div>
            <div className="text-white pb-3 text-xl md:text-2xl font-bold">Join our team</div>
            <div className="flex gap-4">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-20 sm:w-40 md:w-60 bg-gray-800 text-white py-2 px-4 text-sm sm:text-base md:text-lg placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
/>
<button
onClick={handleClick}
className="w-20 sm:w-24 md:w-28 bg-blue-700 text-white py-2 px-4 text-xs sm:text-sm md:text-base font-bold hover:bg-gray-700 hover:text-blue-700 transition-colors duration-300"
>
JOIN
</button>
            </div>
          </div>
        </div>
        
        <div className="md:w-[20%] w-full flex flex-col">
          <h3 className="text-white font-bold text-lg pb-4 md:pb-6">Information</h3>
          <Link
            to="/FAQ"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:w-[25%] w-full">
          <h3 className="text-white font-bold text-2xl md:text-3xl pb-6">Contact Us</h3>
          <div className="text-gray-400 text-sm pb-3">
            Phone: (+91) 7507284555
          </div>
          <div className="text-gray-400 text-sm pb-3">
            Email: <mail to="info@peryton.in">info@peryton.in</mail>
          </div>

          <div className="flex gap-4 text-gray-400 mt-8">
              <a href="https://www.facebook.com/profile.php?id=61561154193756&mibextid=ZbWKwL"     target="_blank" rel="noreferrer" >
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
           
              <FaFacebook />
            </div>
              </a>
             
              <a href="https://x.com/Peryton_Tech" target="_blank" rel="noreferrer">
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaTwitter />
            </div>
              </a>

              <a href="https://www.linkedin.com/company/peryton-technologies-llp/" target="_blank" rel="noreferrer">
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaLinkedin />
            </div>
              </a>

                <a href="https://www.instagram.com/peryton.tech?igsh=dmV4em56bWYyazgz" target="_blank" rel="noreferrer">
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaInstagram />
            </div>
                </a>
          </div>
        </div>

      </div>

      
      <div className="w-full flex md:flex-row md:gap-0 gap-16 flex-col justify-between mt-12 border-t border-gray-800 pt-6">
        <div className="text-gray-400 md:order-1 order-2">
          © {new Date().getFullYear()} Made with ❤ by Peryton
        </div>
        <div className="flex md:gap-6 gap-2 md:order-2 order-1 md:flex-row flex-col">
          <Link to="/termsandconditions" className="text-gray-400 hover:text-blue-700">
            Terms & Conditions
          </Link>
          <Link to="/privacypolicy" className="text-gray-400 hover:text-blue-700">
            Privacy Policy
          </Link>
          <Link to="/refundpolicy" className="text-gray-400 hover:text-blue-700">
            Refund & Return Policy
          </Link>
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <JoinForm onClose={handleClick} />
        </div>
      )}
    </div>
  );
};

export default Footer;
