const validateMobileNumber = (mobilenumber) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(mobilenumber);
};
export default validateMobileNumber;
