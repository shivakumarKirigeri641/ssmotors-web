import React from "react";
import { useSelector } from "react-redux";

const StandardServices = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div>
      <div className="hidden md:block m-1 p-2 border border-slate-300 rounded text-xs">
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
      <div className="block md:hidden m-1 p-2 border border-slate-300 rounded text-xs">
        <table className="table-fixed w-full text-xs">
          <thead className="border-b border-slate-400">
            <tr>
              <th>Description</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ]?.StandardServicesCheckListId?.list.map((x) => (
              <tr className="border-b border-slate-300">
                <td>
                  <div className="text-sm">
                    <p className="font-semibold text-nowrap py-1">{x.title}</p>
                    <p className="text-xs italic">{x.description}</p>
                  </div>
                </td>
                <td>{x.isChecked ? <p>✅</p> : <p>🟠</p>}</td>
                <td>INR. {x.amount}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-around m-1 p-2">
        <button className="bg-blue-400 w-full p-2 m-1 rounded">Update</button>
        <button className="bg-red-400 w-full p-2 m-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default StandardServices;
