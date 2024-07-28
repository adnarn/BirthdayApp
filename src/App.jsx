import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Update from './component/Update';


const App = () => {
  return (
    <BrowserRouter>
            <div>
                  <Routes>
                          <Route path='/' element = {<Home />} />
                          <Route path='/update/:id' element = {<Update />} />
                  
                  </Routes>
            </div>
</BrowserRouter>
  );
}

export default App;
