import React from "react";
import { useSelector } from "react-redux";

const PartsAndAccessories = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails);
  return (
    <div className="border border-slate-300 ">
      <div className="hidden md:block m-1 p-2 borderrounded text-xs">
        <ul>
          {editVehicleFullDetails?.serviceDataId?.list[
            selectedServiceDate
          ]?.partsAndAccessoriesId?.list
            .filter((y) => y !== null)
            .map((x, index) => (
              <li key={index}>
                <div className="flex">
                  <div className="border-b border-slate-400 flex justify-between w-full">
                    <p className="text-xs p-1.5 font-semibold w-[4%]">
                      {index + 1}
                    </p>
                    <p className="text-xs p-1.5 font-semibold w-[10%]">
                      {x.title}
                    </p>
                    <p className="text-xs p-1.5 italic text-left w-[65%]">
                      {x.description}
                    </p>
                    <div className="text-xm p-1.5 font-bold text-blue-700 w-[25%]">
                      Item bill: {x.amount}
                      <span className="px-2">X</span>
                      {x.quantity}
                      <span className="px-2">+</span>
                      (tax {x.cGST}%) ={" "}
                      <span className="px-2 text-[100%] font-bold text-green-700 underline underline-offset-2">
                        {" "}
                        INR.{" "}
                        {x.quantity * x.amount +
                          (x.quantity * x.amount * (x.cGST + x.cGST)) / 100}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-lg">
                    <button className="mx-2">📝</button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-end text-lg ">
          <button className="bg-green-400 rounded-full p-2">➕</button>
        </div>
      </div>
      <div className="block md:hidden m-1 p-2 rounded">
        <ul>
          {editVehicleFullDetails?.serviceDataId?.list[
            selectedServiceDate
          ]?.partsAndAccessoriesId?.list
            .filter((x) => x !== null)
            .map((x, index) => (
              <li key={index}>
                <div className="flex justify-between w-full items-center">
                  <div className="flex text-lg">
                    <button className="mx-2">📝</button>
                  </div>
                  <div className="border-b border-slate-400 w-full">
                    <p className="text-xs p-1.5 font-semibold">{x.title}</p>
                    <p className="text-xs p-1.5 italic">{x.description}</p>
                    <div className="text-xm p-1.5 font-bold text-blue-700">
                      Item bill: {x.amount}
                      <span className="px-2">X</span>
                      {x.quantity}
                      <span className="px-2">+</span>
                      (tax {x.cGST}%) ={" "}
                      <span className="px-2 text-[100%] font-bold text-green-700 underline underline-offset-2">
                        {" "}
                        INR.{" "}
                        {x.quantity * x.amount +
                          (x.quantity * x.amount * (x.cGST + x.sGST)) / 100}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-end text-lg ">
          <button className="bg-green-400 rounded-full p-2 my-1">➕</button>
        </div>
      </div>
    </div>
  );
};

export default PartsAndAccessories;
