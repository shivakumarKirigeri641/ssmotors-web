import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewVehicleDetails_isElectric,
  removeNewVehicleDetails_isElectric,
} from "../../../store/slices/newVehicleDetailsSlice";
const IsElectric = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    dispatch(addNewVehicleDetails_isElectric(isChecked));
  };
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-start p-2 pb-3 text-gray-700">
      <div className="text-nowrap">Is vehicle electric?</div>
      <input
        type="checkbox"
        className="w-full p-2 m-2 border border-slate-300 rounded-md outline-none"
        checked={isChecked}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </div>
  );
};

export default IsElectric;
