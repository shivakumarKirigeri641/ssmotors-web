import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GeneralDetails from "./servicecontentData/GeneralDetails";
import ServiceCheckList from "./servicecontentData/ServiceCheckList";
import CustomerComplaints from "./servicecontentData/CustomerComplaints";
import MechanicObservations from "./servicecontentData/MechanicObservations";
import AfterServiceComplaints from "./servicecontentData/AfterServiceComplaints";
import StandardServices from "./servicecontentData/StandardServices";
import { addserviceAccordionIndex } from "../../store/slices/serviceAccordionIndexSlice";
import PartsAndAccessories from "./servicecontentData/PartsAndAccessories";
const EditVehicle_ServiceInfo_Accrdion = () => {
  let index = 0;
  const dispatch = useDispatch();
  const selectedAccordionIndex = useSelector(
    (store) => store.serviceAccordionIndex
  );
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="w-full my-1 p-2 rounded-lg">
      <ul className="">
        <li className="" key={0}>
          <div
            className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer"
            onClick={(e) => {
              dispatch(addserviceAccordionIndex(0));
            }}
          >
            <p>General</p>
            {0 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
          </div>
          {0 === selectedAccordionIndex && <GeneralDetails />}
        </li>
        <li
          className=""
          key={1}
          onClick={(e) => {
            dispatch(addserviceAccordionIndex(1));
          }}
        >
          <div>
            <div
              className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer"
              onClick={(e) => {
                dispatch(addserviceAccordionIndex(1));
              }}
            >
              <p>Standard services checklist</p>
              {1 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {1 === selectedAccordionIndex && <StandardServices />}
          </div>
        </li>
        <li
          className=""
          key={2}
          onClick={(e) => {
            dispatch(addserviceAccordionIndex(2));
          }}
        >
          <div>
            <div className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer">
              <p>Customer complaints</p>
              {2 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {2 === selectedAccordionIndex && (
              <div className="m-1 p-2 border border-slate-300 rounded">
                cust complaints content
              </div>
            )}
          </div>
        </li>
        <li
          className=""
          key={3}
          onClick={(e) => {
            dispatch(addserviceAccordionIndex(3));
          }}
        >
          <div>
            <div className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer">
              <p>Mechanic observations</p>
              {3 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {3 === selectedAccordionIndex && (
              <div className="m-1 p-2 border border-slate-300 rounded">
                mech obs content
              </div>
            )}
          </div>
        </li>
        <li
          className=""
          key={4}
          onClick={(e) => {
            dispatch(addserviceAccordionIndex(4));
          }}
        >
          <div>
            <div className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer">
              <p>After service complaints</p>
              {4 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {4 === selectedAccordionIndex && (
              <div className="m-1 p-2 border border-slate-300 rounded">
                after std service content
              </div>
            )}
          </div>
        </li>
        <li
          className=""
          key={5}
          onClick={(e) => {
            dispatch(addserviceAccordionIndex(5));
          }}
        >
          <div>
            <div className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer">
              <p>Parts & accessories</p>
              {5 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {5 === selectedAccordionIndex && <PartsAndAccessories />}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EditVehicle_ServiceInfo_Accrdion;
