import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios
      .get("http://192.168.29.36:1234/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.message);
      });
  };
  const gotoLogin = async () => {
    navigate("/login")
  };
  console.log(isAuthenticated,"isAutehntiacated")
  return (
    <nav className="container">
      <div className="logo">SinghCare</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/about">About</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            Login{" "}
          </button>
        )}
      </div>
      <div className="hamburger cursor-pointer" onClick={()=>setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
