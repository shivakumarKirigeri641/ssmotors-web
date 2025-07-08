import { useSelector } from "react-redux";

const EditVehicle_VehicleInfo = () => {
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  console.log(editVehicleFullDetails);
  return (
    <div>
      <p>Vehicle information</p>
      <div className="flex justify-start items-center">
        <p>Vehicle number:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.vehicleNumber}
        </p>
      </div>
      <div className="flex justify-start items-center">
        <p>Vehicle name:</p>
        <p className="font-semibold px-2">
          {editVehicleFullDetails?.variantId?.variantName}
        </p>
      </div>
    </div>
  );
};

export default EditVehicle_VehicleInfo;
