import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewVehicleDetails_vehicleForServiceOut } from "../../../store/slices/newVehicleDetailsSlice";
const VehicleOutDate = () => {
  const dispatch = useDispatch();
  let today = new Date().toISOString().split("T")[0];
  const [vehicleServiceOut, setvehicleServiceOut] = useState(today);
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <div>Vehicle exit</div>
      <div className="flex justify-between">
        <input
          type="date"
          min={today}
          value={vehicleServiceOut}
          className="w-full p-2 border border-slate-300 rounded-md outline-none"
          onChange={(e) => {
            setvehicleServiceOut(e.target.value);
            dispatch(addNewVehicleDetails_vehicleForServiceOut(e.target.value));
          }}
        ></input>
        <p className="text-red-600 text-lg px-1">*</p>
      </div>
    </div>
  );
};

export default VehicleOutDate;
