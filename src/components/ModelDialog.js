import React, { useEffect, useState } from "react";

export default function ModalDialog({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // 🔑 Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description }); // pass data to parent
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              autoFocus
              value={title}
              placeholder="Enter the complaint title here"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded outline-none font-normal"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              value={description}
              placeholder="Enter the complaint description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded font-normal outline-none"
              rows="3"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
