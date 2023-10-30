import React from 'react'
import './About.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import About1 from '../../Images/Ab1.jpg'
import About2 from '../../Images/Ab3.jpeg'
import About3 from '../../Images/Ab4.webp';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


export default function About() {
  return (

    <div className='About'>
        <br />
        <h3> Welcome to NatWest CreditWise Pro. Your all problems solutions related to Credit Score is here. </h3>

        <p>
                Our mission is to simplify the complex world of finance and credit, making it accessible to everyone.
                We aim to empower individuals by providing them with a clear understanding of their financial standing, 
                helping them make informed decisions about their future. Through innovative technology and expert analysis, 
                we assist you in making confident choices, ensuring you achieve your financial goals.
            </p>
            <h2>How It Works</h2>
            <p>
                At NatWest CreditWise Pro, we have developed a user-friendly platform that assesses your financial situation 
                based on key factors such as income, liabilities, house status, and employment status. Our advanced algorithms 
                analyze this information to generate a personalized financial score, providing you with valuable insights into your current standing.
            </p>
            <h2>Understanding Your Score</h2>
            <p>
                Your financial score is not just a number; it's a reflection of your financial health. It takes into account 
                various factors to provide you with an accurate representation of your creditworthiness. The higher your score, 
                the better your financial health, indicating your eligibility for a wide range of financial products.
            </p>
            <h2>Tailored Product Recommendations</h2>
            <p>
                Once you have your personalized financial score, we don't stop there. We go a step further by curating a selection 
                of financial products tailored to your specific score. Whether you're looking for loans, credit cards, insurance, 
                or investment opportunities, we match you with products that align with your financial standing. These recommendations 
                are designed to maximize your chances of approval, ensuring you access the best offers in the market.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Transparency:</strong> We believe in transparency and provide you with a clear understanding of 
                how your score is calculated and the products available to you.</li>
                <li><strong>Security:</strong> Your privacy and data security are our top priorities. We employ advanced encryption 
                techniques to safeguard your information.</li>
                <li><strong>Empowerment:</strong> We empower you to take control of your financial future. By understanding your 
                financial standing, you can make informed decisions that pave the way for a secure tomorrow.</li>
                <li><strong>Expertise:</strong> Our team of financial experts and technology professionals work tirelessly to bring 
                you the most accurate assessments and product recommendations.</li>
            </ul>


        <CardGroup>
          <Card>
            <Card.Img className='Img' variant="top" src={About1} />
            <Card.Body>
              <Card.Title className='Title'>Established</Card.Title>
              <Card.Text>
                Established this in October, 2023 with all the solutions related to Credit Score.
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className='Img' variant="top" src={About2} />
            <Card.Body>
              <Card.Title className='Title'>Founder</Card.Title>
              <Card.Text>
                This multi tasking applicaton is founded by Mr. Sahil Pandey, Karan Goyal and Bipish Goyel working as Software Engineers in
                NatWest Group under the Supervision of Mr Annu Sharma Sir.
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className='Img' variant="top" src={About3} />
            <Card.Body>
              <Card.Title className='Title'>News</Card.Title>
              <Card.Text>
                It is being said that One of the best Application where we can do anything instantly.
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
        </CardGroup>

      </div>
  );
}


 


