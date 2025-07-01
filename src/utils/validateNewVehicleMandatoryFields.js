import validateVehicleNumber from "./validateVehicleNumber";

const validateNewVehicleMandatoryFields = (inputdatafields) => {
  if (
    "" === inputdatafields?.vehicleInfo?.vehicleNumber ||
    "" === inputdatafields?.vehicleInfo?.vehicleVariant ||
    "" === inputdatafields?.customerInfo?.customerName ||
    "" === inputdatafields?.customerInfo?.customerMobile
  )
    return "Mandatory fields need to be filled!";
  if (10 !== inputdatafields?.customerInfo?.customerMobile.length) {
    return "Invalid mobile number!";
  }
  if (!validateVehicleNumber(inputdatafields?.vehicleInfo?.vehicleNumber)) {
    return "Invalid vehicle number!";
  }
  return "";
};
export default validateNewVehicleMandatoryFields;
