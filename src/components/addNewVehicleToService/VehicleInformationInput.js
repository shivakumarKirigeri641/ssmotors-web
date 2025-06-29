import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";
import validateVehicleNumber from "../../utils/validateVehicleNumber";
const VehicleInformationInput = forwardRef((props, ref) => {
  const vehicleNumberRef = useRef();
  const vehicleVariantRef = useRef();
  const kmDrivenRef = useRef();
  const fuelPresentRef = useRef();
  const vehicleServiceInDateRef = useRef();
  const vehicleServiceOutDateRef = useRef();
  const isElectricRef = useRef();
  const [searchBrandModel, setsearchBrandModel] = useState("");
  const [isElectric, setisElectric] = useState(false);
  const [isvalidVehicleNumber, setisvalidVehicleNumber] = useState(false);
  const [fuelSlider, setfuelSlider] = useState(1);
  const [searchBrandModelfilter, setsearchBrandModelfilter] = useState("");
  const [showsuggessions, setshowsuggessions] = useState(false);
  const allvehicles = useSelector((store) => store.allVehicles);
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedOutDate, setSelectedOutDate] = useState(today);
  let filtervehicles = allvehicles?.filter((x) =>
    x?.toLowerCase().includes(searchBrandModelfilter.toLowerCase())
  );
  const handleisElectricChange = (e) => {
    setisElectric(e.target.checked);
  };
  useImperativeHandle(ref, () => ({
    vehicleInfo: {
      vehicleNumber: vehicleNumberRef.current.value,
      vehicleVariant: vehicleVariantRef.current.value,
      kmDriven: kmDrivenRef.current.value,
      fuelPresent: fuelPresentRef.current.value,
      isElectric: isElectricRef.current.value,
      vehicleServiceInDate: vehicleServiceInDateRef.current.value,
      vehicleServiceOutDate: vehicleServiceOutDateRef.current.value,
    },
  }));
  return (
    <div className="w-full">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold">
        Vehicle information
      </div>
      <div>
        {/**vehicle no */}
        <div className="relative flex justify-between items-center">
          <label className="w-48  text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>Vehicle
            number:
          </label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            ref={vehicleNumberRef}
            tabIndex={0}
            type="text"
            placeholder="enter the vehicle number"
            onChange={(e) => {
              setisvalidVehicleNumber(
                validateVehicleNumber(
                  vehicleNumberRef.current.value.toUpperCase()
                )
              );
            }}
          ></input>
          {!isvalidVehicleNumber && "" !== vehicleNumberRef.current.value && (
            <div className="absolute left-[35%] mt-1 -bottom-2 text-red-500 font-semibold italic">
              Invalid vehicle number!
            </div>
          )}
          {isvalidVehicleNumber && (
            <div className="absolute left-[35%] mt-1 -bottom-2 text-green-500 font-semibold italic">
              Vehicle number valid.
            </div>
          )}
        </div>
        {/**vehicle no */}
        {/**vehicle name */}
        <div className="flex justify-between items-center mt-3">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>
            Brand/Model
          </label>
          <div className="relative w-[75%]">
            <input
              className="border border-slate-300 w-[96%] p-2 mx-2 rounded-md outline-none cursor-pointer"
              value={searchBrandModel}
              required
              ref={vehicleVariantRef}
              placeholder="Click here to get brand/model"
              readOnly
              tabIndex={1}
              type="text"
              onClick={(e) => {
                setsearchBrandModel("");
                setsearchBrandModelfilter("");
                setshowsuggessions(!showsuggessions);
              }}
            ></input>
            {showsuggessions && (
              <div className="absolute left-[2%] w-[95%] p-2 bg-yellow-50 border border-slate-300 rounded-md">
                <div className="flex justify-between">
                  <div></div>
                  <button
                    className="text-lg text-red-500 font-bold"
                    onClick={() => {
                      setshowsuggessions(false);
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    className="w-full p-2 rounded-md border border-slate-200"
                    type="text"
                    required
                    value={searchBrandModelfilter}
                    placeholder="Search your vehicle here"
                    onChange={(e) => setsearchBrandModelfilter(e.target.value)}
                  ></input>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => setsearchBrandModelfilter("")}
                  >
                    <img
                      className="mx-2"
                      src={require("../../images/icons/cleartext.svg")}
                    ></img>
                  </div>
                </div>
                <ul className="text-sm h-40 overflow-auto ">
                  {filtervehicles?.map((x) => (
                    <li
                      className="p-2 cursor-pointer hover:italic hover:underline underline-offset-4"
                      onClick={() => {
                        setsearchBrandModel(x);
                        setshowsuggessions(false);
                      }}
                    >
                      <div className="flex">
                        <img
                          className="mx-2"
                          src={require("../../images/icons/bike.svg")}
                        ></img>
                        {x}
                      </div>
                    </li>
                  ))}
                </ul>
                {0 === filtervehicles?.length && (
                  <div className="text-red-500 font-bold text-center p-2">
                    Item not found!
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/**vehicle name */}
        {/**km driven */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>km driven:
          </label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            required
            tabIndex={2}
            ref={kmDrivenRef}
            placeholder="enter the km driven before service"
          ></input>
        </div>
        {/**km driven */}
        {/**fuel */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>fuel present:
          </label>
          <input
            className="border border-slate-300 w-[60%] m-2 p-2 rounded-md outline-none"
            type="range"
            onChange={(e) => setfuelSlider(e.target.value)}
            tabIndex={3}
            min={1}
            required
            max={100}
            ref={fuelPresentRef}
            value={fuelSlider}
            placeholder="enter the km driven before service"
          ></input>
          <div>{fuelSlider}%</div>
        </div>
        {/**fuel */}
        {/**vehicle service in */}
        <div className="flex justify-between items-center">
          <span className="text-red-600 px-1 font-bold">*</span>
          <label className="w-48 text-nowrap">Vehicle service in:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="date"
            disabled
            tabIndex={4}
            required
            ref={vehicleServiceInDateRef}
            value={selectedDate}
          ></input>
        </div>
        {/**vehicle service in */}
        {/**vehicle service out */}
        <div className="flex justify-between items-center">
          <span className="text-red-600 px-1 font-bold">*</span>
          <label className="w-48 text-nowrap">Vehicle service out:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="date"
            tabIndex={5}
            min={today}
            required
            ref={vehicleServiceOutDateRef}
            value={selectedDate}
            onChange={(e) => setSelectedOutDate(e.target.value)}
          ></input>
        </div>
        {/**vehicle service out */}
        {/**fuel */}
        <div className="flex justify-start items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>Is electric?
          </label>
          <input
            className="border border-slate-300 m-2"
            type="checkbox"
            ref={isElectricRef}
            checked={isElectric}
            onChange={handleisElectricChange}
            tabIndex={5}
          ></input>
        </div>
        {/**fuel */}
      </div>
    </div>
  );
});

export default VehicleInformationInput;
