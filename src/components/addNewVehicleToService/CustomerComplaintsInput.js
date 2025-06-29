import { useState } from "react";
import ModalDialog from "../ModelDialog";
const CustomerComplaintsInput = () => {
  const [customerComplaints, setcustomerComplaints] = useState([
    { title: "sample title", description: "this is sample descripion" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    setFormData(data); // receive data from modal
    setShowModal(false);
    console.log("Received from modal:", data);
    const newItem = {
      title: data.title,
      description: data.description,
    };
    setcustomerComplaints((prev) => [...prev, newItem]);
  };
  // Remove item by index
  const removeItem = (indexToRemove) => {
    setcustomerComplaints((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <div className="border border-slate-300 m-2 p-2 rounded-md">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold text-center flex justify-between">
        <p>Customer complaints</p>
        <button>
          <img
            src={require("../../images/icons/add.svg")}
            onClick={() => setShowModal(true)}
          ></img>
        </button>
        {formData && (
          <div className="hidden mt-4">
            <p>
              <strong>Title:</strong> {formData.title}
            </p>
            <p>
              <strong>Description:</strong> {formData.description}
            </p>
          </div>
        )}
        {showModal && (
          <ModalDialog
            onClose={() => setShowModal(false)}
            onSave={handleSave}
          />
        )}
      </div>
      <div className="italic">
        <div className="flex justify-between items-start border-b border-slate-400 m-2 py-1 bg-slate-200 rounded-full px-2">
          <p className="w-[15%] font-semibold underline-offset-2">
            Complaint number
          </p>
          <p className="w-[15%] font-semibold underline-offset-2">Title</p>
          <p className="w-[60%] font-semibold underline-offset-2">
            Description
          </p>
          <p className="w-[10%] font-semibold underline-offset-2">
            Edit option
          </p>
          <p className="w-[10%] font-semibold underline-offset-2">
            Delete option
          </p>
        </div>
        <ul>
          {customerComplaints.map((x, index) => (
            <div className="flex justify-between items-start border-b border-slate-200 m-2 py-1">
              <li className="w-[15%]">{index + 1}</li>
              <li className="w-[15%]">{x.title}</li>
              <li className="w-[60%] text-left">{x.description}</li>
              <li className="w-[10%]">
                <button>Edit</button>
              </li>
              <li className="w-[10%]">
                <button
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerComplaintsInput;
