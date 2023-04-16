import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import ModalForm from "./ModalForm";
function App() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
