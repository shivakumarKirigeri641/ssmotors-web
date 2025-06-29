import { useEffect, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
import VehicleInformationInput from "./VehicleInformationInput";
import CustomerInformationInput from "./CustomerInformationInput";
import CustomerComplaintsInput from "./CustomerComplaintsInput";
import axios from "axios";
const AddNewVehicleToService = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchbrandmodelvariants = async () => {
      const result = await axios.get(SERVER + "/allvehicles", {
        withCredentials: true,
      });
      dispatch(addallVehicles(result?.data?.data));
      console.log(result?.data?.data);
    };
    fetchbrandmodelvariants();
  }, []);
  return (
    <div className="relative h-screen border border-slate-50 md:mx-auto w-full md:w-[70%]">
      <div className="flex justify-between items-center m-2 p-2">
        <VehicleInformationInput />
        <div className="w-full">
          <CustomerInformationInput />
        </div>
      </div>
      <div>
        <CustomerComplaintsInput />
      </div>
    </div>
  );
};

export default AddNewVehicleToService;
