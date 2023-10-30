import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../productCard/ProductCard';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './products.css'
import CreditScore from '../creditScore/CreditScore';

const Products = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const userId = userInfo ? userInfo.id : null;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [creditScore, setCreditScore] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const[creditCardCount, setCreditCardCount] = useState([]);
  const[loanCount, setLoanCount] = useState([]);
  const[mortgageCount, setMortgageCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8096/vi/app/products/getall');
      setProducts(response.data);
      const data = await axios.get(`http://localhost:8096/creditscore/api/customer/${userId}`);
      setCreditScore(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;
      if (creditScore <= 600) {
        filtered = products.filter(product => product.score === 'Low');
      } else if (creditScore >= 601 && creditScore <= 730) {
        
        filtered = products.filter(product => product.score === 'Medium' || product.score === 'Low');
      }
      setCreditCardCount(filtered.filter(product => product.productType === 'cc'))
      setLoanCount(filtered.filter(product => product.productType === 'loan'))
      setMortgageCount(filtered.filter(product => product.productType === 'mortgage'))
      // Set filtered products based on the selected tab
      if (selectedTab === 0) {
        setFilteredProducts(filtered.filter(product => product.productType === 'cc'));
      } else if (selectedTab === 1) {
        setFilteredProducts(filtered.filter(product => product.productType === 'loan'));
      } else {
        setFilteredProducts(filtered.filter(product => product.productType === 'mortgage'));
      }
      
    };

    filterProducts();
  }, [selectedTab, products, creditScore]);
  
  if (loading) {
    return <div>Loading...</div>; // or show a loading spinner component
  }

  return (
    <div className={darkTheme?'main_products_container':'main_products_container_dark'}>
      <div className='theme-changer'>
        <span>Your NCP Score</span>
        <button onClick={(() => setDarkTheme(!darkTheme))}>Change Theme</button>
      </div>
      
      <div>
      <CreditScore darkTheme={darkTheme}/>
      </div>
      
      <h3>Your Offers</h3>
      <Tabs
        value={selectedTab}
        onChange={(event, newValue) => setSelectedTab(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={`Credit Card (${creditCardCount.length})`} />
        <Tab label={`Loan (${loanCount.length})`} />
        <Tab label={`Mortgage (${mortgageCount.length})`} />
      </Tabs>
      <div className='main_products'>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;
