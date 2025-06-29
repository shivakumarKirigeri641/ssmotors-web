import { useEffect, useRef, useRef, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
import VehicleInformationInput from "./VehicleInformationInput";
import CustomerInformationInput from "./CustomerInformationInput";
import validateNewVehicleMandatoryFields from "../../utils/validateNewVehicleMandatoryFields";
import CustomerComplaintsInput from "./CustomerComplaintsInput";
import axios from "axios";
import { useNavigate } from "react-router";
const AddNewVehicleToService = () => {
  const [showError, setShowError] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const vehicleInfoRef = useRef();
  const customerInfoRef = useRef();
  const customerComplaintsRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAllocation = async () => {
    try {
      const result = {
        vehicleInfo: vehicleInfoRef.current.vehicleInfo,
        customerInfo: customerInfoRef.current.customerInfo,
        customerComplaintsInfo: customerComplaintsRef.current.complaints,
      };
      if (!validateNewVehicleMandatoryFields(result)) {
        throw new Error("Required fields has to be filled!");
      }
      const resultresponse = await axios.post(
        SERVER + "/admin/insert/addnewvehicletoservice",
        { result },
        { withCredentials: true }
      );
      console.log(resultresponse?.data?.jsonobject);
    } catch (err) {
      showErrorMsg(err.message);
    }
  };
  useEffect(() => {
    const fetchbrandmodelvariants = async () => {
      const result = await axios.get(SERVER + "/allvehicles", {
        withCredentials: true,
      });
      dispatch(addallVehicles(result?.data?.data));
      console.log(result?.data?.data);
    };
    fetchbrandmodelvariants();
  }, []);
  const showErrorMsg = (msg) => {
    seterrMsg(msg);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 1000); // 1 second
  };
  return (
    <div className="relative text-sm h-screen md:mx-auto w-full md:w-[70%]">
      <div className="p-2 m-2 text-left text-xl italic font-bold text-blue-800">
        Add new vehicle to the service
      </div>
      <div className="md:flex justify-between items-start m-2 p-2">
        <div className="w-full m-2 p-2">
          <VehicleInformationInput ref={vehicleInfoRef} />
        </div>
        <div className="w-full m-2 p-2">
          <CustomerInformationInput ref={customerInfoRef} />
        </div>
      </div>
      <div className="m-2 p-2">
        <CustomerComplaintsInput ref={customerComplaintsRef} />
        <div className="md:flex justify-between items-center">
          <p className="text-red-600 italic m-2">
            Note: *indicates mandatory fields to be filled!
          </p>
          <div className="md:flex justify-between items-center">
            <button
              className="bg-[#4F39F6] text-white font-semibold rounded-full px-4 p-2 md:m-2 w-full md:w-auto"
              onClick={() => {
                handleAllocation();
              }}
            >
              Allocate to service
            </button>
            <button
              className="bg-[#cb3882] text-white font-semibold rounded-full px-4 p-2 w-full mt-1 md:m-2 md:w-auto"
              onClick={() => {
                navigate("/admin/servicingvehicles");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {showError && (
        <div className="fixed left-10 bottom-20 md:bottom-5 bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-fadeInOut">
          {errMsg}
        </div>
      )}
    </div>
  );
};

export default AddNewVehicleToService;
