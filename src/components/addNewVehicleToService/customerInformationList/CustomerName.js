import React, { useState } from "react";
import {
  addCustomerDetails_name,
  removeCustomerDetails_name,
} from "../../../store/slices/customerDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
const CustomerName = () => {
  const dispatch = useDispatch();
  const custname = useSelector((store) => store.customerDetails?.customername);
  console.log("custname:", custname);
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [customernameinp, setcustomernameinp] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState("");
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Name:</p>
      <div className="flex justify-between">
        <input
          className={
            "" === customernameinp
              ? "w-full p-2 border border-red-700 rounded-md outline-none"
              : "w-full p-2 border border-slate-300 rounded-md outline-none"
          }
          placeholder="John"
          value={customernameinp}
          onChange={(e) => {
            seterrorMsgStatus(false);
            setshowErrorMsg("");
            setcustomernameinp(e.target.value);
            dispatch(addCustomerDetails_name(e.target.value));
            if (-1 === customernameinp?.length) {
              seterrorMsgStatus(true);
              setshowErrorMsg("Invalid customer name!");
              dispatch(removeCustomerDetails_name());
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

export default CustomerName;
