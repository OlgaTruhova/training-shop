import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Header } from "./Header/Header";
import { Clothes } from "./components/Сlothes/Clothes";
import { NewSale } from "./components/NewSale/NewSale";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { LatestFromBlog } from "./components/LatestFromBlog/LatestFromBlog";

// import MenPage from "./pages/MenPage/MenPage";
// import { useState } from 'react';


import './App.css';

function App() {

  return (
    <div className='app' datd-test-id='app'>
        <div className='App-wrapper'>
            <Header /> 
            <Clothes />  
            <NewSale />
            <Subscribe /> 
            <LatestFromBlog />
        </div>
    </div>
  );
}

export default App;
