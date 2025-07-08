import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
const ServicingVehiclesTableFullScr = () => {
  const servicingVehicles = useSelector((store) => store.servicingVehicles);
  const navigate = useNavigate();
  return (
    <div className="text-gray-500 text-sm">
      <div className="">
        <table className="w-full">
          <thead className="text-left border-b border-black">
            <tr>
              <th></th>
              <th>Vehicle number</th>
              <th>Brand/model</th>
              <th>Customer Name</th>
              <th>Mobile number</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {servicingVehicles?.map((x, index) => (
              <tr className="relative group border-b border-slate-300 hover:bg-gradient-to-r from-blue-100 to-blue-400 hover:text-black">
                <td>{index + 1}</td>
                <td>
                  <div className="flex justify-start items-center">
                    <img src={require("../../images/icons/bike.svg")}></img>
                    <p className="mx-3">{x?.vehicleNumber}</p>
                  </div>
                </td>
                <td>{x?.vehicleInfo?.variantName}</td>
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
                  <button
                    className="text-white p-2 rounded-md"
                    onClick={() => {
                      {
                        navigate("/editvehicletoservice/" + x?.vehicleNumber);
                      }
                    }}
                  >
                    <img src={require("../../images/icons/edit.svg")}></img>
                  </button>
                </td>
                <td
                  className="absolute -top-12 left-0 transform -translate-x-1/2 mt-2 bg-black opacity-0 text-white text-sm p-2
                rounded group-hover:opacity-70 transition "
                >
                  <div className="w-[100%] p-2 border border-slate-400">
                    <p>Last service information:</p>
                    <div className="flex justify-between text-xs p-2">
                      <p className="">km driven: </p>
                      <p>{x.latestService?.kmDriven}</p>
                    </div>
                    <div className="flex justify-between text-xs p-2">
                      <p>serviced date: </p>
                      <p className="">
                        {x.latestService?.dateOfVehicleEntry.slice(0, 10)}
                      </p>
                    </div>
                  </div>
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
