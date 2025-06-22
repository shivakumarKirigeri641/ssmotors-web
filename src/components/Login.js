import { Link } from "react-router";
import { SERVER } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("shiva@gmail.com");
  const [password, setpassword] = useState("Shiva@123");
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        SERVER + "/admin/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(result);
    } catch (err) {
      const popup = document.getElementById("errorPopup");
      popup.classList.remove("opacity-0");
      popup.classList.add("opacity-100");

      // Hide after 1 second
      setTimeout(() => {
        popup.classList.remove("opacity-100");
        popup.classList.add("opacity-0");
      }, 1200);

      return false; // Prevent form submission
    }
  };
  return (
    <div
      className="h-screen w-[100%] md:w-[30%]
    flex items-center justify-center bg-gradient-to-b from-[#585B56] to-[#333536]"
    >
      <div className=" bg-[#FEFEFE] h-[80%] w-[85%] rounded-[25] shadow-slate-700 shadow-lg">
        <div className="text-center p-5 text-2xl font-semibold">Login</div>
        <div className=" mx-auto w-[70%]">
          {/**input email */}
          <div className="m-2 mt-10">
            <input
              type="text"
              className="w-full border border-slate-400 rounded-[25] p-3 mx-auto m-1 outline-none text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          {/**input email */}
          {/**input password */}
          <div className="m-2 mt-3">
            <input
              type="password"
              className="w-full border border-gray-400 rounded-[25] p-3 mx-auto m-1 outline-none  text-black"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>
          {/**input password */}

          {/**login button */}
          <div className="mt-10 text-white font-bold text-center">
            <button
              className="p-3 border border-gray-500 rounded-md w-[40%] md:w-[50%]
          bg-gradient-to-b from-[#5D7676] to-[#789088] cursor-pointer hover:w-[60%] duration-200 ease-in-out"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
          {/**login button */}
          {/**forgot password */}
          <div className="mt-5 ml-2">
            <Link>
              <p className="font-semibold text-blue-700 italic cursor-pointer">
                Forgot Password?
              </p>
            </Link>
          </div>
          {/**forgot password */}
        </div>
        <div
          id="errorPopup"
          class="fixed top-5 right-5 bg-red-600 text-white text-xl px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-500"
        >
          ❌ Invalid credentials!
        </div>
      </div>
    </div>
  );
};

export default Login;
