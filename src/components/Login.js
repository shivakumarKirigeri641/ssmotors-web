import { Link, useNavigate } from "react-router";
import { SERVER } from "../utils/constants";
import { useState } from "react";
import { addAdmin } from "../store/slices/adminSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("shiva@gmail.com");
  const [password, setpassword] = useState("Shiva@123");
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        SERVER + "/admin/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addAdmin(result?.data?.data));
      navigate("/dashboard");
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
    <div
      className="h-screen w-[100%] md:w-[30%]
    flex items-center justify-center bg-gradient-to-b from-[#585B56] to-[#333536]"
    >
      <div className="relative bg-[#FEFEFE] h-[80%] w-[85%] rounded-[25] shadow-slate-700 shadow-lg">
        <div className="text-center p-5 text-2xl font-semibold mt-16">
          <img
            className="w-[30%] mx-auto mt-10"
            src={require("../images/logo.jpg")}
          ></img>
        </div>
        <div className="mx-auto w-[70%]">
          {/**input email */}
          <div className="relative m-2 mt-10">
            <img
              className="absolute top-[30%] left-3"
              src={require("../images/icons/user.svg")}
            ></img>
            <input
              type="text"
              className="pl-12 w-full border border-slate-400 rounded-[25] p-3 mx-auto m-1 outline-none text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          {/**input email */}
          {/**input password */}
          <div className="relative m-2 mt-3">
            <img
              className="absolute top-[30%] left-3"
              src={require("../images/icons/password.svg")}
            ></img>
            <input
              type="password"
              className="pl-12 w-full border border-gray-400 rounded-[25] p-3 mx-auto m-1 outline-none text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>
          {/**input password */}

          {/**login button */}
          <div className="mt-10 text-white font-bold text-center outline-none">
            <button
              className="p-3 border border-gray-500 rounded-md w-[40%] md:w-[50%]
          bg-[#2F5A6B] cursor-pointer hover:w-[60%] duration-200 ease-in-out"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
          {/**login button */}
          {/**forgot password */}
          <div className="mt-4 ml-2 text-center">
            <Link>
              <p className="font-semibold text-blue-700 cursor-pointer">
                Forgot Password?
              </p>
            </Link>
          </div>
          {/**forgot password */}
        </div>
        <div
          id="errorPopup"
          className="absolute top-10 text-white font-bold text-center bg-red-500
          px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-500 w-[100%]"
        >
          Invalid credentials!
        </div>
      </div>
    </div>
  );
};

export default Login;
