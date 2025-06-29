import { useEffect, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
import VehicleInformationInput from "./VehicleInformationInput";
import CustomerInformationInput from "./CustomerInformationInput";
import CustomerComplaintsInput from "./CustomerComplaintsInput";
import axios from "axios";
import { useNavigate } from "react-router";
const AddNewVehicleToService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div className="w-full m-2 border border-slate-300 rounded-md p-2">
          <VehicleInformationInput />
        </div>
        <div className="w-full m-2 border border-slate-300 rounded-md p-2">
          <CustomerInformationInput />
        </div>
      </div>
      <div className="m-2 p-2">
        <CustomerComplaintsInput />
        <div className="md:flex justify-end items-center">
          <button className="bg-[#4F39F6] text-white font-semibold rounded-full px-4 p-2 m-2">
            Allocate to service
          </button>
          <button
            className="bg-[#cb3882] text-white font-semibold rounded-full px-4 p-2 m-2"
            onClick={() => {
              navigate("/admin/servicingvehicles");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewVehicleToService;
