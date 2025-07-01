import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewVehicleDetails_kmDriven,
  removeNewVehicleDetails_kmDriven,
} from "../../../store/slices/newVehicleDetailsSlice";
const kmDriven = () => {
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [kmdriven, setkmdriven] = useState(0);
  const [showErrorMsg, setshowErrorMsg] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <div>KM driven</div>
      <div className="flex justify-between">
        <input
          type="number"
          min={0}
          value={kmdriven}
          className={
            errorMsgStatus
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="25447"
          onChange={(e) => {
            setkmdriven(e.target.value);
            dispatch(addNewVehicleDetails_kmDriven(e.target.value));
          }}
        ></input>
        <p className="text-red-600 text-lg px-1">*</p>
      </div>
      {errorMsgStatus && (
        <p className="text-xs italic font-bold text-red-600">{showErrorMsg}</p>
      )}
    </div>
  );
};

export default kmDriven;
