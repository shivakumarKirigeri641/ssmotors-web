import React, { useState } from "react";
import { useSelector } from "react-redux";

const ServicedVehiclesTableFullScr = () => {
  const [searchText, setsearchText] = useState("");
  const servicedVehicles = useSelector((store) => store.servicedVehicles);
  let filterservicedVehicles = servicedVehicles.filter(
    (x) =>
      x?.vehicleInfo?.vehicleNumber
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x?.vehicleInfo?.variantId?.variantName
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x?.customerInfo?.customerName
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x?.customerInfo?.primaryMobileNumber
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );
  console.log(servicedVehicles);
  return (
    <div className="text-gray-500 text-sm">
      <div className="relative w-full my-2 flex justify-between items-center">
        <input
          className="w-full h-full p-3 outline-none rounded-md  border border-slate-400"
          type="text"
          placeholder="Search for vehicle/customer/phone"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        {searchText && (
          <button
            className="absolute right-1 m-1 bg-yellow-200 p-2 rounded-lg"
            onClick={() => {
              setsearchText("");
            }}
          >
            <img src={require("../../images/icons/cleartext.svg")}></img>
          </button>
        )}
        <label className=""></label>
      </div>
      <div className="">
        <table className="w-full">
          <thead className="text-left border-b border-black">
            <th></th>
            <th>Vehicle number</th>
            <th>Brand/model</th>
            <th>Customer Name</th>
            <th>Mobile number</th>
            <th>Repeat</th>
            <th>Edit</th>
          </thead>
          <tbody>
            {filterservicedVehicles?.map((x, index) => (
              <tr className="relative group border-b border-slate-300 hover:bg-gradient-to-r from-blue-100 to-blue-400 hover:text-black">
                <td>{index + 1}</td>
                <td>
                  <div className="flex justify-start items-center">
                    <img src={require("../../images/icons/bike.svg")}></img>
                    <p className="mx-3">{x?.vehicleInfo?.vehicleNumber}</p>
                  </div>
                </td>
                <td>{x?.vehicleInfo?.variantId?.variantName}</td>
                <td>{x?.customerInfo?.customerName}</td>
                <td>{x?.customerInfo?.primaryMobileNumber}</td>
                <td>
                  <button className="text-white p-2 rounded-md">
                    <img src={require("../../images/icons/repeat.svg")}></img>
                  </button>
                </td>
                <td>
                  <button className="text-white rounded-md">
                    <img src={require("../../images/icons/edit.svg")}></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicedVehiclesTableFullScr;
