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
  return (
    <div className="w-full mx-auto my-1 p-1 rounded-lg h-96">
      <div>content</div>
      <div></div>
    </div>
  );
};

export default EditVehicle_ServiceInfo_Accrdion;
