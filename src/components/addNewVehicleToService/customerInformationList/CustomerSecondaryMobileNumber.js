import React, { useState } from "react";
import {
  addCustomerDetails_secondarymobilenumber,
  removeCustomerDetails_secondarymobilenumber,
} from "../../../store/slices/customerDetailsSlice";
import validateMobileNumber from "../../../utils/validateMobileNumber";
import { useDispatch, useSelector } from "react-redux";
const CustomerSecondaryMobileNumber = () => {
  const dispatch = useDispatch();
  const phno = useSelector(
    (store) => store.customerDetails?.secondarymobilenumber
  );
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [
    CustomerSecondaryMobileNumberinp,
    setCustomerSecondaryMobileNumberinp,
  ] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState("");
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Alternative Mobile number:</p>
      <div className="flex justify-between">
        <input
          className={
            "" === CustomerSecondaryMobileNumberinp
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="John"
          value={CustomerSecondaryMobileNumberinp}
          onChange={(e) => {
            setCustomerSecondaryMobileNumberinp(e.target.value);
            dispatch(removeCustomerDetails_secondarymobilenumber());
            seterrorMsgStatus(true);
            setshowErrorMsg("Invalid mobile number!");
            if (validateMobileNumber(e.target.value)) {
              dispatch(
                addCustomerDetails_secondarymobilenumber(e.target.value)
              );
              seterrorMsgStatus(false);
              setshowErrorMsg("");
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

export default CustomerSecondaryMobileNumber;
