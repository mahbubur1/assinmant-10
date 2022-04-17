import Header from "./Components/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
