import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Sign/SignIn";
import SignUp from "./Components/Sign/SignUp";
import Home from "./Components/Home/Home";
import { useState } from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Footer/Contact";
import Career from "./Components/Career/Career";
// import Contact from './Components/Footer/Contact';

function App() {
  const [username, setUsername] = useState("");
  const handleLogin = (newUsername) => {
    setUsername(newUsername);
    console.log(username);
  };
  return (
    <>
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp handleLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

