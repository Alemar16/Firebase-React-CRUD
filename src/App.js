import "./App.css";
//importamos los componentes
import Create from "./components/Create";
import Edit from "./components/Edit";
import Show from "./components/Show";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
