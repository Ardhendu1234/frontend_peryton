import React from "react";
import { ContactData } from "../constants/data";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../components/styledHeading";
import BreadCrumbBar from "../components/breadCrumbBar";
import Glassy from "../components/Glassy";

const Contact = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-[40vh] overflow-hidden">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Contact" fg_text="Contact" />

      <div className="flex md:flex-row items-center flex-col justify-center gap-10 pt-[5vw] rounded-md shadow-md">
          {ContactData.map((item,index) => {
            return <div key={index} ><Glassy 
            icon={item.icon} 
            name={item.title} 
            subtitle={item.subTitle} 
            contactPage={true}
            /> </div>;
          })}
        </div>


      {/* <div className="flex md:flex-row flex-col gap-6 justify-between w-[80%] h-auto min-w-[200px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
        {ContactData.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center align-middle md:w-[380px] md:h-[380px] w-full h-full bg-gray-800 rounded-lg hover:bg-blue-700 p-12">
              <div className="text-white text-5xl mb-10">{item.icon}</div>
              <div className="text-white text-3xl font-bold mb-8 text-center">
                {item.title}
              </div>
              <div className="text-white text-l text-center">
                {item.subTitle}
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Contact;
