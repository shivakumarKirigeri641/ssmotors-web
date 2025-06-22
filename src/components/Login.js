import axios from "axios";
import { SERVER } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../store/slices/adminSlice";
import { useNavigate } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setloginemail] = useState("shiva@gmail.com");
  const [password, setloginpassword] = useState("Shiva@123");
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
    <div>
      <p>login</p>
    </div>
  );
};
export default Login;
