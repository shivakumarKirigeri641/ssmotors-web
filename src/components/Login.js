import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = () => {
    const popup = document.getElementById("errorPopup");
    popup.classList.remove("opacity-0");
    popup.classList.add("opacity-100");

    // Hide after 1 second
    setTimeout(() => {
      popup.classList.remove("opacity-100");
      popup.classList.add("opacity-0");
    }, 1000);

    return false; // Prevent form submission
  };
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
            onClick={() => {
              handleLogin();
            }}
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
        <div
          id="errorPopup"
          class="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-500"
        >
          ❌ Invalid credentials!
        </div>
      </div>
    </div>
  );
};

export default Login;
