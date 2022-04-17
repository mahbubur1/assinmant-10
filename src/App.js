import Header from "./Components/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import NotFoundPage from "./Components/Shared/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div style={{
      backgroundColor:"#CAD5E2"
      }}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
