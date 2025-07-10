import React from "react";
import { useSelector } from "react-redux";

const EditVehicle_CustomerInfo = () => {
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="w-full md:w-[50%] my-2">
      <div className="p-2 text-lg font-semibold bg-gradient-to-b from-slate-200 to-slate-300 w-full rounded-md">
        <p>Customer information</p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Customer number:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.customerId?.customerName}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Customer mobile:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.customerId?.primaryMobileNumber}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Alternate mobile:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.customerId?.preferredMobileNumber}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Email:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.customerId?.email}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Address:</p>
        <textarea
          className="w-[70%] px-2 border border-slate-300 rounded-md"
          disabled
          value={editVehicleFullDetails?.customerId?.address}
        ></textarea>
      </div>
    </div>
  );
};

export default EditVehicle_CustomerInfo;
