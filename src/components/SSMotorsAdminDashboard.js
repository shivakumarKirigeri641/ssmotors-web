import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
  useEffect(() => {
    const fetchServicedVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicedvehicles",
        {
          withCredentials: true,
        }
      );
      console.log(result?.data?.data);
      dispatch(addServedVehicles(result?.data?.data));
    };
    const fetchServicingVehicles = async () => {
      const result = await axios.get(
        SERVER + "/admin/feed/getservicingvehicles",
        {
          withCredentials: true,
        }
      );
      console.log(result?.data?.data);
      dispatch(addServicingVehicles(result?.data?.data));
    };
    fetchServicedVehicles();
    fetchServicingVehicles();
  }, []);
  return (
    <div>
      <p>SSMotorsAdminDashbaord</p>
    </div>
  );
};

export default SSMotorsAdminDashboard;
