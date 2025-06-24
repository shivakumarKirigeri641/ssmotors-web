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
      <div className="h-screen">
        <h1>Hello {admin.email}...</h1>
        <h2>
          Welcome to SS Motors, garage management system - where your customer 2
          wheeler results brand NEW!
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
