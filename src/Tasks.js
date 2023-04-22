import React from "react";
import axios from "axios";
import ModalFormEdit from "./ModalFormEdit";
const Tasks = ({ tasks, title, deleteData }) => {
  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <div className="home">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <div className="blog-preview" key={task.id}>
          <h2>
            {task.title} {task.id}
            <button onClick={() => handleDelete(task.id)} className="btn">
              Delete task
            </button>
            <ModalFormEdit />
          </h2>
          <p>{task.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
