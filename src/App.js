import Navbar from "./Navbar";
import Main from "./Main";
import axios from "axios";
function App() {
  const createTask = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/tasks', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Navbar createTask={createTask}/>
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
