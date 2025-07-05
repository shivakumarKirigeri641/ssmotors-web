const validateVehicleNumber = (vehiclenumber) => {
  const vehiclenumberRegex =
    /\b([A-Z]{2}\d{2}[A-Z]{1,3}\d{1,4}|\d{2}BH\d{1,4}[A-Z]{1,2})\b/;
  const vehno = vehiclenumber.toUpperCase();
  return vehiclenumberRegex.test(vehno);
};
export default validateVehicleNumber;
