import React from "react";
import { NavLink } from "react-router-dom";

const ReactLink = () => {
  return (
    <div>
      <NavLink to="/products/create" style={{ marginRight: "20px" }}>
        Create Products
      </NavLink>
      <NavLink to="/products" style={{ marginRight: "20px" }}>
        Products
      </NavLink>
      <NavLink to="/students/create" style={{ marginRight: "20px" }}>
        Create Students
      </NavLink>
      <NavLink to="/students" style={{ marginRight: "20px" }}>
        Students
      </NavLink>
    </div>
  );
};

export default ReactLink;