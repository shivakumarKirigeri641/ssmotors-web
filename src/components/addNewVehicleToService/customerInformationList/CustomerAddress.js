import React, { useState } from "react";
import { addCustomerDetails_address } from "../../../store/slices/customerDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
const CustomerAddress = () => {
  const dispatch = useDispatch();
  const [CustomerAddressinp, setCustomerAddressinp] = useState("");
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <p>Address:</p>
      <div className="flex justify-between">
        <textarea
          className="w-full p-2 h-full border border-slate-300 rounded-md outline-none"
          placeholder="location, address, street"
          value={CustomerAddressinp}
          onChange={(e) => {
            setCustomerAddressinp(e.target.value);
            dispatch(addCustomerDetails_address(e.target.value));
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default CustomerAddress;
