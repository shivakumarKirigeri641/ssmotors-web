import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  console.log(editVehicleFullDetails);
  return (
    <div className="relative flex items-center">
      <p className="p-2 rounded-md font-semibold text-nowrap">
        Select service date:
      </p>
      <ComboBox />
    </div>
  );
};

export default EditVehicle_ServiceInfo_Dates;
