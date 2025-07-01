import React, { useState } from "react";
import {
  addCustomerDetails_primarymobilenumber,
  removeCustomerDetails_primarymobilenumber,
} from "../../../store/slices/customerDetailsSlice";
import validateMobileNumber from "../../../utils/validateMobileNumber";
import { useDispatch, useSelector } from "react-redux";
const CustomerPrimaryMobileNumber = () => {
  const dispatch = useDispatch();
  const phno = useSelector(
    (store) => store.customerDetails?.primarymobilenumber
  );
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [CustomerPrimaryMobileNumberinp, setCustomerPrimaryMobileNumberinp] =
    useState("");
  const [showErrorMsg, setshowErrorMsg] = useState("");
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Mobile number:</p>
      <div className="flex justify-between">
        <input
          className={
            "" === CustomerPrimaryMobileNumberinp
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="1234567890"
          value={CustomerPrimaryMobileNumberinp}
          onChange={(e) => {
            setCustomerPrimaryMobileNumberinp(e.target.value);
            dispatch(removeCustomerDetails_primarymobilenumber());
            seterrorMsgStatus(true);
            setshowErrorMsg("Invalid mobile number!");
            if (validateMobileNumber(e.target.value)) {
              dispatch(addCustomerDetails_primarymobilenumber(e.target.value));
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

export default CustomerPrimaryMobileNumber;
