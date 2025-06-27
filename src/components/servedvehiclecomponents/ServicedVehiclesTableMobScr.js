import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ServicedVehiclesTableMobScr = () => {
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
  return (
    <div className="text-gray-500 text-sm w-full h-screen">
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
      <div className="h-screen overflow-auto">
        <table className="table-auto">
          <thead className="text-left bg-slate-300 text-gray-800">
            <th></th>
            <th>Vehicle details</th>
            <th>Customer detials</th>
            <th>Status</th>
            <th>Options</th>
          </thead>
          <tbody className="border-t border-black">
            {filterservicedVehicles?.map((x, index) => (
              <tr className="border-b border-slate-300 hover:bg-gradient-to-r from-blue-100 to-blue-400 hover:text-black">
                <td className="px-2">{index + 1}</td>
                <td>
                  <div>
                    <p className="font-semibold">
                      {x?.vehicleInfo?.vehicleNumber}
                    </p>
                    <p className="text-xs py-1 italic">
                      {x?.vehicleInfo?.variantId?.variantName}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="font-semibold">
                      {x?.customerInfo?.customerName}
                    </p>
                    <p className="text-xs py-1 italic">
                      {x?.customerInfo?.primaryMobileNumber}
                    </p>
                  </div>
                </td>
                <td>
                  <button className="text-white p-2 rounded-md">
                    <img src={require("../../images/icons/repeat.svg")}></img>
                  </button>
                </td>
                <td>
                  <button className="text-white p-2 rounded-md">
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

export default ServicedVehiclesTableMobScr;
