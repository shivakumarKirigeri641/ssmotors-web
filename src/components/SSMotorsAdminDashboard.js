import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { SERVER } from "../utils/constants";
import { addServedVehicles } from "../store/slices/ssMotorsServedVehiclesSlice";
import { addServicingVehicles } from "../store/slices/ssMotorsServicingVehiclesSlice";
import { addSummary } from "../store/slices/ssMotorsServiceSummarySlices";
import SSMotorsServicingVehicleDetails from "./customComponents/SSMotorsServicingVehicleDetails";
import SSMotorsServicedVehiclesDetails from "./customComponents/SSMotorsServicedVehiclesDetails";
import SSMotorsServiceSummary from "./customComponents/SSMotorsServiceSummary";
const SSMotorsAdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admindata = useSelector((store) => store.ssMotorsadmin);
  const summarydata = useSelector((store) => store.ssMotorsServiceSummary);
  const servicingVehicles = useSelector(
    (store) => store.ssMotorsServicingVehicles
  );
  useEffect(() => {
    const fetchServicedVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicedvehicles",
        {
          withCredentials: true,
        }
      );
      dispatch(addServedVehicles(result?.data?.data));
    };
    const fetchServicingVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicingvehicles",
        {
          withCredentials: true,
        }
      );
      dispatch(addServicingVehicles(result?.data?.data));
    };
    const fetchsummary = async () => {
      const resultsummary = await axios.get(
        SERVER + "/admin/feed/getservicesummary",
        {
          withCredentials: true,
        }
      );
      console.log(resultsummary?.data?.data);
      dispatch(addSummary(resultsummary?.data?.data));
    };
    fetchsummary();
    fetchServicedVehicles();
    fetchServicingVehicles();
  }, []);
  return !servicingVehicles ? (
    <div>Loading...</div>
  ) : (
    <div className="m-1 sm:h-screen">
      {/**servicing & served vehicles data */}
      <div className="sm:flex justify-center w-full h-[70%]">
        <SSMotorsServicingVehicleDetails
          servicingVehicles={servicingVehicles}
        />
        <SSMotorsServicedVehiclesDetails />
      </div>
      {/**servicing & served vehicles data */}
      {/**servicing summary */}
      <div className="">
        <SSMotorsServiceSummary summarydata={summarydata} />
      </div>
      {/**servicing summary */}
    </div>
  );
};

export default SSMotorsAdminDashboard;
