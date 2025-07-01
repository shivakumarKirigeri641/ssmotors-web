import { useEffect, useRef, useRef, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
import VehicleInformationList from "./newvehicleinformationlist/VehicleInformationList";
import validateNewVehicleMandatoryFields from "../../utils/validateNewVehicleMandatoryFields";
import CustomerComplaintsInput from "./CustomerComplaintsInput";
import axios from "axios";
import { useNavigate } from "react-router";
import { Await } from "react-router";
import CustomerInformationList from "./customerInformationList/CustomerInformationList";
const AddNewVehicleToService = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchbrandmodelvariants = async () => {
      const result = await axios.get(SERVER + "/allvehicles", {
        withCredentials: true,
      });
      dispatch(addallVehicles(result?.data?.data));
    };
    fetchbrandmodelvariants();
  }, []);
  return (
    <div className="relative text-sm h-screen md:mx-auto w-full md:w-[70%]">
      <div className="p-2 m-2 text-left text-xl italic font-bold text-blue-800">
        Add new vehicle to the service
      </div>
      <div className="md:flex justify-between items-start m-2 p-2">
        <VehicleInformationList />
        <CustomerInformationList />
      </div>
      <div className="m-2 p-2">
        <CustomerComplaintsInput />
      </div>
    </div>
  );
};
export default AddNewVehicleToService;
