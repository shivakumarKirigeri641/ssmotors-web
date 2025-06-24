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
              <div>
                <div
                  className={`fixed inset-0 bg-gray-400 bg-opacity-70 z-40}`}
                  onClick={() => setopendrawer(false)}
                ></div>
                <div
                  className={`fixed left-0 top-0 w-auto h-full px-5 text-white  bg-gradient-to-b from-[#495757] to-[#BABDC7] transform transition-transform duration-1000 ease-in-out z-50 shadow-lg ${
                    opendrawer ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <div className="flex justify-between">
                    <div></div>
                    <button
                      className="m-2 text-xl p-2 font-bold"
                      onClick={() => setopendrawer(false)}
                    >
                      &times;
                    </button>
                  </div>
                  <ul className="">
                    <li className="p-3 cursor-pointer hover:underline underline-offset-2">
                      <div className="flex justify-start items-center">
                        <img
                          className="mx-2"
                          src={require("../images/icons/servicingbike.svg")}
                        ></img>
                        <Link to="/admin/servicingvehicles">
                          Servicing vehicles
                        </Link>
                      </div>
                    </li>
                    <li className="p-3 cursor-pointer hover:underline underline-offset-2">
                      <div className="flex justify-start items-center">
                        <img
                          className="mx-2"
                          src={require("../images/icons/servicedbike.svg")}
                        ></img>
                        <Link to="/admin/servedvehicles">Served vehicles</Link>
                      </div>
                    </li>
                    <li className="p-3 cursor-pointer hover:underline underline-offset-2">
                      <div className="flex justify-start items-center">
                        <img
                          className="mx-2"
                          src={require("../images/icons/statistics.svg")}
                        ></img>
                        <Link to="/admin/statistics">Statistics</Link>
                      </div>
                    </li>
                    <li className="p-3 cursor-pointer hover:underline underline-offset-2">
                      <div className="flex justify-start items-center">
                        <img
                          className="mx-2"
                          src={require("../images/icons/profile.svg")}
                        ></img>
                        <Link to="/admin/profile">Profile</Link>
                      </div>
                    </li>
                    <li className="p-3 cursor-pointer hover:underline underline-offset-2">
                      <div className="flex justify-start items-center">
                        <img
                          className="mx-2"
                          src={require("../images/icons/settings.svg")}
                        ></img>
                        <Link to="/admin/settings">Settings</Link>
                      </div>
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
              className="w-14 mx-auto cursor-pointer"
              src={require("../images/logo.jpg")}
              onClick={() => {
                navigate("/admin/dashboard");
              }}
            ></img>
          </div>
          {/**logo */}
          {/**logout */}
          <div className="flex p-1 mx-1 items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex justify-between text-sm">
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <div className="flex justify-between items-center">
                    <img
                      className="mx-2"
                      src={require("../images/icons/servicingbike.svg")}
                    ></img>
                    <Link to="/admin/servicingvehicles">
                      Servicing vehicles
                    </Link>
                  </div>
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <div className="flex justify-between items-center">
                    <img
                      className="mx-2"
                      src={require("../images/icons/servicedbike.svg")}
                    ></img>
                    <Link to="/admin/servedvehicles">Served vehicles</Link>
                  </div>
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <div className="flex justify-between items-center">
                    <img
                      className="mx-2"
                      src={require("../images/icons/statistics.svg")}
                    ></img>
                    <Link to="/admin/statistics">Statistics</Link>
                  </div>
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <div className="flex justify-between items-center">
                    <img
                      className="mx-2"
                      src={require("../images/icons/profile.svg")}
                    ></img>
                    <Link to="/admin/profile">Profile</Link>
                  </div>
                </li>
                <li className="px-2 mx-2 cursor-pointer hover:underline underline-offset-2">
                  <div className="flex justify-between items-center">
                    <img
                      className="mx-2"
                      src={require("../images/icons/settings.svg")}
                    ></img>
                    <Link to="/admin/settings">Settings</Link>
                  </div>
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
              className="hidden md:block bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
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
