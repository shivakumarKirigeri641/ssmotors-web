import React from "react";
import { useSelector } from "react-redux";

const PartsAndAccessories = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div>
      <div className="hidden md:block m-1 p-2 border border-slate-300 rounded">
        <table className="table-fixed w-full">
          <thead className="border-b border-slate-400">
            <tr>
              <th>Sl No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Payable?</th>
              <th>Unit price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Tax</th>
              <th>Grand total</th>
            </tr>
          </thead>
          <tbody>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ]?.partsAndAccessoriesId?.list.map((x) => (
              <tr className="border-b border-slate-300">
                <td></td>
                <td>{x.title}</td>
                <td>
                  <div className="text-xs italic">{x.description}</div>
                </td>
                <td>{x.isAmountPayable}</td>
                <td>{x.amount}</td>
                <td>{x.quantity}</td>
                <td>{x.quantity * x.amount}.00</td>
                <td>
                  {x.cGST}% / {x.sGST}%
                </td>
                <td>
                  <div className="font-bold underline underline-offset-2">
                    INR.{" "}
                    {x.amount * x.quantity +
                      ((x.cGST * x.amount * x.quantity) / 100 +
                        (x.sGST * x.amount * x.quantity) / 100)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden m-1 p-2 border border-slate-300 rounded">
        <table className="table-fixed w-full text-xs">
          <thead className="border-b border-slate-400">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Total</th>
              <th>Tax</th>
              <th>Grand total</th>
            </tr>
          </thead>
          <tbody>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ]?.partsAndAccessoriesId?.list.map((x) => (
              <tr className="border-b border-slate-300">
                <td>
                  <div className="text-sm">
                    <p className="font-semibold text-nowrap py-1">{x.title}</p>
                    <p className="text-xs italic">{x.description}</p>
                  </div>
                </td>
                <td className="text-center">{x.quantity}</td>
                <td>{x.amount}.00</td>
                <td>{x.quantity * x.amount}.00</td>
                <td>
                  {x.cGST}% / {x.sGST}%
                </td>
                <td>
                  <div className="font-bold underline underline-offset-2">
                    INR.{" "}
                    {x.amount * x.quantity +
                      ((x.cGST * x.amount * x.quantity) / 100 +
                        (x.sGST * x.amount * x.quantity) / 100)}
                  </div>
                </td>
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

export default PartsAndAccessories;
