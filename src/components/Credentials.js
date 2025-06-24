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
    navigate("/admin/dashboard");
  };
  return (
    <div className="flex">
      <div className="aspect-[16:9] w-[0%] md:w-[70%] h-screen opacity-90">
        <img
          src={require("../images/loginimage.jpg")}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <Login />
    </div>
  );
};
export default Credentials;
