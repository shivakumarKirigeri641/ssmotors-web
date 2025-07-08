import { useSelector } from "react-redux";

const EditVehicle_VehicleInfo = () => {
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails);
  return (
    <div className="w-full md:w-[50%] my-2">
      <div className="p-2 text-lg font-semibold bg-gradient-to-b from-slate-200 to-slate-300 w-full rounded-md">
        <p>Vehicle information</p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Vehicle number:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.vehicleNumber}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Vehicle name:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.variantId?.variantName}
        </p>
      </div>
      <div className="flex justify-start items-start m-2">
        <p className="w-[30%] text-nowrap">Fuel type:</p>
        {editVehicleFullDetails?.isElectric ? (
          <p className="font-semibold px-2">Electric</p>
        ) : (
          <p className="font-semibold px-2">Petrol</p>
        )}
      </div>
    </div>
  );
};

export default EditVehicle_VehicleInfo;
