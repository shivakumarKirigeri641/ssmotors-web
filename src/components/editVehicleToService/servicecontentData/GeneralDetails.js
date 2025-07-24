import React from "react";
import { useSelector } from "react-redux";

const GeneralDetails = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div>
      <table className="table-fixed w-full  text-xs">
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
  );
};

export default GeneralDetails;
