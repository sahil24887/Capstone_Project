import React from 'react';
import './FAQ.css';
import BasicAccordion from '../accordian/BasicAccordian';

const faqData = [
  {
    question: 'What is NatWest CreditWise Pro?',
    answer:
      'NatWest CreditWise Pro is a platform designed to simplify the complex world of finance and credit. We empower individuals by providing them with a clear understanding of their financial standing, helping them make informed decisions about their future. Through innovative technology and expert analysis, we assist you in making confident choices, ensuring you achieve your financial goals.',
  },
  {
    question: 'Is this same as my Credit Score',
    answer:
      'No, in no means this is equal to your credit score. We only give a score basis on the Financial criteria provided by you and the actual credit score may differ. Also, its important to understand that a Credit check will be conducted at the time of the application and the application may also be rejected on that basis',
  },
  {
    question: 'How does NatWest CreditWise Pro work?',
    answer:
      'At NatWest CreditWise Pro, we assess your financial situation based on key factors such as income, liabilities, house status, and employment status. Our advanced algorithms analyze this information to generate a personalized financial score, providing you with valuable insights into your current standing. Your financial score is a reflection of your financial health, and we use it to match you with tailored financial products that align with your needs.',
  },
  {
    question: 'What sets NatWest CreditWise Pro apart?',
    answer:
      'NatWest CreditWise Pro stands out due to its transparency, security, empowerment, and expertise. We believe in transparency and provide you with a clear understanding of how your score is calculated and the products available to you. Your privacy and data security are our top priorities, and we employ advanced encryption techniques to safeguard your information. We empower you to take control of your financial future, enabling you to make informed decisions for a secure tomorrow. Our team of financial experts and technology professionals work tirelessly to bring you the most accurate assessments and product recommendations.',
  },
  
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {/* {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))} */}
        <BasicAccordion/>
      </div>
    </div>
  );
};

export default FAQ;
