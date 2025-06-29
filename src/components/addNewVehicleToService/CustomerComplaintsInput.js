import { useState } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import ModalDialog from "../ModelDialog";
const CustomerComplaintsInput = forwardRef((props, ref) => {
  const [customerComplaints, setcustomerComplaints] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errorMsg, seterrMsg] = useState("");
  const customerComplaintsRef = useRef();
  useImperativeHandle(ref, () => ({
    complaints: customerComplaints,
  }));
  const handleSave = (data) => {
    try {
      /*const result = customerComplaints.filter(
        (x) => x.title.toLowerCase() === data.title.toLowerCase()
      );
      if (result) {
        throw new Error("Complaint already registered!");
      }*/
      setFormData(data); // receive data from modal
      setShowModal(false);
      if ("" !== data.title && "" !== data.description) {
        const newItem = {
          title: data.title,
          description: data.description,
        };
        setcustomerComplaints((prev) => [...prev, newItem]);
      }
    } catch (err) {}
  };
  // Remove item by index
  const removeItem = (indexToRemove) => {
    setcustomerComplaints((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <div className="m-2 p-2 rounded-md">
      <div className="p-2 bg-[#d1d8db] rounded-md font-semibold text-center flex justify-between">
        <p>Customer complaints</p>
        <button>
          <img
            src={require("../../images/icons/add.svg")}
            onClick={() => setShowModal(true)}
          ></img>
        </button>

        {showModal && (
          <ModalDialog
            onClose={() => setShowModal(false)}
            onSave={handleSave}
          />
        )}
      </div>
      {0 < customerComplaints.length && (
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
          <ul ref={customerComplaintsRef}>
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
      )}
      {0 === customerComplaints.length && (
        <div className="text-xs md:text-sm  p-2 text-blue-500 font-semibold text-center">
          No customer complaints recorded, Click on '+' to add the customer
          complaints
        </div>
      )}
      {"" !== errorMsg && (
        <div
          class="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg"
          role="alert"
        >
          ❌ Error! Complaint already registerd!.
        </div>
      )}
    </div>
  );
});

export default CustomerComplaintsInput;
