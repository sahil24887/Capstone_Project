import React from 'react'
import Home2 from '../../Images/Home2.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Third from '../../Images/Third.jpeg';

import logo1 from '../../Images/logo1.png';
import logo2 from '../../Images/logo2.jpg';
import logo3 from '../../Images/logo3.png';



export default function Home() {
  
    return (

    <><div className='home'>
            <div className="contain">
                <div className="row">
                    <div className="col-md-6 mt-5 first">

                        <h2>Check your NCP Score based on the information you have provided</h2>
                        <br />
                        <Button variant="warning"> <Link to="/register" className="link-button">
                    <b>Get Free NCP Score & Report</b>
                </Link></Button>{' '}
                        

                        <br /><br />

                        <span><b>Already have a NCP account? </b></span>
                        <Link to='/login'>login here </Link>
                        
                        <p>This is not your actual credit score. The NCP score is given on the information that you provide and we show you the products that you are most likely to be approved for.</p>
                        <span>Please note: Actual Scores and product eligiblity may differ.</span>

                    </div>


                    <div className="col-md-6 mt-1 ">
                        <div className="text-light py-3 rounded">
                            <img src={Home2} alt="Your Image"  className='homeimg'/>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        
        
        <Container className='text-center grid'>
        <h2>Learn. Plan. Protect. All in one place. Here’s how.</h2>
        <br /><br />
                <Row>
                    
                    <Col> <b>24x7 credit monitoring with NCP alerts</b> <br />
                Safeguard against identity theft with email & SMS notifications.</Col>
                    
                    <Col><b>Unlimited access to your NCP dashboard</b> <br />
                Get regular updates to your NCP Score & Report.</Col>
                
                </Row>
                <br />
                <Row>
                    <Col> <b>Make the right credit decisions with Score Simulator</b> <br />
                    Find out how your credit actions can impact your NCP Score.</Col>

                    <Col><b>Get personalized loan offers </b> <br />
                    Tailored loan offers based on your latest NCP Score.</Col>
                    
                </Row>
                <br />
                <h4>Everything you need to stay loan-ready, always.</h4>
                <br />
                <Button variant="warning"> <b>Get Your NCP Score</b></Button>{' '}
            </Container> 
            <br />  



    <CardGroup className='cards'>
      <Card className='logofirst'>
        <Card.Img variant="top" src={logo1} className='logofirst'/>
        <Card.Body className='text-center'>
          <Card.Title>FAQ</Card.Title>
          <Card.Text>
          Get quick answers to your most common questions.
          </Card.Text>
        </Card.Body>
        <br /><br /><br /><br />
        <Card.Footer>
          <small className="text-muted">KNOW MORE</small>
        </Card.Footer>
      </Card>
      <Card className='logosecond'>
        <Card.Img variant="top" src={logo2} className='logosecond' />
        <Card.Body className='text-center'>
          <Card.Title>Why your NCP Score and Report matters.</Card.Title>
          <Card.Text>
          Learn how it matters not only to you, but also to lenders.
          </Card.Text>
        </Card.Body>
        <br /><br /><br />
        <Card.Footer>
          <small className="text-muted">KNOW MORE</small>
        </Card.Footer>
      </Card>
      <Card className='logothird'>
        <Card.Img variant="top" src={logo3} className='logothird' />
        <Card.Body className='text-center'>
          <Card.Title>Loan approval process</Card.Title>
          <Card.Text>
          Understand how banks evaluate your loan application.
          </Card.Text>
        </Card.Body>
        <br /><br /><br /><br />
        <Card.Footer>
          <small className="text-muted">KNOW MORE</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


    <div className='third'>
            <div className="container">
                <div className="row">
                    {/* Left Part - Picture */}
                    <div className="col-md-4 mt-5 ">
                        {/* Add your picture or any other content here */}   
                        <img src={Third} alt="Your Image" className="img-fluid" />
                    </div>
                    {/* Right Part - Login Form */}
                    
                    
                    <div className="col-md-8 mt-5 form-container">
                    <div className=" text-light rounded">
                        <h2>Monitor Your Financial Health with NCP Rank.</h2>
                        <br />
                        <p>Easy access - check your report online anytime, anywhere.</p>       
                        <p>70% of all companies who were sanctioned loans had a NCP RANK between 4 and 1.</p>
                        <br />
                        <Button variant="warning"> <b>Get Started</b></Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    </div>
        <br />
    <div className="container">    
        <div className='row ml-5'>
            <div className='col-md-12'>
                <h2>Self Service</h2>
               <p> If you see "Not Disclosed" for an account or want to view your most recent NCP Score & Report? click here. </p>

                <p>To get your Free NCP Score & Report, click here. </p>

                <p>If you found an inaccuracy in your NCP Report, submit a dispute here. </p>

                <p>If you could not verify your identity online, upload supporting documents here. </p>

            </div>   
        </div>        
    </div>                
            </>
  );
}


 
