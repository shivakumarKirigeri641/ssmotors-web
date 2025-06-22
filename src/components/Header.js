import { useState } from "react";
import { SERVER } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { removeAdmin } from "../store/slices/adminSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [opendrawer, setopendrawer] = useState(false);
  const admin = useSelector((store) => store.admin);
  const handleLogout = async () => {
    try {
      const result = await axios.post(
        SERVER + "/admin/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeAdmin());
      navigate("/");
    } catch (err) {
      console.log(err.message);
      const popup = document.getElementById("errorPopup");
      popup.classList.remove("opacity-0");
      popup.classList.add("opacity-100");

      // Hide after 1 second
      setTimeout(() => {
        popup.classList.remove("opacity-100");
        popup.classList.add("opacity-0");
      }, 3000);
      return false; // Prevent form submission
    }
  };
  return (
    admin && (
      <div className="fixed opacity-100 w-full border-b border-slate-300 shadow-gray-500 shadow-lg">
        <div className="relative flex justify-between items-center">
          {/**menu for mobile */}
          <div className="visible md:hidden mx-3">
            <img
              className="cursor-pointer hover:font-bold"
              src={require("../images/icons/menu.svg")}
              onClick={() => {
                setopendrawer(!opendrawer);
              }}
            ></img>
            {opendrawer && (
              <div className="absolute top-0 left-0 w-auto bg-gray-400 h-screen">
                <div className="">
                  <div
                    className="text-2xl text-black m-3 cursor-pointer text-right"
                    onClick={() => {
                      setopendrawer(!opendrawer);
                    }}
                  >
                    X
                  </div>
                  <ul>
                    <li className="py-3 mx-2 cursor-pointer hover:underline underline-offset-2">
                      <Link>Servicing vehicles</Link>
                    </li>
                    <li className="py-3 mx-3 cursor-pointer hover:underline underline-offset-2">
                      Served vehicles
                    </li>
                    <li className="py-3 mx-3 cursor-pointer hover:underline underline-offset-2">
                      Statistics
                    </li>
                    <li className="py-3 mx-3 cursor-pointer hover:underline underline-offset-2">
                      Profile
                    </li>
                    <li className="py-3 mx-3 cursor-pointer hover:underline underline-offset-2">
                      Settings
                    </li>
                    <li className="py-3 mx-3 cursor-pointer hover:underline underline-offset-2">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/**menu for mobile */}
          {/**logo */}
          <div>
            <img
              className="w-14 mx-auto"
              src={require("../images/logo.jpg")}
            ></img>
          </div>
          {/**logo */}
          {/**logout */}
          <div className="flex p-1 mx-1 items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex justify-between">
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <Link>Servicing vehicles</Link>
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  Served vehicles
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  Statistics
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  Profile
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  Settings
                </li>
              </ul>
            </div>
            <div
              className="visible md:hidden cursor-pointer"
              onClick={() => {
                handleLogout();
              }}
            >
              <img src={require("../images/icons/logout.svg")}></img>
            </div>
            <button
              className="hidden md:block bg-blue-700 text-white px-3 py-2 rounded-lg"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
          {/**logout */}
          <div
            id="errorPopup"
            className="absolute top-10 text-white font-bold text-center bg-red-500
          px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-500 w-[100%]"
          >
            Something went wrong!
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
