import React from 'react';
import { Header } from "./Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { WomenMenPage } from "./pages/WomenMenPage/WomenMenPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom'

import './App.css';

const App = () => {

  return (
    <section className='app' datd-test-id='app'>
        <div className='app-wrapper'>        
          <Header /> 
          <Routes>
              <Route path='/' element={<HomePage />} exact />
              <Route path='/Women' element={<WomenMenPage page={"Women"} />} exact />
              <Route path='/Men' element={<WomenMenPage page={"Men"} />} exact />
              <Route path='/Men/:id' element={<ProductPage page={"Men"} />} expect />
              <Route path='/Women/:id' element={<ProductPage page={"Women"} />} expect />
          </Routes>
          <Footer />
        </div>
    </section> 
  );
}

export default App;
