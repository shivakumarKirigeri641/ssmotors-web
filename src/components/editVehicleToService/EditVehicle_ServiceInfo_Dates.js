import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addserviceAccordionIndex } from "../../store/slices/serviceAccordionIndexSlice";
import { addselectedServiceDate } from "../../store/slices/selectedServiceDateSlice";
import ComboBox from "../customcomponents/ComboBox";
const EditVehicle_ServiceInfo_Dates = () => {
  const dispatch = useDispatch();
  const [openDates, setopenDates] = useState(false);
  const [selectedServiceDateIndex, setselectedServiceDateIndex] = useState(0);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  dispatch(addselectedServiceDate(selectedServiceDateIndex));
  dispatch(addserviceAccordionIndex(0));
  const handlecomboboxchange = (index, selecteditem) => {
    setselectedServiceDateIndex(index);
  };
  useEffect(() => {
    setselectedServiceDateIndex(0);
    dispatch(addselectedServiceDate(selectedServiceDateIndex));
  }, []);
  return (
    <div className="relative flex items-center w-full">
      <div className="flex md:hidden w-full">
        <p className="p-2 rounded-md font-semibold text-nowrap">
          Select service date:
        </p>
        <ComboBox
          list={editVehicleFullDetails?.serviceDataId?.list}
          onComboSelectionChange={handlecomboboxchange}
          defaultSelectedIndex={selectedServiceDateIndex}
        />
      </div>
      <div className="hidden md:block border w-full border-slate-200 h-full">
        <p className="p-2 bg-gradient-to-b from-gray-100 to-gray-300 text-center my-1">
          Service dates
        </p>
        <ul className="h-96 overflow-auto">
          {editVehicleFullDetails?.serviceDataId?.list.map((x, index) => (
            <li
              key={index}
              className={
                index === selectedServiceDateIndex
                  ? "text-nowrap p-2 mx-2 text-left bg-blue-400 rounded-md cursor-pointer"
                  : "text-nowrap p-2 mx-2 text-left bg-white hover:bg-blue-200 rounded-md cursor-pointer"
              }
              onClick={() => {
                setselectedServiceDateIndex(index);
              }}
            >
              <div>
                <p>🗓️ {x.dateOfVehicleEntry.slice(0, 10)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditVehicle_ServiceInfo_Dates;
