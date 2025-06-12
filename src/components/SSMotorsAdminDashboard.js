import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { SERVER } from "../utils/constants";
import { addServedVehicles } from "../store/slices/ssMotorsServedVehiclesSlice";
import { addServicingVehicles } from "../store/slices/ssMotorsServicingVehiclesSlice";
const SSMotorsAdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admindata = useSelector((store) => store.ssMotorsadmin);
  const servedVehicles = useSelector((store) => store.ssMotorsServedVehicles);
  const servicingVehicles = useSelector(
    (store) => store.ssMotorsServicingVehicles
  );
  console.log(servicingVehicles);
  useEffect(() => {
    const fetchServicedVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicedvehicles",
        {
          withCredentials: true,
        }
      );
      //console.log(result?.data?.data);
      dispatch(addServedVehicles(result?.data?.data));
    };
    const fetchServicingVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicingvehicles",
        {
          withCredentials: true,
        }
      );
      dispatch(addServicingVehicles(result?.data?.data));
    };
    fetchServicedVehicles();
    fetchServicingVehicles();
  }, []);
  return !servicingVehicles ? (
    <div>Loading...</div>
  ) : (
    <div className="sm:flex justify-between m-1 p-2 h-screen">
      {/**servicing & served vehicles data */}
      <div className="w-[60%]">
        {/**servicing vehicles data */}
        <div className="border border-slate-600 p-2 rounded-md m-1 overflow-x-auto h-1/2">
          <p className="bg-blue-900 p-2 text-center font-semibold text-lg rounded-md">
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
        {/**servicing vehicles data */}
        {/**served vehicles data */}
        <div className="border border-slate-600 p-2 rounded-md m-1 h-1/2">
          <div className="">
            <p className="bg-blue-700 p-2 text-center font-semibold text-lg rounded-md">
              Serviced vehicles
            </p>
            {/**search fields */}
            <div className="">
              <input
                className="w-full p-2 my-1 rounded-sm border-b-2 border-slate-400 outline-none"
                type="text"
                placeholder="Search brand/model/customer name/mobile number"
              />
            </div>
          </div>
          {/**search fields */}
          <div className="overflow-auto h-3/4">
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
                {servedVehicles?.map((x, index) => (
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
        {/**served vehicles data */}
      </div>
      {/**servicing & served vehicles data */}

      {/**servicing summary */}
      <div className="w-full border border-slate-600 sm:w-[40%] p-2 rounded-md m-1">
        <p>summary data</p>
      </div>
      {/**servicing summary */}
    </div>
  );
};

export default SSMotorsAdminDashboard;
