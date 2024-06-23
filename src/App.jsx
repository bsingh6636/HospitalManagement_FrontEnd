import React, { useContext, useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homes from './pages/Homes'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Componenets/Navbar'
import { Context } from './main'
import axios from 'axios'
const App = () => {
  const {isAutheticated, setIsAuthenticated,  setUser } =useContext(Context)
  useEffect(()=>{
    const fetchUser = async () =>{
      try {
        const response =await axios.get("http://192.168.29.36:1234/api/v1/user/patient/me",{withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user)
      } catch (error) {
        setIsAuthenticated(false)
        setUser({})
        console.error(error)
      }
    }
    fetchUser()
  },[isAutheticated])
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homes/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </Router>
    </>
  )
}

export default App