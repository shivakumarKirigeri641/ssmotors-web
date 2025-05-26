import React from "react";
import SSMotorsErrorMsg from "./SSMotorsErrorMsg";

const SSMotorsLogin = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-4 w-full md:w-[40%] mx-auto">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mx-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <legend className="fieldset-legend text-2xl text-center">Login</legend>
      </div>

      <label className="label">Email</label>
      <input
        type="email"
        className="input w-full outline-none"
        placeholder="Email"
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input w-full  outline-none"
        placeholder="Password"
      />

      <button className="btn btn-neutral mt-4">Login</button>
      <SSMotorsErrorMsg errorMsg="Invalid credentails" />
    </fieldset>
  );
};

export default SSMotorsLogin;
