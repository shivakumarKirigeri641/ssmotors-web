import { useState } from "react";
import {
  addNewVehicleDetails_fuelPresent,
  removeNewVehicleDetails_fuelPresent,
} from "../../../store/slices/newVehicleDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

const FuelPresentAtService = () => {
  const [fuelPresent, setfuelpersent] = useState(1);
  const dispatch = useDispatch();
  const vehno = useSelector((store) => store.newVehicleDetails?.fuelPresent);
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Fuel present</p>
      <div className="flex justify-between items-center">
        <p>0</p>
        <input
          className="w-full"
          type="range"
          min="1"
          value={fuelPresent}
          max="100"
          onChange={(e) => {
            setfuelpersent(e.target.value);
            dispatch(addNewVehicleDetails_fuelPresent(e.target.value));
          }}
        ></input>
        <p>{vehno}%</p>
      </div>
    </div>
  );
};

export default FuelPresentAtService;
