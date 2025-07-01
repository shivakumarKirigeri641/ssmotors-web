import {
  addNewVehicleDetails_fuelPresent,
  removeNewVehicleDetails_fuelPresent,
} from "../../../store/slices/newVehicleDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

const FuelPresentAtService = () => {
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
          max="100"
          onChange={(e) => {
            dispatch(addNewVehicleDetails_fuelPresent(e.target.value));
          }}
        ></input>
        <p>{vehno}%</p>
      </div>
    </div>
  );
};

export default FuelPresentAtService;
