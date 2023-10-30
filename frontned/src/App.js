import React, { useEffect, useState } from "react";
import "./App.css";
import CreditScore from "./components/creditScore/CreditScore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import Home from "./components/Home/Home";
import CustomerLoginContext from "./context/CustomerLoginContext";
import CustomerReport from "./components/report/CustomerReport";
import Profile from "./components/profile/Profile.js";
import Products from "./components/products/Products";
import Apply from "./components/apply/Apply";
import Contact from "./components/Contact/Contact";
import About from "./components/about/About";
import FAQ from "./components/faq/FAQ";


function App() {
  const [jwtToken, setJwtToken] = useState(null);
  const [cID, setCID] = useState(0);
  const [customerScore, setCustomerScore] = useState(0);
  const [custName, setCustName] = useState("");
  const[userInfo, setUserInfo] = useState(null);
  const[inc, setInc] = useState(0);
  const[liab, setLiab] = useState(0);
  const[houseStatus, setHouseStatus] = useState("");
  const[empStatus, setEmpStatus] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const storedUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (storedUserInfo) {
        setJwtToken(token);
        setCID(storedUserInfo.id); // Assuming id is a property of storedUserInfo
        setCustName(storedUserInfo.firstName); // Assuming firstName is a property of storedUserInfo
        setUserInfo(storedUserInfo);
      }
    }
  }, []); 
  console.log(setJwtToken);
  return (
    <div className="App">
      <Router>
        <CustomerLoginContext.Provider
          value={{
            jwtToken,
            setJwtToken,
            cID,
            setCID,
            custName,
            setCustName,
            userInfo,
            setUserInfo,
            customerScore,
            setCustomerScore,
            inc,
            setInc,
            liab,
            setLiab,
            houseStatus,
            setHouseStatus,
            empStatus,
            setEmpStatus
          }}
        >
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Products />}></Route>
            <Route path="/report" element={<CustomerReport />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            {/* <Route path="/offer" element={<Products />}></Route> */}
            <Route path="/apply" element={<Apply />}></Route>
          </Routes>
        </CustomerLoginContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
