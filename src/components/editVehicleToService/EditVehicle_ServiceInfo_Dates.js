import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addselectedServiceDate } from "../../store/slices/selectedServiceDateSlice";
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
    <div className="relative">
      <p className="p-2 bg-blue-100 rounded-md font-semibold">
        Select service date:
      </p>
    </div>
  );
};

export default EditVehicle_ServiceInfo_Dates;
