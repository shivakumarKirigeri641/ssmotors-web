import React, { useState } from "react";
import SSMotorsErrorMsg from "./SSMotorsErrorMsg";
import axios from "axios";
import { SERVER } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../store/slices/ssMotorsadminSlices";
import { useNavigate } from "react-router";
const SSMotorsLogin = () => {
  const [email, setemail] = useState("shiva@gmail.com");
  const [password, setpassword] = useState("Shiva@123");
  const [errorMsg, seterrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        SERVER + "/admin/login",
        { email, password },
        { withCredentials: true }
      );
      //console.log(result);
      dispatch(addAdmin(result?.data));
      navigate("/");
    } catch (err) {
      if (401 === err.status) {
        seterrorMsg("Invalid credentials!");
      }
    }
  };
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-4 w-full md:w-[40%] mx-auto">
      <div className="flex items-center justify-center">
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
        <legend className="fieldset-legend text-2xl text-center">Login</legend>
      </div>

      <label className="label">Email</label>
      <input
        type="email"
        className="input w-full outline-none"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input w-full  outline-none"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />

      <button
        className="btn btn-neutral mt-4"
        onClick={async () => {
          await handleLogin();
        }}
      >
        Login
      </button>
      {"" !== errorMsg ? <SSMotorsErrorMsg errorMsg={errorMsg} /> : ""}
    </fieldset>
  );
};

export default SSMotorsLogin;
