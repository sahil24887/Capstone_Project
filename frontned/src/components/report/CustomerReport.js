import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CustomerLoginContext from "../../context/CustomerLoginContext";
import "./customerReport.css";
import axios from "axios";
const CustomerReport = () => {
  const {
    cID,
    setCID,
    customerScore,
    setInc,
    setLiab,
    setHouseStatus,
    setEmpStatus,
    inc,
    liab,
    houseStatus,
    empStatus,
    custName,
    setCustName,
  } = useContext(CustomerLoginContext);
  const [loadedUserInfo, setLoadedUserInfo] = useState(null);
  const [creditScore, setCreditScore] = useState(customerScore);
  const [changeTheme, setChangeTheme] = useState(false);

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setLoadedUserInfo(parsedUserInfo);
      setCID(parsedUserInfo.id);
      setInc(parsedUserInfo.income);
      setLiab(parsedUserInfo.liabilty);
      setEmpStatus(parsedUserInfo.empStatus);
      setHouseStatus(parsedUserInfo.houseStatus);
      setCustName(parsedUserInfo.firstName)

      const fetchCreditScore = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8096/creditscore/api/customer/${parsedUserInfo.id}`
          );
          const data = response.data;
          setCreditScore(data);
        } catch (error) {
          console.error("Error fetching credit score:", error);
        }
      };

      fetchCreditScore();
    }
  }, [cID, inc, liab, houseStatus, empStatus]);

  if (!loadedUserInfo || creditScore === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report">
      <h1>Your Report at a Glance.</h1>
      <div className="personal">
        <h2>Personal Details</h2>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Name: </b>
          {custName} {loadedUserInfo.lastName}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Email:</b> {loadedUserInfo.emailId}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Contact No.:</b> {loadedUserInfo.phoneNo}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Address:</b>
          {loadedUserInfo.address}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Date Of Birth:</b>{" "}
          {new Date(loadedUserInfo.dob).toLocaleDateString()}
        </p>
      </div>
      <div className="financial">
        <h2>Financial Details</h2>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Total Income: </b>
          {loadedUserInfo.income}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Total Debt:</b> {loadedUserInfo.liabilty}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Employment:</b> {loadedUserInfo.empStatus}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>Housing:</b>
          {loadedUserInfo.houseStatus}
        </p>
        <p style={{ backgroundColor: "#ffffff" }}>
          <b>CreditScore:</b>
          {creditScore}
        </p>
      </div>
    </div>
  );
};

export default CustomerReport;
