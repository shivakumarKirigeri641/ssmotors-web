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
    <div className="navbar bg-base-200 shadow-sm">
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
        <Link
          to={!admindata ? "/login" : "/logout"}
          className="btn btn-ghost btn-circle mx-8"
        >
          {!admindata ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-key-round-icon lucide-key-round"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>
          ) : (
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p className="text-sm font-semibold">Logout</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default SSMotorsNavBar;
