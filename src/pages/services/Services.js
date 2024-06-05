import React from "react";
import { services } from "../../constants/data";
import { Link, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";
import Glassy from "../../components/Glassy";

const Services = () => {
  const navigate = useNavigate();
  const breadCrumbs = useBreadcrumbs();

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Services" fg_text="Services" />

      <div className="flex md:flex-row flex-col justify-center gap-10 pt-[5vw] items-center rounded-md shadow-md">
          {services.map((item,index) => {
            return <div key={index} ><Glassy icon={item.icon} name={item.title} /> </div>;
          })}
        </div>
    </div>
  );
};

export default Services;
