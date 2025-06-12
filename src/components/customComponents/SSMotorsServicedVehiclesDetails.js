import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const SSMotorsServicedVehiclesDetails = () => {
  const [searchText, setsearchText] = useState("");
  const servedVehicles = useSelector((store) => store.ssMotorsServedVehicles);
  const servedVehiclesFilter = useSelector(
    (store) => store.ssMotorsServedVehicles
  );
  return (
    <div className="border border-slate-600 rounded-md ml-1">
      <div className="">
        <p className="bg-[#123456] text-blue-50 p-2 text-center font-bold text-lg rounded-md">
          Serviced vehicles
        </p>
        {/**search fields */}
        <div className="relative flex justify-between">
          <img
            className="absolute w-5 h-5 right-5 top-[25%]"
            src={require("../../images/search.png")}
          ></img>
          <input
            className="w-full pl-5 p-2 my-1 rounded-sm border-b-2 border-slate-400 outline-none"
            type="text"
            placeholder="Search brand/model/customer name/mobile number"
            value={searchText}
          />
        </div>
      </div>
      {/**search fields */}
      <div className="overflow-auto h-3/4">
        <table className="table table-xs">
          <thead className="">
            <tr>
              <th></th>
              <th>Vehicle number</th>
              <th>Brand/Model</th>
              <th>Customer Name</th>
              <th>Mobile number</th>
            </tr>
          </thead>
          <tbody>
            {servedVehiclesFilter?.map((x, index) => (
              <tr className="hover:bg-slate-700">
                <th>{index + 1}</th>
                <td className="font-semibold underline">
                  <Link to="">{x?.vehicleInfo?.vehicleNumber}</Link>
                </td>
                <td>{x?.vehicleInfo?.variantId?.variantName}</td>
                <td>{x?.customerInfo?.customerName}</td>
                <td>{x?.customerInfo?.primaryMobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SSMotorsServicedVehiclesDetails;
