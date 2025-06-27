import { useDispatch, useSelector } from "react-redux";
const ServicingVehiclesTableMobScr = () => {
  const servicingVehicles = useSelector((store) => store.servicingVehicles);
  return (
    <div className="text-gray-500 text-sm w-full h-screen">
      <div className="">
        <table className="table-auto">
          <thead className="text-left bg-slate-300 text-gray-800">
            <th></th>
            <th>Vehicle details</th>
            <th>Customer detials</th>
            <th>Status</th>
            <th>Options</th>
          </thead>
          <tbody className="border-t border-black">
            {servicingVehicles?.map((x, index) => (
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
                  {1 == x?.servicingInfo?.serviceStatus ? (
                    <p className="text-orange-500 font-semibold">🟡</p>
                  ) : (
                    <p className="text-orange-500 font-semibold">🟠</p>
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

export default ServicingVehiclesTableMobScr;
