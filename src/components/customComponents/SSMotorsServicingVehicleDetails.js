import { Link, useNavigate } from "react-router";

const SSMotorsServicingVehicleDetails = ({ servicingVehicles }) => {
  console.log(servicingVehicles);
  return (
    <div className="border border-slate-600 rounded-md overflow-x-auto">
      <div className="flex justify-center bg-[#123456] text-blue-50 p-2 text-center font-bold text-lg rounded-md">
        <img
          className="w-8 mx-2"
          src={require("../../images/bikeservicing.png")}
        ></img>
        <p className="">Servicing vehicles</p>
      </div>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Vehicle number</th>
            <th>Brand/Model</th>
            <th>Customer Name</th>
            <th>Mobile number</th>
          </tr>
        </thead>
        <tbody>
          {servicingVehicles?.map((x, index) => (
            <tr key={index} className="hover:bg-slate-700 truncate w-[200px]">
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
  );
};

export default SSMotorsServicingVehicleDetails;
