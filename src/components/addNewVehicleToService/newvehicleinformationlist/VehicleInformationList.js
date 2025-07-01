import VehicleNumber from "./VehicleNumber";
import VehicleVariaint from "./VehicleVariaint";
import FuelPresentAtService from "./FuelPresentAtService";
import KmDriven from "./KmDriven";
import VehicleInDate from "./VehicleInDate";
import VehicleOutDate from "./VehicleOutDate";
import IsElectric from "./IsElectric";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";
import axios from "axios";
import { SERVER } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addvehicleNumbers } from "../../../store/slices/vehicleNumbersSlice";
const VehicleInformationList = () => {
  const dispatch = useDispatch();
  const vehicleNumbers = useSelector((store) => store.vehicleNumbers);
  useEffect(() => {
    const fetchVehicleNumbers = async () => {
      const resultvehiclenumbers = await axios.get(
        SERVER + "/admin/getvehiclenumbers",
        { withCredentials: true }
      );
      dispatch(
        addvehicleNumbers(
          resultvehiclenumbers?.data?.data.map((x) => x.vehicleNumber)
        )
      );
    };
    fetchVehicleNumbers();
  }, []);
  return (
    <div className="w-full md:w-[50%] m-2 border border-slate-300 rounded-md">
      <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-2 font-semibold text-white">
        Vehicle information
      </div>
      <VehicleNumber />
      <VehicleVariaint />
      <FuelPresentAtService />
      <KmDriven />
      <VehicleInDate />
      <VehicleOutDate />
      <IsElectric />
    </div>
  );
};

export default VehicleInformationList;
