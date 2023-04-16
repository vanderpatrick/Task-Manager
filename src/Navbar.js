import React from "react";
import ModalForm from "./ModalForm";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Patrick's Taskmanager</h1>
        <ModalForm />
      </nav>
    </div>
  );
};

export default Navbar;