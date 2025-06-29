import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { SERVER } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addallVehicles } from "../../store/slices/allVehiclesSlice";
const AddNewVehicleToService = () => {
  const [searchBrandModel, setsearchBrandModel] = useState("");
  const [searchBrandModelfilter, setsearchBrandModelfilter] = useState("");
  const [showsuggessions, setshowsuggessions] = useState(false);
  const dispatch = useDispatch();
  const allvehicles = useSelector((store) => store.allVehicles);
  let filtervehicles = allvehicles?.filter((x) =>
    x?.toLowerCase().includes(searchBrandModelfilter.toLowerCase())
  );
  console.log(filtervehicles);
  useEffect(() => {
    const fetchbrandmodelvariants = async () => {
      const result = await axios.get(SERVER + "/allvehicles", {
        withCredentials: true,
      });
      dispatch(addallVehicles(result?.data?.data));
      console.log(result?.data?.data);
    };
    fetchbrandmodelvariants();
  }, []);
  return (
    <div className="relative h-screen border border-slate-50 md:mx-auto w-full md:w-[70%]">
      <div className="flex justify-between items-center m-2 p-2">
        <div className="w-full">
          <div className="p-2 bg-[#d1d8db] rounded-md font-semibold">
            Vehicle information
          </div>
          <div>
            {/**vehicle no */}
            <div className="flex justify-between items-center">
              <label className="w-[30%] text-nowrap">
                <span className="text-red-600 px-1 font-bold">*</span>Vehicle
                number:
              </label>
              <input
                className="border border-slate-300 w-full m-2 p-2 rounded-md outline-none"
                type="text"
                placeholder="enter the vehicle number"
              ></input>
            </div>
            {/**vehicle no */}
            {/**vehicle name */}
            <div className="flex justify-between items-center">
              <label className="w-[35%] text-nowrap">
                <span className="text-red-600 px-1 font-bold">*</span>
                Brand/Model
              </label>
              <div className="relative w-full">
                <input
                  className="border border-slate-300 w-[96%] p-2 mx-2 rounded-md outline-none cursor-pointer"
                  value={searchBrandModel}
                  placeholder="Click here to get brand/model/variant suggessions"
                  readOnly
                  type="text"
                  onClick={(e) => {
                    setsearchBrandModel("");
                    setshowsuggessions(!showsuggessions);
                  }}
                ></input>
                {showsuggessions && (
                  <div className="absolute left-[2%] w-full p-2 bg-yellow-50 border border-slate-300 rounded-md">
                    <div className="flex justify-between items-center">
                      <input
                        className="w-full p-2 rounded-md border border-slate-200"
                        type="text"
                        value={searchBrandModelfilter}
                        placeholder="Search your vehicle here"
                        onChange={(e) =>
                          setsearchBrandModelfilter(e.target.value)
                        }
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
          </div>
        </div>
        <div className="w-full">
          <div className="p-2 bg-[#d1d8db] rounded-md">
            Customer information
          </div>
          <div>data</div>
        </div>
      </div>
      <div>customer complaints</div>
    </div>
  );
};

export default AddNewVehicleToService;
