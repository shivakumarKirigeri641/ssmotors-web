import { useDispatch, useSelector } from "react-redux";
import { removeComplaints } from "../../store/slices/customerComplaintsSlice";
import { removeAllDetailsOfCustomer } from "../../store/slices/customerDetailsSlice";
import { removeAll } from "../../store/slices/newVehicleDetailsSlice";
import { addServicingVehicles } from "../../store/slices/servicingVehiclesSlice";
import ServicingVehiclesTableMobScr from "./ServicingVehiclesTableMobScr";
import Error from "../Error";
import ServicingVehiclesTableFullScr from "./ServicingVehiclesTableFullScr";
import Skeleton from "../Skeleton";
import { useEffect } from "react";
import axios from "axios";
import { SERVER } from "../../utils/constants";
import { addservicingVehicles } from "../../store/slices/servicingVehiclesSlice";
import { removeservicedVehicles } from "../../store/slices/serviciedVehiclesSlice";
import { useNavigate } from "react-router";
const ServicingVehicles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const servicingVehicles = useSelector((store) => store.servicingVehicles);
  useEffect(() => {
    const fetchServicingDetails = async () => {
      try {
        const result = await axios.get(
          SERVER + "/admin/feed/getservicingvehicles",
          { withCredentials: true }
        );
        dispatch(addservicingVehicles(result?.data?.data));
        dispatch(removeservicedVehicles());
      } catch (err) {
        <Error />;
      }
    };
    fetchServicingDetails();
  }, []);
  return (
    <div className="h-screen w-full p-2 md:w-[70%] md:mx-auto">
      {/** section header*/}
      <div className="md:flex justify-between items-center w-full m-2">
        <div className="md:m-2 md:p-2">
          <p className="font-semibold p-2">Servicing vehicles</p>
          <p className="p-2 text-sm">
            These list of vehicles includes 'yet to serve' vehicles & 'ongoing
            servicing' vehicles
          </p>
        </div>
        <button
          className="bg-[#4F39F6] p-2 rounded-lg text-white"
          onClick={() => {
            dispatch(removeAll());
            dispatch(removeAllDetailsOfCustomer());
            dispatch(removeComplaints());
            navigate("/addnewvehicletoservice");
          }}
        >
          Add new vehicle to service
        </button>
      </div>
      {/** section header*/}
      {!servicingVehicles || 0 === servicingVehicles?.length ? (
        <Skeleton />
      ) : (
        <div>
          <div className="hidden md:block">
            <ServicingVehiclesTableFullScr />
          </div>
          <div className="visible md:hidden">
            <ServicingVehiclesTableMobScr />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicingVehicles;
