import React, { useState } from "react";
import { useSelector } from "react-redux";

const ComboBox = ({ list, onComboSelectionChange, defaultSelectedIndex }) => {
  const [canShowDropDown, setcanShowDropDown] = useState(false);
  const [selectedServiceDateIndex, setselectedServiceDateIndex] =
    useState(defaultSelectedIndex);
  return (
    <div
      className="relative border border-gray-300 w-full text-nowrap 
      m-0.5 rounded-md"
    >
      <button
        className="w-full"
        onClick={() => {
          setcanShowDropDown(!canShowDropDown);
        }}
      >
        <div className="flex justify-between p-2 shadow-lg">
          <p>
            {list[selectedServiceDateIndex].dateOfVehicleEntry.slice(0, 10)}
          </p>
          <p>⬇️</p>
          {canShowDropDown && (
            <div
              className="fixed w-screen h-screen inset-0 z-10 "
              onClick={() => {
                setcanShowDropDown(false);
              }}
            ></div>
          )}
          {canShowDropDown && (
            <ul
              className="absolute w-full h-40 overflow-auto left-0 p-1
             top-10 text-left border border-slate-400 rounded-md z-40 bg-slate-100"
            >
              {list.map((x, index) => (
                <li
                  key={x.dateOfVehicleEntry}
                  className="p-2 border-b border-gray-400 hover:bg-blue-300"
                  onClick={() => {
                    setselectedServiceDateIndex(index);
                    onComboSelectionChange(
                      index,
                      x.dateOfVehicleEntry.slice(0, 10)
                    );
                    selectedindex = index;
                    setcanShowDropDown(false);
                  }}
                >
                  🗓️ {x.dateOfVehicleEntry.slice(0, 10)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </div>
  );
};

export default ComboBox;
