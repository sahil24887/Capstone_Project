import React, { useEffect, useState, useContext } from "react";

import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomerLoginContext from "../../context/CustomerLoginContext";
import "./creditScore.css";


ChartJS.register(ArcElement, Tooltip, Legend);

const determineBackgroundColor = (score) => {
  if (score >= 300 && score < 600) {
    return ["red", "white"]; // Red background for score range 300-549
  } else if (score >= 600 && score < 730) {
    return ["orange", "white"]; // Orange background for score range 550-649
  } else {
    return ["green", "white"]; // Green background for score range 730-900
  }
};

const CreditScore = ({darkTheme}) => {
  const {
    cID,
    setCID,
    userInfo,
    setJwtToken,
    setCustName,
    setUserInfo,
    customerScore,
    setCustomerScore,
    
  } = useContext(CustomerLoginContext);
 
  const [loading, setLoading] = useState(true);
  const backgroundColor = determineBackgroundColor(customerScore);
  console.log(userInfo);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const storedUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (storedUserInfo) {
        setJwtToken(token);
        setCID(storedUserInfo.id);
        setCustName(storedUserInfo.firstName);
        setUserInfo(storedUserInfo);
      }
    }
  
    const fetchCreditScore = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8096/creditscore/api/customer/${cID}`
        );
        const data = response.data;
        setCustomerScore(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching score:", error);
        setLoading(false);
      }
    };
  
    if (cID) {
      fetchCreditScore();
    }
  }, [cID]); 
  

  const guageLabels = {
    id: "guageLabels",
    beforeDraw(chart, args, pluginOptions) {
      const { ctx, chartArea } = chart;
      if (!chartArea) {
        // Chart area is not available yet, return early
        return;
      }

      const middleValue = chart.config.data.datasets[0].data[0];
      const { left, right, bottom } = chartArea;
      const minValue = 300;
      const maxValue = 900;

      ctx.save();

      // Set font size for left and right values
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      // Calculate X coordinates for the values
      const minPosX = left + 50;
      const middlePosX = (left + right) / 2;
      const maxPosX = right - 50;

      // Calculate Y coordinate to move the middle value up
      const posY = bottom - 250; // Increased posY value only for middleValue

      // Draw text for minValue (300) on the left
      ctx.fillText(minValue.toString(), minPosX, bottom - 140); // Original posY for left value

      // Set color based on score range
      let chartColor;
      if (middleValue >= 300 && middleValue < 600) {
        chartColor = "red";
      } else if (middleValue >= 600 && middleValue < 730) {
        chartColor = "orange";
      } else {
        chartColor = "green";
      }

      // Set font size and color for middle value
      ctx.font = "bold 70px sans-serif"; // Font size increased to 40px
      ctx.fillStyle = chartColor; // Color based on score range

      // Draw text for middleValue in the middle with updated font size and color
      ctx.fillText(middleValue.toString(), middlePosX, posY);

      // Set font size for maxValue (900) on the right
      ctx.font = "bold 20px sans-serif"; // Set back to the original font size
      ctx.fillStyle = "black"; // Set back to the original color
      ctx.fillText(maxValue.toString(), maxPosX, bottom - 140); // Original posY for right value

      ctx.restore();
    },
  };

  const data = {
    labels: [],
    datasets: [
      {
        data: [customerScore, 900 - customerScore],
        backgroundColor: backgroundColor,
        hoverBackgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {};

  if (loading) {
    return <div>Loading...</div>; 
  }
 
  return (
    <div>
      <div className={darkTheme?"main-creditscore-container":"main-creditscore-container-dark"}>
        <div className="show-score">
          <Doughnut data={data} options={options} plugins={[guageLabels]} />
        </div>
        <div className="current-standing">
          <h3>See where you stand</h3>
          <div className="range red">300-599</div>
          <div className="range orange">600-730</div>
          <div className="range green">730 Above</div>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
