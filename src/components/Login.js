import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div
      className="border border-slate-400 h-screen w-[100%] md:w-[35%] m-1
    flex items-center justify-center bg-gradient-to-r from-[#3da7a7] to-[#06686b]"
    >
      <div className=" bg-[#FEFEFE] border border-blue-600 h-[80%] w-[85%] rounded-[25]">
        <div className="text-center p-5 text-2xl font-semibold">Login</div>
        <div className="m-2">
          <input
            type="text"
            className="w-full border border-slate-400 rounded-full p-2 mx-auto m-1 outline-none text-gray-400"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="m-2">
          <input
            type="password"
            className="w-full border border-gray-400 rounded-full p-2 mx-auto m-1 outline-none  text-gray-400"
            placeholder="Enter the password"
          ></input>
        </div>
        <div className="m-3 text-white font-semibold">
          <button
            className="p-3 border border-gray-500 w-full mx-auto rounded-full 
          bg-gradient-to-b from-[#429af1] to-[#373999] hover:bg-gradient-to-t"
          >
            Login
          </button>
        </div>
        <div className="m-3 text-center">
          <Link>
            <p className="font-semibold text-blue-700 italic cursor-pointer">
              Forgot password?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
