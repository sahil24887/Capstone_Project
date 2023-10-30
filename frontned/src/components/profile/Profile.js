import React, { useState, useEffect, useContext } from "react";
import CustomerLoginContext from "../../context/CustomerLoginContext";
import "./profile.css";
import axios from "axios";
import Swal from 'sweetalert2';

const Profile = () => {
  const showSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Done!',
      text: 'Details successfully updated.',
    });
  };
  const {
    setCustomerScore
  } = useContext(CustomerLoginContext);
  const [formData, setFormData] = useState({
    id: "",
    liabilty: "",
    income: "",
    houseStatus: "",
    empStatus: "",
  });

  useEffect(() => {
    try {
      const storedUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      setFormData({
        id: storedUserInfo.id,
        liabilty: storedUserInfo.liabilty,
        income: storedUserInfo.income,
        houseStatus: storedUserInfo.houseStatus,
        empStatus: storedUserInfo.empStatus,
      });

    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Handle the error, e.g., set default values for formData or show an error message to the user
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Parse income and liability as numbers, leave other fields as strings
    const parsedValue =
      name === "income" || name === "liabilty" ? parseFloat(value) : value;
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8096/rapi/v1/updatereg/${formData.id}`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });      
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.text();
      console.log("API Response:", data);
      showSweetAlert();
  
      const creditScoreResponse = await axios.get(`http://localhost:8096/creditscore/api/customer/${formData.id}`);
      const creditScoreData = creditScoreResponse.data;
      setCustomerScore(creditScoreData);
  
      const newUserObj = JSON.parse(sessionStorage.getItem("userInfo"));
      const newUserInfo = {
        ...newUserObj,
        liabilty: formData.liabilty,
        income: formData.income,
        houseStatus: formData.houseStatus,
        empStatus: formData.empStatus,
      };
      sessionStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show an alert or any appropriate action
    }
  };
  

  return (
    <div className="update-profile">
      <div className="profile-form">
        <h2>Update your Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="liabilty">Liability:</label>
            <input
              type="number" // Set input type to number
              id="liabilty"
              name="liabilty"
              value={formData.liabilty}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="income">Income:</label>
            <input
              type="number" // Set input type to number
              id="income"
              name="income"
              value={formData.income}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="housingStatus">Housing Status:</label>
            <select
              id="houseStatus"
              name="houseStatus"
              value={formData.houseStatus}
              onChange={handleInputChange}
            >
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
          <div>
            <label htmlFor="empStatus">Employment Status:</label>
            <select
              id="empStatus"
              name="empStatus"
              value={formData.empStatus}
              onChange={handleInputChange}
            >
              <option value="Full-time">Full-Time</option>
              <option value="Part-time">Part-Time</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
