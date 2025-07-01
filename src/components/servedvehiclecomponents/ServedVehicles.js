import React, { useEffect } from "react";
import ServicedVehiclesTableFullScr from "./ServicedVehiclesTableFullScr";
import ServicedVehiclesTableMobScr from "./ServicedVehiclesTableMobScr";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error";
import { SERVER } from "../../utils/constants";
import axios from "axios";
import { addservicedVehicles } from "../../store/slices/serviciedVehiclesSlice";
import { removeservicingVehicles } from "../../store/slices/servicingVehiclesSlice";
import Skeleton from "../Skeleton";
const ServedVehicles = () => {
  const dispatch = useDispatch();
  const servicedVehicles = useSelector((store) => store.servicedVehicles);
  useEffect(() => {
    const fetchServedDetails = async () => {
      try {
        const result = await axios.get(
          SERVER + "/admin/feed/getservicedvehicles",
          { withCredentials: true }
        );
        dispatch(addservicedVehicles(result?.data?.servedVehicleInfos));
        dispatch(removeservicingVehicles());
      } catch (err) {
        <Error />;
      }
    };
    fetchServedDetails();
  }, []);
  return (
    <div className="h-screen w-full p-2 md:w-[70%] md:mx-auto">
      <div className="m-3">
        <p className="text-gray-700 font-semibold">Serviced vehicles</p>
        <p className="text-gray-500 p-2">
          The list of vehicles which are already service shows the history
        </p>
      </div>
      {!servicedVehicles || 0 === servicedVehicles?.length ? (
        <Skeleton />
      ) : (
        <div>
          <div className="hidden md:block">
            <ServicedVehiclesTableFullScr />
          </div>
          <div className="visible md:hidden">
            <ServicedVehiclesTableMobScr />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServedVehicles;
