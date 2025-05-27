import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeAdmin } from "../store/slices/ssMotorsadminSlices";
const SSMotorsLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeAdmin());
      navigate("/");
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div role="alert" className="alert alert-success">
      <span>
        You have logged out successfully. Redirecting to home page....
      </span>
    </div>
  );
};

export default SSMotorsLogout;
