import { useState } from "react";
import {
  addNewVehicleDetails_vehicleVariant,
  removeNewVehicleDetails_vehicleVariant,
} from "../../../store/slices/newVehicleDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

const VehicleVariaint = () => {
  const variant = useSelector(
    (store) => store.newVehicleDetails?.vehicleVariant
  );
  console.log(variant);
  const dispatch = useDispatch();
  const [errorMsgStatus, seterrorMsgStatus] = useState(false);
  const [canShowSuggesssions, setcanShowSuggesssions] = useState(false);
  const [searchTextOrg, setsearchTextOrg] = useState("");
  const [searchText, setsearchText] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState("");
  const variantlist = useSelector((store) => store.allVehicles);
  let filtervariantlist = variantlist?.filter((x) =>
    x?.variantName.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="w-full p-2 pb-3 text-gray-700">
      <div>Brand/Model</div>
      <div className="flex justify-between">
        <div className="relative w-full outline-none">
          <input
            className={
              errorMsgStatus
                ? "w-full p-2 border border-red-700 rounded-md outline-none cursor-pointer "
                : "w-full p-2 border border-slate-300 rounded-md outline-none cursor-pointer "
            }
            value={searchTextOrg}
            onFocus={() => {
              setcanShowSuggesssions(true);
              setsearchTextOrg("");
              setsearchText("");
              seterrorMsgStatus(false);
              if ("" === searchTextOrg) {
                setshowErrorMsg("Please select the Brand/model");
                seterrorMsgStatus(true);
                dispatch(removeNewVehicleDetails_vehicleVariant());
              }
            }}
            placeholder="Select Brand/Model/Variant"
            onClick={() => {
              setcanShowSuggesssions(true);
              setsearchTextOrg("");
              seterrorMsgStatus(false);
              if ("" === searchTextOrg) {
                setshowErrorMsg("Please select the Brand/model");
                seterrorMsgStatus(true);
                dispatch(removeNewVehicleDetails_vehicleVariant());
              }
            }}
            readOnly
          ></input>
          {/**overlay */}
          {canShowSuggesssions && (
            <div
              className="fixed inset-0 bg-slate-300 m-2 opacity-30 z-10"
              onClick={() => {
                setcanShowSuggesssions(false);
                seterrorMsgStatus(false);
                if ("" === searchTextOrg) {
                  setshowErrorMsg("Please select the Brand/model");
                  seterrorMsgStatus(true);
                  dispatch(removeNewVehicleDetails_vehicleVariant());
                }
              }}
            ></div>
          )}
          {/**overlay */}
          {canShowSuggesssions && (
            <div className="absolute w-full bg-[#c6e1ee] z-20 border border-slate-400 my-1 rounded-md text-sm">
              <div>
                <p className="bg-cyan-300 p-2 italic">
                  Search your bike here...
                </p>
                <input
                  className="w-[100%] p-1 bg-slate-100 rounded-md outline-none py-2"
                  placeholder="Hero Splendor+"
                  autoFocus
                  value={searchText}
                  onChange={(e) => {
                    setsearchText(e.target.value);
                  }}
                ></input>
              </div>
              <ul className=" h-96 md:h-52 overflow-auto ">
                {filtervariantlist?.map((x) => (
                  <li
                    key={x?._id}
                    className="p-2 border-b border-gray-400 hover:italic hover:underline underline-offset-2 cursor-pointer"
                    onClick={() => {
                      setsearchTextOrg(x?.variantName);
                      setcanShowSuggesssions(false);
                      seterrorMsgStatus(false);
                      setshowErrorMsg("");
                      dispatch(addNewVehicleDetails_vehicleVariant(x?._id));
                    }}
                  >
                    <div className="flex justify-start items-center">
                      <img
                        className="mx-2"
                        src={require("../../../images/icons/bike.svg")}
                      ></img>
                      {x?.variantName}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <p className="text-red-600 text-lg px-1">*</p>
      </div>
      {errorMsgStatus && (
        <p className="text-xs italic font-bold text-red-600">{showErrorMsg}</p>
      )}
    </div>
  );
};

export default VehicleVariaint;
