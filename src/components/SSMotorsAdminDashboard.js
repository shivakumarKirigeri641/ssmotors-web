import { useNavigate } from "react-router";
const SSMotorsAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>admin SSMotorsAdminDashbaord</p>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigate("/logout");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default SSMotorsAdminDashboard;
