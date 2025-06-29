import { useState } from "react";
import { useSelector } from "react-redux";
const VehicleInformationInput = () => {
  const [searchBrandModel, setsearchBrandModel] = useState("");
  const [searchBrandModelfilter, setsearchBrandModelfilter] = useState("");
  const [showsuggessions, setshowsuggessions] = useState(false);
  const allvehicles = useSelector((store) => store.allVehicles);
  let filtervehicles = allvehicles?.filter((x) =>
    x?.toLowerCase().includes(searchBrandModelfilter.toLowerCase())
  );
  return (
    <div className="w-full">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold">
        Vehicle information
      </div>
      <div>
        {/**vehicle no */}
        <div className="flex justify-between items-center">
          <label className="w-48  text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>Vehicle
            number:
          </label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            placeholder="enter the vehicle number"
          ></input>
        </div>
        {/**vehicle no */}
        {/**vehicle name */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">
            <span className="text-red-600 px-1 font-bold">*</span>
            Brand/Model
          </label>
          <div className="relative w-[70%]">
            <input
              className="border border-slate-300 w-[96%] p-2 mx-2 rounded-md outline-none cursor-pointer"
              value={searchBrandModel}
              placeholder="Click here to get brand/model"
              readOnly
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
            placeholder="enter the km driven before service"
          ></input>
        </div>
        {/**km driven */}
        {/**vehicle service in */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Vehicle service in:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            disabled
            value={new Date().toLocaleDateString()}
          ></input>
        </div>
        {/**vehicle service in */}
        {/**vehicle service out */}
        <div className="flex justify-between items-center">
          <label className="w-48 text-nowrap">Vehicle service out:</label>
          <input
            className="border border-slate-300 w-[70%] m-2 p-2 rounded-md outline-none"
            type="text"
            disabled
            value={new Date().toLocaleDateString()}
          ></input>
        </div>
        {/**vehicle service out */}
      </div>
    </div>
  );
};

export default VehicleInformationInput;
