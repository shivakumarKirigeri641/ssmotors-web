import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const admin = useSelector((store) => store.admin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
  });
  return (
    <div>
      <div
        className="h-screen large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src={require("../../images/wp2575889.webp")}
        uk-img="loading: eager"
      >
        <h1></h1>
      </div>
    </div>
  );
};

export default Dashboard;
