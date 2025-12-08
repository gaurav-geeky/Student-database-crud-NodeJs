
import React from "react";
import { NavLink } from "react-router-dom";

const MenuLinks = ({ onClick, itemClasses }) => {
  return (
    <>
      <NavLink onClick={onClick} className={itemClasses} to="/stu-dash">
        🏠 Home
      </NavLink>

      <NavLink onClick={onClick} className={itemClasses} to="about">
        ℹ️ About
      </NavLink>

      <NavLink onClick={onClick} className={itemClasses} to="form">
        📝 Form
      </NavLink>

      <NavLink onClick={onClick} className={itemClasses} to="display">
        📋 Display
      </NavLink>

      <NavLink onClick={onClick} className={itemClasses} to="search">
        🔍 Search
      </NavLink>

      <NavLink onClick={onClick} className={itemClasses} to="update">
        🛠️ Update
      </NavLink>
    </>
  );
};

export default MenuLinks;
