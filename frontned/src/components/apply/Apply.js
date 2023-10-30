import React from 'react';
import Swal from 'sweetalert2';
import './Apply.css'; // Import the CSS file for styling

const Apply = () => {
  const showSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your interest is registered and you can expect a call shortly.',
    });
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <p>
          Thank you for showing your interest in this product. By clicking the
          below button, you are providing your consent for a representative to
          contact you in regards to this product.
        </p>
        <button onClick={showSweetAlert}>Apply Now</button>
      </div>
    </div>
  );
};

export default Apply;
