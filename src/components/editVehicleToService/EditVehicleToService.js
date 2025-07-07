import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { SERVER } from "../../utils/constants";
const EditVehicleToService = () => {
  const vehiclenumber = useParams();
  useEffect(() => {
    const fetchSelectedVehicleDetails = async () => {
      const result = await axios.get(
        SERVER +
          "/admin/edit/editvehicleservice/" +
          vehiclenumber?.vehiclenumber,
        { withCredentials: true }
      );
      console.log(result?.data?.data);
    };
    fetchSelectedVehicleDetails();
  }, []);
  console.log(vehiclenumber);
  return (
    <div>
      <p>{vehiclenumber?.vehiclenumber}</p>
    </div>
  );
};
export default EditVehicleToService;
