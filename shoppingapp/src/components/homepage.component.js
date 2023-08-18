import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import Navbar from './navbar.component';
import { getLoggedUser } from '../services/products-http.service';


function Homepage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getLoggedUser().then(response => setUser(response.data))
  }, []);
  return (
    <div className="homepage-container">
      <Navbar user={user}/>
    </div>

  );
}

export default Homepage;
