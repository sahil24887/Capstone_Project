import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './register.css';

const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .max(20, 'First Name is too long')
      .required('First Name cannot be left blank'),

      lastName: yup
    .string()
    .max(20, 'Last Name is too long')
    .required('Last Name cannot be left blank'),

    emailId: yup
    .string()
        .email("Invalid Email Address")
        .required("Email cannot be left blank")
        .matches(
          /^[A-Za-z0-9+_.-]+@(.+)$/,
          "it should be in correct format with @ in between"
        ),

    phoneNo: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('A phone number is required'),

    address: yup
    .string()
    .required("Address cannot be left blank")
    .max(70, 'Address should not exceed 70 characters'),

    dob: yup
    .date('Invalid date')
        .required('Date of Birth is required')
        .max(new Date(), 'Date of Birth cannot be in the future')
        .test('is-adult', 'User must be at least 18 years old', function (value) {
          const cutoffDate = new Date();
          cutoffDate.setFullYear(cutoffDate.getFullYear() - 18);
          return value <= cutoffDate;
        }),
       
        
    
    
    income: yup
    .number()
    .required('Income cannot be left blank')
    .positive('Income cannot be negative'),

    liabilty: yup
    .number()
    .required('Liability cannot be left blank')
    .positive('Liability cannot be negative'),

    empStatus: yup
    .string()
    .required('Employment Status cannot be left blank'),

    houseStatus: yup
    .string()
    .required('House Status cannot be left blank'),

    custPassword: yup
    .string()
    .required('Password cannot be left blank')
    .min(6, 'Password should be at least 8 characters long'),

  confirmPassword: yup
    .string()
    .required('Confirm Password cannot be left blank')
    .oneOf([yup.ref('custPassword'), null], 'Passwords must match'),
});

