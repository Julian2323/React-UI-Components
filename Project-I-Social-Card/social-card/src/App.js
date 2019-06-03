import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
import HeaderContent from './components/HeaderComponents/HeaderContent.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import CardBanner from './components/CardComponents/CardBanner.js';
import CardContent from './components/CardComponents/CardContent.js';
import Footer from './components/FooterComponents/Footer.js';


const App = () => {
  return (
    <>
    <div>
    <HeaderContainer />
    <CardContainer />
    </div>
    </>


  );
};

export default App;
