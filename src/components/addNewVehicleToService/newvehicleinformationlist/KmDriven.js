import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewVehicleDetails_kmDriven,
  removeNewVehicleDetails_kmDriven,
} from "../../../store/slices/newVehicleDetailsSlice";
const kmDriven = () => {
  const [kmdriven, setkmdriven] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <div>KM driven</div>
      <div className="flex justify-between">
        <input
          type="number"
          min={0}
          value={kmdriven}
          className="w-full p-2 border border-slate-300 rounded-md outline-none"
          placeholder="25447"
          onChange={(e) => {
            setkmdriven(e.target.value);
            dispatch(addNewVehicleDetails_kmDriven(e.target.value));
          }}
        ></input>
        <p className="text-red-600 text-lg px-1">*</p>
      </div>
    </div>
  );
};

export default kmDriven;
