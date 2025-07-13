import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GeneralDetails from "./servicecontentData/GeneralDetails";
import ServiceCheckList from "./servicecontentData/ServiceCheckList";
import CustomerComplaints from "./servicecontentData/CustomerComplaints";
import MechanicObservations from "./servicecontentData/MechanicObservations";
import AfterServiceComplaints from "./servicecontentData/AfterServiceComplaints";
const EditVehicle_ServiceInfo_Accrdion = () => {
  let index = 0;
  const [selectedAccordionIndex, setselectedAccordionIndex] = useState(0);
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(selectedServiceDate);
  const handleAccordionClick = (index) => {};
  return (
    <div className="border border-gray-300 shadow-xl w-[95%] mx-auto my-1 p-1 rounded-lg h-96">
      {
        editVehicleFullDetails?.serviceDataId?.list[selectedServiceDate]
          ?.kmDriven
      }
      hello
    </div>
  );
};

export default EditVehicle_ServiceInfo_Accrdion;
