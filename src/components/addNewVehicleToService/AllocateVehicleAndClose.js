import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SERVER } from "../../utils/constants";

const AllocateVehicleAndClose = () => {
  const navigate = useNavigate();
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
          customerAltMobile: !secondarymobilenumber
            ? primarymobilenumber
            : secondarymobilenumber,
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
      const resultresponse = await axios.post(
        SERVER + "/admin/insert/addnewvehicletoservice",
        { result },
        { withCredentials: true }
      );
      console.log(resultresponse);
      navigate("/admin/servicingvehicles");
    } catch (err) {
      seterrMsg(err.message);
      seterrStatus(true);
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
          navigate("/admin/servicingvehicles");
        }}
      >
        Close
      </button>
      {errStatus && (
        <div className="absolute left-0 animate-bounce text-red-600 font-bold italic">
          <p>!{errMsg}</p>
        </div>
      )}
    </div>
  );
};

export default AllocateVehicleAndClose;
