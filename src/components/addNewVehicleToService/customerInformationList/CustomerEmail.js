import React, { useState } from "react";
import {
  addCustomerDetails_email,
  removeCustomerDetails_email,
} from "../../../store/slices/customerDetailsSlice";
import validateEmail from "../../../utils/validateEmail";
import { useDispatch, useSelector } from "react-redux";
const CustomerEmail = () => {
  const dispatch = useDispatch();
  const phno = useSelector((store) => store.customerDetails?.email);
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [CustomerEmailinp, setCustomerEmailinp] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState("");
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Email:</p>
      <div className="flex justify-between">
        <input
          className={
            "" === validateEmail(CustomerEmailinp)
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="abc@email.com"
          value={CustomerEmailinp}
          onChange={(e) => {
            setCustomerEmailinp(e.target.value);
            dispatch(removeCustomerDetails_email());
            seterrorMsgStatus(true);
            setshowErrorMsg("Invalid email!");
            if (validateEmail(e.target.value)) {
              dispatch(addCustomerDetails_email(e.target.value));
              seterrorMsgStatus(false);
              setshowErrorMsg("");
            }
          }}
        ></input>
      </div>
      {errorMsgStatus && (
        <p className="text-xs italic font-bold text-red-600">{showErrorMsg}</p>
      )}
    </div>
  );
};

export default CustomerEmail;
