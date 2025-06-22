import axios from "axios";
import { SERVER } from "../utils/constants";
import Login from "./Login";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../store/slices/adminSlice";
import { useNavigate } from "react-router";
const Credentials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("shiva@gmail.com");
  const [password, setpassword] = useState("Shiva@123");
  const handleLogin = async () => {
    const result = await axios.post(
      SERVER + "/admin/login",
      { email, password },
      { withCredentials: true }
    );
    console.log(result);
    dispatch(addAdmin(result?.data?.data));
    navigate("/dashboard");
  };
  return (
    <div className="flex">
      <div className="relative aspect-[16:9] w-[0%] md:w-[65%] h-screen opacity-75">
        <img
          src={require("../images/loginimage.jpg")}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      <Login />
    </div>
  );
};
export default Credentials;
