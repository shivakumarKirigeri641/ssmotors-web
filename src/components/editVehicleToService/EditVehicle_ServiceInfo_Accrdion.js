import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GeneralDetails from "./servicecontentData/GeneralDetails";
import ServiceCheckList from "./servicecontentData/ServiceCheckList";
import CustomerComplaints from "./servicecontentData/CustomerComplaints";
import MechanicObservations from "./servicecontentData/MechanicObservations";
import AfterServiceComplaints from "./servicecontentData/AfterServiceComplaints";
const EditVehicle_ServiceInfo_Accrdion = () => {
  let index = 0;
  const [selectedAccordionIndex, setselectedAccordionIndex] = useState(0);
  console.log(selectedAccordionIndex);
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails?.serviceDataId?.list[selectedServiceDate]);
  return (
    <div className="w-full my-1 p-2 rounded-lg border border-slate-300 overflow-auto">
      <ul className="">
        <li className="" key={0}>
          <div
            className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer"
            onClick={(e) => {
              setselectedAccordionIndex(0);
            }}
          >
            <p>General</p>
            {0 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
          </div>
          {0 === selectedAccordionIndex && (
            <div>
              <table className="table-fixed w-full">
                <thead className="border-b border-slate-400">
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Service entry</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {editVehicleFullDetails?.serviceDataId?.list[
                          selectedServiceDate
                        ].dateOfVehicleEntry.slice(0, 10)}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Service exit</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {editVehicleFullDetails?.serviceDataId?.list[
                          selectedServiceDate
                        ].dateOfVehicleExit.slice(0, 10)}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>km driven</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {
                          editVehicleFullDetails?.serviceDataId?.list[
                            selectedServiceDate
                          ].kmDriven
                        }
                        km
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Fuel present</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {
                          editVehicleFullDetails?.serviceDataId?.list[
                            selectedServiceDate
                          ].fuelPercentBeforeService
                        }
                        %
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Is latest service</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {editVehicleFullDetails?.serviceDataId?.list[
                          selectedServiceDate
                        ].isLatestService ? (
                          <p>Yes</p>
                        ) : (
                          <p>No</p>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="border border-slate-200 h-0.5 bg-slate-300">
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Next service (km)</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {
                          editVehicleFullDetails?.serviceDataId?.list[
                            selectedServiceDate
                          ].kmForNextService
                        }
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Next service (date)</td>
                    <td>
                      <div className="p-1 font-semibold">
                        {editVehicleFullDetails?.serviceDataId?.list[
                          selectedServiceDate
                        ].dateForNextService.slice(0, 10)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </li>
        <li
          className=""
          key={1}
          onClick={(e) => {
            setselectedAccordionIndex(1);
          }}
        >
          <div>
            <div
              className="flex justify-between  bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold cursor-pointer"
              onClick={(e) => {
                setselectedAccordionIndex(1);
              }}
            >
              <p>Standard services checklist</p>
              {1 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {1 === selectedAccordionIndex && (
              <div className="m-1 p-2 border border-slate-300 rounded">
                <table className="table-fixed w-full">
                  <thead className="border-b border-slate-400">
                    <tr>
                      <th>Sl No</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Is Payable?</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editVehicleFullDetails?.serviceDataId?.list[
                      selectedServiceDate
                    ]?.StandardServicesCheckListId?.list.map((x) => (
                      <tr className="border-b border-slate-300">
                        <td></td>
                        <td>{x.title}</td>
                        <td>
                          <div className="text-xs italic">{x.description}</div>
                        </td>
                        <td>{x.isChecked ? <p>✅</p> : <p>🟠</p>}</td>
                        <td>{x.isAmountPayable ? <p>Yes</p> : <p>No</p>}</td>
                        <td>INR. {x.amount}.00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </li>
        <li
          className=""
          key={2}
          onClick={(e) => {
            setselectedAccordionIndex(2);
          }}
        >
          <div>
            <div className="flex justify-between bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold">
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
            setselectedAccordionIndex(3);
          }}
        >
          <div>
            <div className="flex justify-between bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold">
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
            setselectedAccordionIndex(4);
          }}
        >
          <div>
            <div className="flex justify-between bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold">
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
            setselectedAccordionIndex(5);
          }}
        >
          <div>
            <div className="flex justify-between bg-gradient-to-b from-blue-100 to-blue-200 p-2 rounded font-semibold">
              <p>Parts & accessories</p>
              {5 === selectedAccordionIndex ? <p>⬆️</p> : <p>⬇️</p>}
            </div>
            {5 === selectedAccordionIndex && (
              <div className="m-1 p-2 border border-slate-300 rounded">
                parst & contents
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EditVehicle_ServiceInfo_Accrdion;
