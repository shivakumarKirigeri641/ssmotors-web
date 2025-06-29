import { useState } from "react";
import { useSelector } from "react-redux";

const CustomerInformationInput = ({ customerInfoRef }) => {
  const [searchBrandModel, setsearchBrandModel] = useState("");
  const [searchBrandModelfilter, setsearchBrandModelfilter] = useState("");
  const [showsuggessions, setshowsuggessions] = useState(false);
  const allvehicles = useSelector((store) => store.allVehicles);
  let filtervehicles = allvehicles?.filter((x) =>
    x?.toLowerCase().includes(searchBrandModelfilter.toLowerCase())
  );
  return (
    <div className="w-full">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold">
        Customer information
      </div>
      <div>
        {/**customer name */}
        <div className="flex justify-between items-center">
          <label className="w-48  text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>Customer name:
          </label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            ref={customerInfoRef}
            type="text"
            placeholder="enter the customer name"
          ></input>
        </div>
        {/**vehicle no */}
        {/**mobile no */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>
            Mobile number
          </label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            ref={customerInfoRef}
            placeholder="enter the mobile number"
          ></input>
        </div>
        {/**mobile no */}
        {/**email */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Email:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            ref={customerInfoRef}
            placeholder="enter the email address"
          ></input>
        </div>
        {/**email */}
        {/**address */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Address:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            ref={customerInfoRef}
            placeholder="enter the residential address"
          ></input>
        </div>
        {/**address */}
      </div>
    </div>
  );
};

export default CustomerInformationInput;
