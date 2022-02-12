import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import AboutObject from './components/AboutObject/AboutObject';
import Central from './components/Central/Central';
import Header from './components/Header/Header.js'
import Home from './components/Home/Home';
import NavbarTop from './components/NavbarTop/NavbarTop';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import SubsidiaryСompany from './components/SubsidiaryСompany/SubsidiaryСompany';





function App() {
  return (<div className='app-wrapper'>
    <Header />
    <Sidebar />
    <NavbarTop />
    <div className='app-wrapper-content'>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/products/:city'  element={<Products/>} />
        <Route path='/aboutObject' element={<AboutObject />} />
        <Route path='/company' element={<SubsidiaryСompany />} />
        <Route path='/central' element={<Central  />} />
      </Routes>
    </div>
  </div>
  )
}

export default App;
