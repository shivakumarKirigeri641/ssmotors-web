const validateNewVehicleMandatoryFields = (inputdatafields) => {
  if (
    "" === inputdatafields?.vehicleInfo?.vehicleNumber ||
    "" === inputdatafields?.vehicleInfo?.vehicleVariant ||
    "" === inputdatafields?.customerInfo?.customerName ||
    "" === inputdatafields?.customerInfo?.customerMobile
  )
    return false;
  return true;
};
export default validateNewVehicleMandatoryFields;
