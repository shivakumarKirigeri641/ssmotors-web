import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditVehicle_ServiceInfo = () => {
  const [selectedServiceDateIndex, setselectedServiceDateIndex] = useState(0);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="w-full">
      <div className="p-2 text-lg font-semibold bg-gradient-to-b from-slate-200 to-slate-300 w-full rounded-md">
        <p>service details</p>
      </div>
      <div className="md:flex justify-between">
        {/**dates */}
        <div className="text-xs border-r border-slate-500">
          <p className="p-2 bg-blue-100 rounded-md font-semibold">
            Service date
          </p>
          <ul className="h-96 overflow-auto m-2 p-2 w-auto">
            {editVehicleFullDetails?.serviceDataId?.list.map((x, index) => (
              <li
                key={x?.dateOfVehicleEntry}
                className={
                  selectedServiceDateIndex === index
                    ? "p-2 mx-1 hover:underline underline-offset-2 cursor-pointer text-nowrap bg-blue-400"
                    : "p-2 mx-1 hover:underline underline-offset-2 cursor-pointer text-nowrap"
                }
                onClick={() => {
                  setselectedServiceDateIndex(index);
                }}
              >
                {" "}
                {0 === index ? (
                  <p>
                    🗓️{x?.dateOfVehicleEntry.slice(0, 10)}{" "}
                    <span className="italic">latest</span>
                  </p>
                ) : index ===
                  editVehicleFullDetails?.serviceDataId?.list.length - 1 ? (
                  <p>
                    🗓️{x?.dateOfVehicleEntry.slice(0, 10)}{" "}
                    <span className="italic">oldest</span>
                  </p>
                ) : (
                  <p>🗓️{x?.dateOfVehicleEntry.slice(0, 10)}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/**dates */}

        {/**content */}
        <div>
          <p>tab content not available</p>
        </div>
        {/**content */}
        <div>bills</div>
      </div>
    </div>
  );
};

export default EditVehicle_ServiceInfo;
