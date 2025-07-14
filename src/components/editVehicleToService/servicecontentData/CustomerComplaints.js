import { useSelector } from "react-redux";

const CustomerComplaints = () => {
  const selectedServiceDate = useSelector((store) => store.selectedServiceDate);
  const editVehicleFullDetails = useSelector(
    (store) => store.editVehicleFullDetails
  );
  return (
    <div className="relative border border-pink-400">
      <table className="w-full text-start">
        <thead className=" border-b border-slate-300">
          <th>S No.</th>
          <th>Title</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {editVehicleFullDetails?.serviceDataId?.list[
            selectedServiceDate
          ]?.customerComplaintsId?.list?.map((x, index) => (
            <tr>
              <td>
                <p className="p-2">{index + 1}</p>
              </td>
              <td>
                <p className="p-2">{x.title}</p>
              </td>
              <td>
                <p className="text-wrap w-72 my-2">{x?.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="absolute bottom-0 right-0 text-lg font-bold text-white border border-slate-700 rounded-full w-10 h-10 bg-blue-700 m-1">
        +
      </button>
    </div>
  );
};

export default CustomerComplaints;
