import { useSelector } from "react-redux";
import constants, { ourserviceincludes, whychooseus } from "../utils/constants";
import SSMotorsAdminDashboard from "./SSMotorsAdminDashboard";

const SSMotorsHome = () => {
  const admindata = useSelector((store) => store.ssMotorsadmin);
  console.log("admin:", admindata);
  return admindata ? (
    <SSMotorsAdminDashboard />
  ) : (
    <div className="w-full md:w-[50%] mx-auto">
      {/**intro */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5 md:flex items-center">
        <img
          className="visible lg:hidden rounded-full w-40 h-40 mx-auto"
          src={require("../images/ssmotorsgarage.webp")}
        ></img>
        <div className="text-justify">
          <p className="text-xl m-5 font-bold">Welcome to SS Motors Garage</p>
          <p className="font-semibold m-5 italic">
            Your Trusted Partner in Vehicle Care
          </p>
          <p className="m-5 text-sm">
            At SS Motors Garage, we combine skilled craftsmanship with
            cutting-edge tools to give your vehicle the care it deserves.
            Whether it’s a routine service, an emergency repair, or a complete
            overhaul, we are committed to delivering excellence with every job.
          </p>
        </div>
        <img
          className="hidden lg:block rounded-full w-40 h-40"
          src={require("../images/ssmotorsgarage.webp")}
        ></img>
      </div>
      {/**intro */}
      {/**why choose us */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5 md:flex items-center md:justify-center">
        <img
          className="visible lg:hidden rounded-full w-40 h-40 mx-auto"
          src={require("../images/whychooseus.jpg")}
        ></img>
        <div>
          <p className="text-xl font-bold m-5">Why choose us?</p>
          <ul className="text-justify text-sm">
            {whychooseus.map((x) => (
              <li key={x} className="m-3">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <img
          className="hidden lg:block rounded-full w-40 h-40"
          src={require("../images/whychooseus.jpg")}
        ></img>
      </div>
      {/**why choose us */}
      {/**service we provide */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5 md:flex justify-between items-center">
        <img
          className="visible lg:hidden rounded-full w-40 h-40 mx-auto"
          src={require("../images/ourservices.jpg")}
        ></img>
        <div>
          <p className="text-xl font-bold m-5">Our services</p>
          <ul className="text-justify text-sm">
            {ourserviceincludes.map((x) => (
              <li key={x} className="m-3">
                ✅{x}
              </li>
            ))}
          </ul>
        </div>
        <img
          className="hidden lg:block rounded-full w-40 h-40"
          src={require("../images/ourservices.jpg")}
        ></img>
      </div>
      {/**service we provide */}
    </div>
  );
};

export default SSMotorsHome;
