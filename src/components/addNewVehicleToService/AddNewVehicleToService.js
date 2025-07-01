import { useEffect, useRef, useRef, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
import validateNewVehicleMandatoryFields from "../../utils/validateNewVehicleMandatoryFields";
import axios from "axios";
import { useNavigate } from "react-router";
import { Await } from "react-router";
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
    <div className="relative text-sm h-screen md:mx-auto w-full md:w-[70%]">
      <div className="p-2 m-2 text-left text-xl italic font-bold text-blue-800">
        Add new vehicle to the service
      </div>
      <div className="md:flex justify-between items-start m-2 p-2">
        <div className="w-full m-2 p-2">vehicle info</div>
        <div className="w-full m-2 p-2">customer info</div>
      </div>
      <div className="m-2 p-2"></div>
    </div>
  );
};
export default AddNewVehicleToService;
