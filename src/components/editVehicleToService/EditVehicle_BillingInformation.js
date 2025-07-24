import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditVehicle_BillingInformation = () => {
  const [stdservicetotal, setstdservicetotal] = useState(0);
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  //call api to get bill details with full description
  return (
    <div className="w-full">
      <p className="p-2 bg-gradient-to-b from-gray-100 to-gray-300 text-center my-1">
        Billing/Payment
      </p>
      <div>
        <div className="text-xs">
          <div className="flex justify-between  bg-gradient-to-b from-gray-50 to-gray-100 p-2 rounded font-semibold cursor-pointer">
            <p>Standard service total:</p>
            <p>INR. {stdservicetotal}</p>
          </div>
          <ul>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ].StandardServicesCheckListId?.list?.map((x, index) => (
              <li key={index}>
                <div>{x.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs">
          <div className="flex justify-between  bg-gradient-to-b from-gray-50 to-gray-100 p-2 rounded font-semibold cursor-pointer">
            <p>Parts & accessories total:</p>
            <p>INR. {stdservicetotal}</p>
          </div>
          <ul>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ].StandardServicesCheckListId?.list?.map((x, index) => (
              <li key={index}>
                <div>{x.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg bg-green-800 text-white p-2 rounded font-bold text-center">
            Total service bill:xxxx
          </p>
          <p>payment type:</p>
          <p>payment due:</p>
          {/**if payment due is present? */}

          <p>payment status:</p>
          <p>paid on:</p>
        </div>
      </div>
    </div>
  );
};

export default EditVehicle_BillingInformation;
