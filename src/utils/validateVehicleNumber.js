const validateVehicleNumber = (vehiclenumber) => {
  const vehiclenumberRegex1 = /^[A-Z]{2}[0-9]{2}[A-HJ-NP-Z]{1,2}[0-9]{4}$/;
  const vehiclenumberRegex2 = /^[0-9]{2}BH[0-9]{4}[A-HJ-NP-Z]{1,2}$/;
  const vehno = vehiclenumber.toUpperCase();
  return vehiclenumberRegex1.test(vehno) || vehiclenumberRegex2.test(vehno);
};
export default validateVehicleNumber;
