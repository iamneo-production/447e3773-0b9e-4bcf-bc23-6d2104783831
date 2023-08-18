import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import "../css/nav.css";
import { getLoggedUser, setLoggedUser } from '../services/products-http.service';


function Logout() {
const navigate = useNavigate();
  useEffect(() => {
    setLoggedUser({}).then(response => {
        window.alert("user logged out");
        navigate('/',{replace:true})
    })
  }, []);
  return (
    <>
    </>
  );
}

export default Logout;
