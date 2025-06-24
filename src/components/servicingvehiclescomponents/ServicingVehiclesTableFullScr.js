import { useDispatch, useSelector } from "react-redux";
const ServicingVehiclesTableFullScr = () => {
  const servicingVehicles = useSelector((store) => store.servicingVehicles);
  return (
    <div className="text-gray-500 text-sm">
      <div className="">
        <table className="w-full">
          <thead className="text-left border-b border-black">
            <th>Vehicle number</th>
            <th>Brand/model</th>
            <th>Customer Name</th>
            <th>Mobile number</th>
            <th>Status</th>
            <th>Options</th>
          </thead>
          <tbody>
            {servicingVehicles?.map((x) => (
              <tr className="border-b border-slate-300 hover:bg-gradient-to-r from-blue-100 to-blue-400 hover:text-black">
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
                  {1 == x?.servicingInfo?.serviceStatus ? (
                    <p className="text-yellow-600 font-semibold">in progress</p>
                  ) : (
                    <p className="text-orange-500 font-semibold">
                      yet to start
                    </p>
                  )}
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

export default ServicingVehiclesTableFullScr;
