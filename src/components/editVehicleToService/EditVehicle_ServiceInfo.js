import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditVehicle_ServiceInfo_Dates from "./EditVehicle_ServiceInfo_Dates";
import EditVehicle_ServiceInfo_Accrdion from "./EditVehicle_ServiceInfo_Accrdion";

const EditVehicle_ServiceInfo = () => {
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="w-full">
      <div className="p-2 text-lg font-semibold bg-gradient-to-b from-slate-200 to-slate-300 w-full rounded-md">
        <p>service details</p>
      </div>
      <div className="">
        {/**dates */}
        <EditVehicle_ServiceInfo_Dates />
        {/**dates */}

        {/**content */}
        <div className="flex">
          <EditVehicle_ServiceInfo_Accrdion />
          {/**content */}
          <div>bills</div>
        </div>
      </div>
    </div>
  );
};

export default EditVehicle_ServiceInfo;
