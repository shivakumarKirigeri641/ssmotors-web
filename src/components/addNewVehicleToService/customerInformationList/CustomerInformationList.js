import CustomerName from "./CustomerName";
import CustomerPrimaryMobileNumber from "./CustomerPrimaryMobileNumber";
import CustomerSecondaryMobileNumber from "./CustomerSecondaryMobileNumber";
import CustomerEmail from "./CustomerEmail";
import CustomerAddress from "./CustomerAddress";

const CustomerInformationList = () => {
  return (
    <div className="w-full md:w-[50%] m-2 border border-slate-300 rounded-md shadow-lg">
      <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-2 font-semibold text-white">
        Customer information
      </div>
      <CustomerName />
      <CustomerPrimaryMobileNumber />
      <CustomerEmail />
      <CustomerAddress />
    </div>
  );
};

export default CustomerInformationList;
