const valiateEmail = (email) => {
  if ("" === email) {
    return true;
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
export default valiateEmail;
