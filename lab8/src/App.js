import React from 'react';
import Header from './containers/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ExclusiveModels from './pages/ExclusiveModels'
import ItemPage from './components/Item/item';

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exclusive_models" element={<ExclusiveModels/>} />
            <Route path="/soon" element={<div><Header /><h1>Soon...</h1></div>} />
            <Route path="/item/:id" element={<ItemPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
