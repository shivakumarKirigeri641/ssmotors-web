import axios from "axios";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import validateVehicleNumber from "../../../utils/validateVehicleNumber";
import { useSelector } from "react-redux";
const VehicleNumber = () => {
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [showErrorMsg, setshowErrorMsg] = useState("");
  const [vehiclenumberinp, setvehiclenumberinp] = useState("");
  const vehiclenumbers = useSelector((store) => store.vehicleNumbers);
  const checkVehicleForExistence = (input) => {
    if (vehiclenumbers && 0 < vehiclenumbers?.length) {
      return vehiclenumbers.includes(input);
    } else return false;
  };
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Vehicle Number:</p>
      <div className="flex justify-between">
        <input
          className={
            errorMsgStatus
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="KA01AA0001"
          value={vehiclenumberinp.toUpperCase()}
          onChange={(e) => {
            setvehiclenumberinp(e.target.value.toUpperCase());
            seterrorMsgStatus(false);
            setshowErrorMsg("");
            if (!validateVehicleNumber(e.target.value.toUpperCase())) {
              seterrorMsgStatus(true);
              setshowErrorMsg("Invalid vehicle number!");
            }
            if (
              10 === e.target.value.toUpperCase().length &&
              checkVehicleForExistence(e.target.value.toUpperCase())
            ) {
              seterrorMsgStatus(true);
              setshowErrorMsg("Vehicle number already served.!");
            }
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

export default VehicleNumber;
