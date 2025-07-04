import axios from "axios";
import React, { useState } from "react";
import { removeComplaints } from "../../store/slices/customerComplaintsSlice";
import { removeAllDetailsOfCustomer } from "../../store/slices/customerDetailsSlice";
import { removeAll } from "../../store/slices/newVehicleDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SERVER } from "../../utils/constants";

const AllocateVehicleAndClose = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSuccessMessage, setshowSuccessMessage] = useState();
  const [errMsg, seterrMsg] = useState("");
  const [errStatus, seterrStatus] = useState(false);
  const vehiclenumber = useSelector(
    (store) => store.newVehicleDetails.vehiclenumber
  );
  const vehicleVariant = useSelector(
    (store) => store.newVehicleDetails.vehicleVariant
  );
  const iselectric = useSelector((store) => store.newVehicleDetails.isElectric);
  const fuelPresent = useSelector(
    (store) => store.newVehicleDetails.fuelPresent
  );
  const vehicleForServiceIn = useSelector(
    (store) => store.newVehicleDetails.vehicleForServiceIn
  );
  const vehicleForServiceOut = useSelector(
    (store) => store.newVehicleDetails.vehicleForServiceOut
  );
  const kmDriven = useSelector((store) => store.newVehicleDetails.kmDriven);

  const customername = useSelector(
    (store) => store.customerDetails.customername
  );
  const primarymobilenumber = useSelector(
    (store) => store.customerDetails.primarymobilenumber
  );
  const secondarymobilenumber = useSelector(
    (store) => store.customerDetails.secondarymobilenumber
  );
  const email = useSelector((store) => store.customerDetails.email);
  const adderss = useSelector((store) => store.customerDetails.address);

  const customercomplaints = useSelector(
    (store) => store.customercomplaints.complaints
  );
  const allocateVehicle = async () => {
    let resultresponse = null;
    try {
      seterrMsg("");
      seterrStatus(false);
      if (!vehiclenumber) {
        throw new Error("Invalid vehicle number");
      }
      if (!vehicleVariant) {
        throw new Error("Invalid brand/model selected");
      }
      if (!customername) {
        throw new Error("Invalid customer name");
      }
      if (!primarymobilenumber) {
        throw new Error("Invalid mobile number provided");
      }
      const result = {
        customerComplaintsInfo: customercomplaints,
        customerInfo: {
          customerMobile: primarymobilenumber,
          customerName: customername,
          customeraddress: !adderss ? "address not provided" : adderss,
          customeremail: !email ? "ssmotors@gmail.com" : email,
        },
        vehicleInfo: {
          fuelPresent: parseInt(fuelPresent),
          isElectric: iselectric,
          kmDriven: kmDriven,
          vehicleNumber: vehiclenumber,
          vehicleServiceInDate: vehicleForServiceIn,
          vehicleServiceOutDate: vehicleForServiceOut,
          vehicleVariant: vehicleVariant,
        },
      };
      resultresponse = await axios.post(
        SERVER + "/admin/insert/addnewvehicletoservice",
        { result },
        { withCredentials: true }
      );
      setshowSuccessMessage(true);
    } catch (err) {
      seterrMsg(err.message);
      seterrStatus(true);
    } finally {
    }
  };
  return (
    <div className="relative flex justify-end items-center border-t border-slate-400">
      <button
        className="p-2 px-4 m-2 bg-purple-700 rounded-full text-white font-bold hover:shadow-2xl"
        onClick={() => {
          allocateVehicle();
        }}
      >
        Allocate vehicle
      </button>
      <button
        className="p-2 px-4 m-2 bg-purple-700 rounded-full text-white font-bold"
        onClick={() => {
          dispatch(removeAll());
          dispatch(removeAllDetailsOfCustomer());
          dispatch(removeComplaints());
          navigate("/admin/servicingvehicles");
        }}
      >
        Close
      </button>
      {errStatus && (
        <div className="absolute left-0 animate-bounce text-red-600 font-bold italic">
          <p>{errMsg}</p>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed inset-0 flex justify-center items-center p-2 rounded-2xl z-20">
          <div className="rounded-xl bg-blue-300">
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 p-3 rounded-lg text-white font-bold">
              <p>Vehicle registration message</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={require("../../images/icons/sucess.svg")}></img>
              <p className=" font-bold p-2">
                New vehicle registered successfully.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-green-500 p-2 m-2 w-full rounded-full"
                onClick={() => {
                  setshowSuccessMessage(false);
                  navigate("/admin/servicingvehicles");
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
      {/**overlay for success msg */}
      {showSuccessMessage && (
        <div
          className="fixed inset-0 w-full h-screen bg-gray-100 opacity-50 z-10"
          onClick={() => {
            setshowSuccessMessage(false);
            dispatch(removeAll());
            dispatch(removeAllDetailsOfCustomer());
            dispatch(removeComplaints());
            navigate("/admin/servicingvehicles");
          }}
        ></div>
      )}
    </div>
  );
};

export default AllocateVehicleAndClose;
