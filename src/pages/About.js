import React from "react";
import { team } from "../constants/data";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../components/styledHeading";
import BreadCrumbBar from "../components/breadCrumbBar";

const About = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="About Us" fg_text="About Us" />

      <div className="flex flex-col justify-between align-center w-[80%] mx-auto py-8">
        <h3 className="text-blue-700 text-2xl font-bold md:mb-5 mb-2">Team</h3>
        <h3 className="text-white md:text-7xl text-4xl font-bold">Our Team</h3>
      </div>

      <div className="flex  md:flex-row flex-col gap-3 md:gap-6 justify-between md:items-start w-[80%] items-center h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md mt-5">
        {team.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center rounded-lg">
              <div className=" w-[35vw] h-[40vw] md:w-[17vw] md:h-[21vw]">
              <img
                src={item.image}
                alt={item.name}
                className="h-[100%] w-[100%] object-fit rounded-2xl"
              />
              </div>
              
              <div className="text-white text-[3vw] md:text-[1.8vw] mb-2 mt-[0.5vw]">
                {item.name}
              </div>
              <div className="text-blue-700 text-[2.25vw] md:text-[1.25vw] font-bold mb-8 text-center">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
