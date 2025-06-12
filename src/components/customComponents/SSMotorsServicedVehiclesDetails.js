import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const SSMotorsServicedVehiclesDetails = () => {
  const [searchText, setsearchText] = useState("");
  const servedVehicles = useSelector((store) => store.ssMotorsServedVehicles);
  const servedVehiclesFilter = servedVehicles.filter(
    (x) =>
      x.vehicleInfo?.variantId?.variantName
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x.vehicleInfo?.vehicleNumber
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x.customerInfo?.customerName
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      x.customerInfo?.primaryMobileNumber
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );
  return (
    <div className="border border-slate-600 rounded-md ml-1 sd:h-[100%]">
      <div className="">
        <div className="flex justify-center bg-[#123456] text-blue-50 p-2 text-center font-bold text-lg rounded-md">
          <img
            className="w-8 mx-2"
            src={require("../../images/bikeserved.png")}
          ></img>
          <p className="">Serviced vehicles</p>
        </div>
        {/**search fields */}
        <div className="flex justify-between">
          <input
            className="w-full pl-5 p-2 my-1 rounded-sm border-b-2 border-slate-400 outline-none"
            type="text"
            placeholder="Search brand/model/customer name/mobile number"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          {"" === searchText ? (
            <div className="flex justify-center items-center m-2">
              <img
                className="w-5 h-5"
                src={require("../../images/search.png")}
              ></img>
            </div>
          ) : (
            <div className="flex justify-center items-center m-2">
              <div>
                <img
                  className="w-10 h-5 cursor-pointer text-center"
                  src={require("../../images/clear.png")}
                  onClick={() => {
                    setsearchText("");
                  }}
                ></img>
              </div>
              <p className="mx-1">Count:{servedVehiclesFilter?.length}</p>
            </div>
          )}
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
              <tr key={index} className="hover:bg-slate-700">
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
