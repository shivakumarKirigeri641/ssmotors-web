import React from "react";
import { useSelector } from "react-redux";
import EditVehicle_ServiceInfo_Accordion from "./EditVehicle_ServiceInfo_Accrdion";
const EditVehicle_ServiceInfo_Content = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails);
  return (
    <div className="w-full m-1 p-1 rounded-md text-xs">
      {/**header */}
      <div className="flex justify-start p-2 bg-blue-100 rounded-md font-semibold">
        <p className="">Service details for date: </p>
        <p className="font-semibold">test header</p>
      </div>
      {/**header */}
      {/**content */}
      <EditVehicle_ServiceInfo_Accordion />
      {/**content */}
    </div>
  );
};

export default EditVehicle_ServiceInfo_Content;
