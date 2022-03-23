import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Header } from "./Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { WomenMenPage } from "./pages/WomenMenPage/WomenMenPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Footer } from "./components/Footer/Footer";
import { useGetProductsQuery } from './redux/products/productsApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/products/productsReducers';
import { Loading } from './components/Loading/Loading';
import { Error } from "./components/Error/Error";
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const { data = {}, isLoading, isError } = useGetProductsQuery();

  useEffect(() => {
      dispatch(setProducts(data));
  }, [data]);

  const PRODUCTS = useSelector(state => state.products.products);
  const isProducts = val => val === null || !(Object.keys(val) || val).length;

  return (
    <section className='app-wrapper' >
      <div className='app' data-test-id='app'>        
        <Header /> 
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isProducts(PRODUCTS) &&
          <Routes>
              <Route path='/' element={<HomePage />} exact />
              <Route path='/women' element={<WomenMenPage page={"Women"} />} exact />
              <Route path='/men' element={<WomenMenPage page={"Men"} />} exact />
              <Route path='/men/:id' element={<ProductPage page={"Men"} />} exact />
              <Route path='/women/:id' element={<ProductPage page={"Women"} />} exact />
          </Routes>
        }
        <Footer />
      </div>
    </section>
  );
}

export default App;
