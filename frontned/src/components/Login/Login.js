import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';
import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate hooks
import './Login.css';
import LoginCibil from '../../Images/Screenshotcs.png';
import CustomerLoginContext from '../../context/CustomerLoginContext';
export default function Login() {
    const { setCID, setJwtToken, setCustName, setUserInfo } = useContext(CustomerLoginContext);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook


    const formik = useFormik({
        initialValues: {
            emailId: '', // Prefill with the email query parameter
            custPassword: '',
        },
        onSubmit: ({emailId, custPassword}) => {
            // Check if there is a user with matching email and password

            fetch("http://localhost:8096/auth/v1/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },	
                body: JSON.stringify({ emailId, custPassword: custPassword }), 
              })
              .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.token) {
            setJwtToken(data.token);
            setCID(data.custDetails.id)
            setCustName(data.custDetails.firstName)
            setUserInfo(data.custDetails)
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("userInfo", JSON.stringify(data.custDetails));
            navigate("/DashBoard"); 
          } else {
            setError(true);
            setErrorMsg(data.message);
          }
        })
            

            
        },
        validationSchema: yup.object().shape({
            emailId: yup.string().email('Invalid Email Address').required('Email cannot be left blank'),
            custPassword: yup.string().required('Password cannot be left blank'),
        }),
    });

    return (
        <div className='file'>
            <div className="container">
                <div className="row">
                    {/* Left Part - Picture */}
                    <div className="col-md-6 mt-5 ">
                        {/* Add your picture or any other content here */}
                        <h3>Login to check your NCP score</h3>
                        <img src={LoginCibil} alt="Your Image" className="img-fluid" />
                    </div>
                    {/* Right Part - Login Form */}
                    
                    
                    <div className="col-md-6 mt-4 form-container">
                    <div className=" text-light py-3 rounded">
                        <h2>Login</h2>
                        <p>To access your NCP Score & Report</p>
                    </div>
                    
                    <form onSubmit={formik.handleSubmit} className="mb-3">
                        <div className="mt-2">
                            <label htmlFor="Email"> <b>Email</b></label>
                            <input
                                id="emailId"
                                name="email"
                                type="text"
                                {...formik.getFieldProps('emailId')}
                                className="form-control form-control-sm"
                                placeholder="Email"
                            />
                            {formik.touched.emailId && formik.errors.emailId && (
                                <span className="text-danger">{formik.errors.emailId}</span>
                            )}
                            <br />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="Password"><b>Password</b></label>
                            <input
                                id="custPassword"
                                name="password"
                                type="password"
                                {...formik.getFieldProps('custPassword')}
                                className="form-control form-control-sm"
                                placeholder="Password"
                            />
                            {formik.touched.custPassword && formik.errors.custPassword && (
                                <span className="text-danger">{formik.errors.custPassword}</span>
                            )}
                            <br />
                        </div>
                        
                        <p>By clicking on login, you will accept our terms & conditions</p>
                        <div className="mt-2 text-center">
                            <button id="btnLogin" type="submit" className="btn btn-success" >
                                Login
                            </button>
                            <hr />
                        </div>
                            <h6>Never taken a NCP Score & Report? </h6>
                           <button style={{backgroundColor:"blueviolet"}}><Link to='register' style={{color:"white"}}>Sign Up</Link></button> 
                    </form>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    )}
                 
                </div>
            </div>
        </div>
      </div>
    );
}
