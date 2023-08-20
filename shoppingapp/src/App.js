import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistration from './components/user-registration.component';
import ProductDetails from "./components/productdetails";
import ProductList from "./components/productlist";
import UserLogin from "./components/user-login.component";
import { useState } from "react";
import Homepage from "./components/homepage";
import Logout from "./components/logout";
 

function App() {
const [currentUser,setCurrentUser] = useState(null);

 const setUser = (user) => {
  console.log(user);
  setCurrentUser(user);
 };
  return (
    <BrowserRouter>
     
      <Routes>
          <Route path="/" element= {<Homepage/>}/>
          <Route path ="productdetails/:id" element={<ProductDetails />}/>
          <Route path ="products" element={<ProductList />}/>
          <Route path ="products/:id" element={<ProductList />}/>
          <Route path ="logout" element={<Logout />}/>

          <Route path="register" element={<UserRegistration/>} />
          <Route path="login" element={ <UserLogin setcurrentUser={setUser}/>} />
      </Routes>
      
    </BrowserRouter>
     
      
    

  );
}

export default App;
