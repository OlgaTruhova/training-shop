import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Header } from "./Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { WomenMenPage } from "./pages/WomenMenPage/WomenMenPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Footer } from "./components/Footer/Footer";
// import { Cart } from './components/Cart/Cart';

import './App.css';

const App = () => {

  return (
    <section className='app-wrapper' >
        <div className='app' data-test-id='app'>        
          <Header /> 
          <Routes>
              <Route path='/' element={<HomePage />} exact />
              <Route path='/women' element={<WomenMenPage page={"Women"} />} exact />
              <Route path='/men' element={<WomenMenPage page={"Men"} />} exact />
              <Route path='/men/:id' element={<ProductPage page={"Men"} />} expect />
              <Route path='/women/:id' element={<ProductPage page={"Women"} />} expect />
          </Routes>
          <Footer />
        </div>
        {/* <Cart /> */}
    </section> 
  );
}

export default App;
