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


    </div>
  );
};

export default Contact;
