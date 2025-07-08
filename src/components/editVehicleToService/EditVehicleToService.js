import axios from "axios";
import EditVehicle_VehicleInfo from "./EditVehicle_VehicleInfo";
import EditVehicle_ServiceProgressInfo from "./EditVehicle_ServiceProgressInfo";
import EditVehicle_CustomerInfo from "./EditVehicle_CustomerInfo";
import EditVehicle_ServiceInfo from "./EditVehicle_ServiceInfo";
import { useEffect } from "react";
import { addeditVehicleFullDetails } from "../../store/slices/editVehicleFullDetailsSlice";
import { useParams } from "react-router";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
const EditVehicleToService = () => {
  const vehiclenumber = useParams();
  const dispatch = useDispatch();
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  useEffect(() => {
    //dispatch(removeeditVehicleFullDetails());
    const fetchSelectedVehicleDetails = async () => {
      const result = await axios.get(
        SERVER +
          "/admin/edit/editvehicleservice/" +
          vehiclenumber?.vehiclenumber,
        { withCredentials: true }
      );
      dispatch(addeditVehicleFullDetails(result?.data?.data));
    };
    fetchSelectedVehicleDetails();
  }, []);
  return (
    <div className="h-screen w-full p-2 md:w-[70%] md:mx-auto text-sm">
      {!editVehicleFullDetails ? (
        <p>Loading....</p>
      ) : (
        <div>
          <div className="md:flex justify-between border border-slate-300 items-start p-2 m-2 rounded-md shadow-xl">
            <EditVehicle_VehicleInfo />
            <EditVehicle_CustomerInfo />
          </div>
          <div>
            <EditVehicle_ServiceInfo />
            <EditVehicle_ServiceProgressInfo />
          </div>
        </div>
      )}
    </div>
  );
};
export default EditVehicleToService;
