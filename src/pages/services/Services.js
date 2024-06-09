import React, { useState } from "react";
import { services } from "../../constants/data";
import { Link, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";
import Glassy from "../../components/Glassy";
import ServiceForm from "../../components/serviceForm";

const Services = () => {
  const navigate = useNavigate();
  const breadCrumbs = useBreadcrumbs();
  const [selectedItem ,setSelectedItem]=useState("")
  const [active ,setActive]=useState(false)

  const itemName=(name)=>{
    console.log(name)
    setSelectedItem(name)
  }

  const handleCloseForm = () => {
    setActive(!active)
  };

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32 overflow-hidden">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Services" fg_text="Services" />

      <div className="flex md:flex-row flex-col justify-center gap-10 pt-[5vw] items-center rounded-md shadow-md">
          {services.map((item,index) => (
            <div key={index} >
              <Glassy icon={item.icon} name={item.title} servicePage={true}
              handleClick={handleCloseForm} itemName={itemName}/> 
              </div>
          ))}
        </div>
        {active && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <ServiceForm item={selectedItem} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Services;
