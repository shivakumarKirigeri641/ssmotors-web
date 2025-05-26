import { BreakIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SSMotorsDrawer = () => {
  const [drawopen, setdrawopen] = useState(false);
  const handleClick = () => {
    setdrawopen(!drawopen);
    console.log(drawopen);
  };
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        onClick={() => {
          handleClick();
        }}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li></li>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SSMotorsDrawer;
