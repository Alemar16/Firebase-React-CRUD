import "./App.css";
//importamos los componentes
import Create from "./components/Create";
import Edit from "./components/Edit";
import Show from "./components/Show";

function App() {
  return <div className="App">
    <h1>Hello World </h1>
    <button className="btn btn-primary">Crear</button>
    <Show />
  </div>;
}

export default App;
