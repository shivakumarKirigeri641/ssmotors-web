import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditVehicle_BillingInformation = () => {
  const [stdservicetotal, setstdservicetotal] = useState(0);
  const [partsAndAcctotal, setpartsAndAcctotal] = useState(0);
  let result = 0;
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails);
  //call api to get bill details with full description
  useEffect(() => {
    setstdservicetotal(
      editVehicleFullDetails?.serviceDataId?.list[
        selectedServiceDate
      ]?.StandardServicesCheckListId?.list.reduce(
        (accumulator, currentValue) => {
          return (
            accumulator +
            (currentValue?.amount +
              (currentValue?.amount *
                (currentValue?.cGST + currentValue?.sGST) *
                currentValue?.quantity) /
                100)
          );
        },
        0
      )
    );
    setpartsAndAcctotal(
      editVehicleFullDetails?.serviceDataId?.list[
        selectedServiceDate
      ]?.partsAndAccessoriesId?.list
        ?.filter((x) => x !== null)
        .reduce((accumulator, currentValue) => {
          return (
            accumulator +
            (currentValue?.amount +
              (currentValue?.amount *
                (currentValue?.cGST + currentValue?.sGST) *
                currentValue?.quantity) /
                100)
          );
        }, 0)
    );
  }, [selectedServiceDate]);
  return (
    <div className="w-full">
      <p className="p-2 bg-gradient-to-b from-gray-100 to-gray-300 text-center my-1">
        Billing/Payment
      </p>
      <div>
        {/**standard service bill details */}
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
                <div className="flex justify-between px-8 py-0.5 my-1">
                  <div className="w-10">{index + 1}</div>
                  <div className="w-40 text-left">{x.title}</div>
                  <div>
                    INR. {x?.amount} +{x?.cGST}% (CTax) +{x?.sGST}% (sTax)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/**standard service bill details */}

        {/**parts & acc bill details */}
        <div className="text-xs">
          <div className="flex justify-between  bg-gradient-to-b from-gray-50 to-gray-100 p-2 rounded font-semibold cursor-pointer">
            <p>Parts & accessories total:</p>
            <p>INR. {partsAndAcctotal}</p>
          </div>
          <ul>
            {editVehicleFullDetails?.serviceDataId?.list[
              selectedServiceDate
            ].partsAndAccessoriesId?.list
              ?.filter((x) => x !== null)
              .map((x, index) => (
                <div className="flex justify-between px-8 py-0.5 my-1">
                  <div className="w-10">{index + 1}</div>
                  <div className="w-40 text-left">{x.title}</div>
                  <div>
                    INR. {x?.amount} +{x?.cGST}% (CTax) +{x?.sGST}% (sTax)
                  </div>
                </div>
              ))}
          </ul>
        </div>
        {/**parts & acc bill details */}
        <div>
          <p className="text-lg bg-green-800 text-white p-2 rounded text-center">
            <span className="text-lg">Total service bill:</span> INR.{" "}
            <span className="text-xl font-bold">
              {stdservicetotal + partsAndAcctotal}/-
            </span>
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
