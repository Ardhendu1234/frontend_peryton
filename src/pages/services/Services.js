import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";
import Glassy from "../../components/Glassy";
import ServiceForm from "../../components/serviceForm";
import axios from 'axios'
import { service_url } from "../../constants/apiCalls";


const Services = () => {
  const navigate = useNavigate();
  const breadCrumbs = useBreadcrumbs();
  const [selectedItem ,setSelectedItem]=useState("")
  const [active ,setActive]=useState(false)
  const [allServices, setAllServices] = useState([])

  

  useEffect(()=>{

   const getAllService = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_service_url}/getAllServices`);
            const data=res.data.data
            console.log(data)
            setAllServices(data)
        } catch (error) {
          console.error('Error while fetching Service types:', error);
        }
    };

    getAllService()
  },[])

  const itemName=(name)=>{
    console.log(name)
    setSelectedItem(name)
  }

  const handleCloseForm = () => {
    setActive(!active)
  };

  return (
    <div className="bg-gray-950 w-full min-h-[100vh] py-8 pb-32 overflow-hidden">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Services" fg_text="Services" />

      <div className="flex md:flex-row flex-col flex-wrap justify-center gap-10 pt-[5vw] items-center rounded-md shadow-md">
          {allServices?.map((item,index) => (
            <div key={index} >
              <Glassy 
              icon={item.imageUrls} 
              name={item.name} 
              servicePage={true}
              handleClick={handleCloseForm} 
              itemName={itemName} 
              id={item._id} 
              homePage={false}/> 
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
