import axios from "axios";
import { SERVER } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../store/slices/adminSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setloginemail] = useState("shiva@gmail.com");
  const [password, setloginpassword] = useState("Shiva@123");
  const handleLogin = async () => {
    const result = await axios(
      SERVER + "/admin/login",
      { email, password },
      { withCredentials: true }
    );
    console.log(result);
    dispatch(addAdmin(result?.data?.data));
  };
  return (
    <div>
      <div
        className="h-screen large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src={require("../images/wp2575889.webp")}
        uk-img="loading: eager"
      >
        <h1></h1>
      </div>

      <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" uk-close="true">
            X
          </button>

          <h3>Login to continue</h3>

          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                autoFocus={true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setloginemail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setloginpassword(e.target.value)}
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600
                   dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
              onClick={() => {
                handleLogin();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
