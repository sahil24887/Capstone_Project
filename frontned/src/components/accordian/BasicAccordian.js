import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div style={{backgroundColor:"#ffffff"}}>
      <Accordion style={{ backgroundColor: '#ffffff', margin:"auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ backgroundColor: '#ffffff', margin:"auto" }}><h3 style={{ backgroundColor: '#ffffff', margin:"auto" }}>What is NatWest CreditWise Pro?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#ffffff' }}>
          <Typography style={{ backgroundColor: '#ffffff' }}>
          <span style={{fontSize:"20px",backgroundColor: '#ffffff'}}> NatWest CreditWise Pro is a platform designed to simplify the complex world of finance and credit. We empower individuals by providing them with a clear understanding of their financial standing, helping them make informed decisions about their future. Through innovative technology and expert analysis, we assist you in making confident choices, ensuring you achieve your financial goals. </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#ffffff', margin:"auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ backgroundColor: '#ffffff', margin:"auto" }}><h3 style={{ backgroundColor: '#ffffff', margin:"auto" }}>Is this same as my Credit Score</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#ffffff'}}>
          <Typography style={{backgroundColor: '#ffffff'}}>
          <span style={{fontSize:"20px",backgroundColor: '#ffffff'}}>No, in no means this is equal to your credit score. We only give a score basis on the Financial criteria provided by you and the actual credit score may differ. Also, its important to understand that a Credit check will be conducted at the time of the application and the application may also be rejected on that basis</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#ffffff', margin:"auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ backgroundColor: '#ffffff', margin:"auto" }}><h3 style={{ backgroundColor: '#ffffff', margin:"auto" }}>How does NatWest CreditWise Pro work?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#ffffff'}}>
          <Typography style={{backgroundColor: '#ffffff'}}>
          <span style={{fontSize:"20px",backgroundColor: '#ffffff'}}>At NatWest CreditWise Pro, we assess your financial situation based on key factors such as income, liabilities, house status, and employment status. Our advanced algorithms analyze this information to generate a personalized financial score, providing you with valuable insights into your current standing. Your financial score is a reflection of your financial health, and we use it to match you with tailored financial products that align with your needs.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#ffffff', margin:"auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ backgroundColor: '#ffffff', margin:"auto" }}><h3 style={{ backgroundColor: '#ffffff', margin:"auto" }}>What sets NatWest CreditWise Pro apart?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#ffffff'}}>
          <Typography style={{backgroundColor: '#ffffff'}}>
          <span style={{fontSize:"20px",backgroundColor: '#ffffff'}}>NatWest CreditWise Pro stands out due to its transparency, security, empowerment, and expertise. We believe in transparency and provide you with a clear understanding of how your score is calculated and the products available to you. Your privacy and data security are our top priorities, and we employ advanced encryption techniques to safeguard your information. We empower you to take control of your financial future, enabling you to make informed decisions for a secure tomorrow. Our team of financial experts and technology professionals work tirelessly to bring you the most accurate assessments and product recommendations.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
