import constants, { ourserviceincludes, whychooseus } from "../utils/constants";

const SSMotorsHome = () => {
  return (
    <div className="w-full md:w-[50%] mx-auto">
      {/**intro */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5">
        <p className="text-2xl m-5">Welcome to SS Motors Garage</p>
        <p className="text-xl m-5 italic">
          Your Trusted Partner in Vehicle Care
        </p>
        <p className="m-5">
          At SS Motors Garage, we combine skilled craftsmanship with
          cutting-edge tools to give your vehicle the care it deserves. Whether
          it’s a routine service, an emergency repair, or a complete overhaul,
          we are committed to delivering excellence with every job.
        </p>
      </div>
      {/**intro */}
      {/**why choose us */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5">
        <p className="text-2xl m-5">Why Choose Us?</p>
        <ul className="text-justify">
          {whychooseus.map((x) => (
            <li className="m-3">{x}</li>
          ))}
        </ul>
      </div>
      {/**why choose us */}
      {/**service we provide */}
      <div className="bg-[#2d3849] rounded-md shadow-2xl p-2 m-5">
        <p className="text-2xl m-5">Why Choose Us?</p>
        <ul className="text-justify">
          {ourserviceincludes.map((x) => (
            <li className="m-3">{x}</li>
          ))}
        </ul>
      </div>
      {/**service we provide */}
    </div>
  );
};

export default SSMotorsHome;
