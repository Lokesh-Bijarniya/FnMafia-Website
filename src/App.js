import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Components/Sign/SignIn';
import SignUp from './Components/Sign/SignUp';
import Home from './Components/Home/Home';
import { useState } from 'react';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
// import Contact from './Components/Footer/Contact';

function App() {
  const [username,setUsername] = useState('');
  const handleLogin = (newUsername)=>{
    setUsername(newUsername);
    console.log(username);
  }
  return (
    <>
      <Navbar username={username}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/blogs' element={<Blogs/>}/>
        {/* <Route path='/' element={<Team/>}/>*/}
        {/* <Route path='/footer' element={<Footer/>}/>  */}
        <Route path='/signin' element={<SignIn handleLogin={handleLogin}/>}/>
        <Route path='/signup' element={<SignUp handleLogin={handleLogin}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
