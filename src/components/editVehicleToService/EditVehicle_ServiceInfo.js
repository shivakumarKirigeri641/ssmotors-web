import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditVehicle_ServiceInfo_Dates from "./EditVehicle_ServiceInfo_Dates";
import EditVehicle_ServiceInfo_Accrdion from "./EditVehicle_ServiceInfo_Accrdion";
import EditVehicle_BillingInformation from "./EditVehicle_BillingInformation";

const EditVehicle_ServiceInfo = () => {
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="md:flex justify-between items-start rounded-md shadow-xl my-2 w-full">
      <div className="p-2 text-lg font-semibold bg-gradient-to-b from-slate-200 to-slate-300 w-full rounded-md">
        <p>service details</p>
      </div>
      <div className="md:flex justify-between">
        {/**dates */}
        <div className="w-full md:w-[20%]">
          <EditVehicle_ServiceInfo_Dates />
        </div>
        {/**dates */}

        {/**content */}
        <div className="w-full md:w-[60%]">
          <EditVehicle_ServiceInfo_Accrdion />
        </div>
        <div className="w-full md:w-[30%]">
          <EditVehicle_BillingInformation />
        </div>
        {/**content */}
      </div>
    </div>
  );
};

export default EditVehicle_ServiceInfo;
