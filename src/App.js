import React from 'react';
// import { Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import MenPage from "./pages/MenPage/MenPage";
import { Advantage } from "./components/Advantage/Advantage";

import './App.css';

function App() {
  return (
    <div className='app' datd-test-id='app'>
        <div className='App-wrapper'>
            <Header />
            <Advantage />
            <MenPage />

            {/* <Route path='/Men' component={ MenPage } exact /> */}
        </div>
    </div>
  );
}

export default App;
