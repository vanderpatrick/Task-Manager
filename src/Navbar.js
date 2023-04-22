import React from "react";
import ModalForm from "./ModalForm";
const Navbar = ({createTask}) => {
  return (
    <div>
      <nav className="navbar">
        <h1>Patrick's Taskmanager</h1>
        <ModalForm createTask={createTask}/>
      </nav>
    </div>
  );
};

export default Navbar;