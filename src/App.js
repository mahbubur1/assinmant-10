import Header from "./Components/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
