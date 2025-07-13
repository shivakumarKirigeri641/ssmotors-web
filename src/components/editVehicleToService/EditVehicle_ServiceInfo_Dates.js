import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addselectedServiceDate } from "../../store/slices/selectedServiceDateSlice";
const EditVehicle_ServiceInfo_Dates = () => {
  const dispatch = useDispatch();
  const [selectedServiceDateIndex, setselectedServiceDateIndex] = useState(0);

  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  dispatch(addselectedServiceDate(selectedServiceDateIndex));
  return (
    <div className="text-xs border-r border-slate-500 p-1 m-1">
      <p className="p-2 bg-blue-100 rounded-md font-semibold">Service date</p>
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
              dispatch(addselectedServiceDate(index));
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
  );
};

export default EditVehicle_ServiceInfo_Dates;
