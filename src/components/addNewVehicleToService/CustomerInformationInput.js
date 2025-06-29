import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CustomerInformationInput = forwardRef((props, ref) => {
  const customerNameRef = useRef();
  const customerMobileRef = useRef();
  const customerAltMobileRef = useRef();
  const customeremailRef = useRef();
  const customeraddressRef = useRef();
  useImperativeHandle(ref, () => ({
    customerInfo: {
      customerName: customerNameRef.current.value,
      customerMobile: customerMobileRef.current.value,
      customerAltMobile: customerAltMobileRef.current.value,
      customeremail: customeremailRef.current.value,
      customeraddress: customeraddressRef.current.value,
    },
  }));
  const [customerName, setcustomerName] = useState("");
  const [customerMobile, setcustomerMobile] = useState("");
  const [customerAltMobile, setcustomerAltMobile] = useState("");
  const [customeremail, setcustomeremail] = useState("");
  const [customeraddress, setcustomeraddress] = useState("");
  return (
    <div className="w-full">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold">
        Customer information
      </div>
      <div>
        {/**customer name */}
        <div className="flex justify-between items-center">
          <label className="w-48  text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>Customer name:
          </label>
          <input
            className={
              "" !== customerName
                ? "border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
                : "border border-red-500 w-[70%] m-2 p-2 rounded-md outline-none"
            }
            required
            type="text"
            value={customerName}
            ref={customerNameRef}
            onChange={(e) => {
              setcustomerName(e.target.value);
            }}
            placeholder="enter the customer name"
          ></input>
        </div>
        {/**customer name */}
        {/**mobile no */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>
            Mobile number
          </label>
          <input
            className={
              "" !== customerMobile
                ? "border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
                : "border border-red-500 w-[70%] m-2 p-2 rounded-md outline-none"
            }
            type="text"
            ref={customerMobileRef}
            value={customerMobile}
            onChange={(e) => {
              setcustomerMobile(e.target.value);
              setcustomerAltMobile(e.target.value);
            }}
            placeholder="enter the mobile number"
          ></input>
        </div>
        {/**mobile no */}
        {/**altmobile no */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">alt. mobile number</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            value={customerAltMobile}
            ref={customerAltMobileRef}
            onChange={(e) => {
              setcustomerAltMobile(e.target.value);
            }}
            placeholder="enter the alternate mobile number"
          ></input>
        </div>
        {/**mobile no */}
        {/**email */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Email:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="mail"
            ref={customeremailRef}
            value={customeremail}
            onChange={(e) => {
              setcustomeremail(e.target.value);
            }}
            placeholder="enter the email address"
          ></input>
        </div>
        {/**email */}
        {/**address */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Address:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            value={customeraddress}
            ref={customeraddressRef}
            onChange={(e) => {
              setcustomeraddress(e.target.value);
            }}
            placeholder="enter the residential address"
          ></input>
        </div>
        {/**address */}
      </div>
    </div>
  );
});

export default CustomerInformationInput;
