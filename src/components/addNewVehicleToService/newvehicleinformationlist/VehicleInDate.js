import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewVehicleDetails_vehicleForServiceIn } from "../../../store/slices/newVehicleDetailsSlice";
const VehicleInDate = () => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const [vehicleServiceIn, setvehicleServiceIn] = useState(today);
  dispatch(addNewVehicleDetails_vehicleForServiceIn(today));
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <div>Vehicle entry</div>
      <div className="flex justify-between">
        <input
          type="date"
          min={today}
          value={vehicleServiceIn}
          className="w-full p-2 border border-slate-300 rounded-md outline-none"
          disabled
        ></input>
        <p className="text-red-600 text-lg px-1">*</p>
      </div>
    </div>
  );
};

export default VehicleInDate;
