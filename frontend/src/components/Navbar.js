import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const renderNavClass = (isActive) =>
    [
      "px-3 py-2 mx-2 rounded hover:bg-zinc-700",
      isActive ? "text-white" : "",
    ].join(" ");

  return (
    <nav className="flex justify-between p-4 bg-zinc-800 text-gray-400">
      <div class="items-center justify-between mx-auto">
        <NavLink
          to="/"
          exact
          className={({ isActive }) => renderNavClass(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          className={({ isActive }) => renderNavClass(isActive)}
        >
          About Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
