import { Link, useNavigate } from "react-router";

const SSMotorsServicingVehicleDetails = ({ servicingVehicles }) => {
  return (
    <div className="border border-slate-600 rounded-md overflow-x-auto">
      <p className="bg-[#123456] text-blue-50  p-2 text-center font-semibold text-lg rounded-md">
        Servicing vehicles
      </p>
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
  );
};

export default SSMotorsServicingVehicleDetails;
