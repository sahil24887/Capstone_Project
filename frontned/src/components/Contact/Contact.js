import React from 'react'
import Form from 'react-bootstrap/Form';
import './Contact.css';
import Swal from 'sweetalert2';



export default function Contact() {
  const showSweetAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Thank you for your message!',
      text: 'We will try and respond within 48 hours.',
    });
  };
  return (

    
    
    <div className='Con'>

        <h3> Contact Us !!! </h3>

        <Form className='text-center'>
          <Form.Group className="col-md-4 col-10 mx-auto" controlId="exampleForm.ControlInput1">
            <Form.Label className='field'>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="col-md-4 col-10 mx-auto" controlId="exampleForm.ControlInput1">
            <Form.Label className='field'>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="col-md-4 col-10 mx-auto" controlId="exampleForm.ControlInput1">
            <Form.Label className='field'>Contact</Form.Label>
            <Form.Control type="text" placeholder="Enter your contact number" />
          </Form.Group>
          <Form.Group className="col-md-4 col-10 mx-auto"
            controlId="exampleForm.ControlTextarea1">
            <Form.Label className='field'>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <br />
          <div className='col-12'>
            <button className='btn btn-primary' onClick={showSweetAlert}>Submit</button>
          </div>
        </Form>

      </div>

      );
    }