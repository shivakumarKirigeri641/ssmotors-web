import { Link, useNavigate } from "react-router";
import SSMotorsDrawer from "./SSMotorsDrawer";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../utils/constants";
import axios from "axios";

const SSMotorsNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admindata = useSelector((store) => store.ssMotorsadmin);
  const handleLogout = async () => {
    const result = await axios.post(
      SERVER + "/admin/logout",
      {},
      { withCredentials: true }
    );
  };
  return (
    <div className="navbar bg-base-200 shadow-sm static">
      <div className="hidden md:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start md:navbar-center flex">
        <img
          className="w-14 cursor-pointer"
          src={require("../../images/logo.jpg")}
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <Link
          to="/"
          className="hidden md:btn md:btn-ghost md:text-xl cursor-pointer"
        >
          SS Motors{" "}
          <span className="italic text-sm">
            {" "}
            - your 2wheeler with showroom look
          </span>
        </Link>
      </div>
      <div className="navbar-end tooltip">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        <Link to="/login" className="btn btn-ghost btn-circle">
          {!admindata ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={() => {
                handleLogout();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
              />
            </svg>
          )}
        </Link>
      </div>
    </div>
  );
};

export default SSMotorsNavBar;