function Register() {
    const [registrationComplete, setRegistrationComplete] = useState(false);
    const [emailExistsError, setEmailExistsError] = useState(false);
    const navigate = useNavigate();
       
            
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          emailId: '',
          phoneNo: '',
          address: '',
          dob: '',
          income :'',
          liabilty:'',
          empStatus:'',
          houseStatus:'',
          custPassword: '',
          confirmPassword: '',
         
        },
        validationSchema,
        onSubmit: (values) => {
          fetch('http://localhost:8096/rapi/v1/addregi', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.json();
        })
        .then(() => {
          // Registration is complete
          setRegistrationComplete(true);
          setTimeout(() => {
            // Redirect to login page after a brief delay
            navigate(`/login?email=${formik.values.email}`);;
          }, 2000); // Delay for 2 seconds
        })
        .catch((error) => {
          setEmailExistsError(true)
            console.error('Error registering user:', error);
          });
          
      },
    });
    return (
        <div className='type'>
        <div className="container " style={{ maxWidth: '4000px' }}>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header custom-bg-color text-light text-center ">
                <h2>Sign Up</h2>
                </div>
                <div className="card-body">
                  {registrationComplete ? (
                    <>
                      <div className="alert alert-success" role="alert">
                        Registration completed successfully.
                      </div>
                      <p>Redirecting to login...</p>
                    </>
                     ) : (
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group position-relative">
                           {/* <label htmlFor="firstName">Please enter your first name</label>  */}
                           
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder= 'Enter your first name'
                              
                              
                              className={`form-control ${
                                formik.errors.firstName && formik.touched.firstName
                                  ? 'is-invalid'
                                  : ''
                              }`}
                              {...formik.getFieldProps('firstName')}
                              
                            />
                            {formik.errors.firstName && formik.touched.firstName && (
                              <div className="invalid-feedback">{formik.errors.firstName}</div>
                            )}
                            
                          </div>
        
                          <div className="form-group">
                           
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder='Enter last name'
                              className={`form-control ${
                                formik.errors.lastName && formik.touched.lastName
                                  ? 'is-invalid'
                                  : ''
                              }`}
                              {...formik.getFieldProps('lastName')}
                            />
                            {formik.errors.lastName && formik.touched.lastName && (
                              <div className="invalid-feedback">{formik.errors.lastName}</div>
                            )}
                          </div>

                          <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                      id="emailId"
                      name="emailId"
                      type="emailId"
                      placeholder='Enter your Email'
                      className={`form-control ${
                        formik.errors.emailId && formik.touched.emailId ? 'is-invalid' : ''
                      }`}
                      {...formik.getFieldProps('emailId')}
                    />
                    {formik.errors.emailId && formik.touched.emailId && (
                      <div className="invalid-feedback">{formik.errors.emailId}</div>
                    )}
                    {emailExistsError &&(<span style={{color:"red"}}>Email ID already exists. Enter a new one</span>)}
                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input
                      id="phoneNo"
                      name="phoneNo"
                      type="text"
                      placeholder='Enter phone number'
                      className={`form-control ${
                        formik.errors.phoneNo && formik.touched.phoneNo ? 'is-invalid' : ''
                      }`}
                      {...formik.getFieldProps('phoneNo')}
                    />
                    {formik.errors.phoneNo && formik.touched.phoneNo && (
                      <div className="invalid-feedback">{formik.errors.phoneNo}</div>
                    )}
                  </div>

                  <div className="form-group">
                           
                            <input
                              id="address"
                              name="address"
                              type="text"
                              placeholder='Enter address'
                              className={`form-control ${
                                formik.errors.address && formik.touched.address
                                  ? 'is-invalid'
                                  : ''
                              }`}
                              {...formik.getFieldProps('address')}
                            />
                            {formik.errors.address && formik.touched.address && (
                              <div className="invalid-feedback">{formik.errors.address}</div>
                            )}
                          </div>
        
                          <div className="form-group">
                            {/* <label htmlFor="age">Age</label> */}
                            <input
                              id="dob"
                              name="dob"
                              type="date"
                              placeholder='Enter your Date of Birth'
                              className={`form-control ${
                                formik.errors.dob && formik.touched.dob ? 'is-invalid' : ''
                              }`}
                              {...formik.getFieldProps('dob')}
                            />
                            {formik.errors.dob && formik.touched.dob && (
                              <div className="invalid-feedback">{formik.errors.dob}</div>
                            )}
                          </div>

                          <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input
                      id="income"
                      name="income"
                      type="number"
                      placeholder='Enter your Income'
                      className={`form-control ${
                        formik.errors.income && formik.touched.income ? 'is-invalid' : ''
                      }`}
                      {...formik.getFieldProps('income')}
                    />
                    {formik.errors.income && formik.touched.income && (
                      <div className="invalid-feedback">{formik.errors.income}</div>
                    )}
                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input
                      id="liabilty"
                      name="liabilty"
                      type="number"
                      placeholder='Enter your liabilty'
                      className={`form-control ${
                        formik.errors.liabilty && formik.touched.liabilty ? 'is-invalid' : ''
                      }`}
                      {...formik.getFieldProps('liabilty')}
                    />
                    {formik.errors.liabilty && formik.touched.liabilty && (
                      <div className="invalid-feedback">{formik.errors.liabilty}</div>
                    )}
                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    
              <select
             id="empStatus"
             name="empStatus"
             
               className={`form-control ${
                     formik.errors.empStatus && formik.touched.empStatus ? 'is-invalid' : ''
                         }`}
                           {...formik.getFieldProps('empStatus')}
                              >
              <option value="">Select Employment Status</option>
             <option value="Full-time">Employed (Full-time)</option>
              <option value="Part-time">Employed (Part-time)</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
             {/* Add more options as needed */}
            </select>
            {formik.errors.empStatus && formik.touched.empStatus && (
           <div className="invalid-feedback">{formik.errors.empStatus}</div>
)}


                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <select
    id="houseStatus"
    name="houseStatus"
    className={`form-control ${
        formik.errors.houseStatus && formik.touched.houseStatus ? 'is-invalid' : ''
    }`}
    {...formik.getFieldProps('houseStatus')}
>
    <option value="">Select House Status</option>
    <option value="Rented">Rented</option>
    <option value="Owned">Owned</option>
    
    {/* Add more options as needed */}
</select>
{formik.errors.houseStatus && formik.touched.houseStatus && (
    <div className="invalid-feedback">{formik.errors.houseStatus}</div>
)}

                  </div>

                 

                  <div className="form-group">
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                      id="custPassword"
                      name="custPassword"
                      type="Password"
                      placeholder='Enter your password'
                      className={`form-control ${
                        formik.errors.custPassword && formik.touched.custPassword
                          ? 'is-invalid'
                          : ''
                      }`}
                      {...formik.getFieldProps('custPassword')}
                    />
                    {formik.errors.custPassword && formik.touched.custPassword && (
                      <div className="invalid-feedback">{formik.errors.custPassword}</div>
                    )}
                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder='Confirm your password'
                      className={`form-control ${
                        formik.errors.confirmPassword && formik.touched.confirmPassword
                          ? 'is-invalid'
                          : ''
                      }`}
                      {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                  </div>
                      <br></br>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                      <br></br>

                  <p>Already have an account? Sign in</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Register;