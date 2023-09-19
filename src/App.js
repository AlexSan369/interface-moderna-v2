import React from 'react';
import './App.css';
import {  Brand, CTA, Feature, Navbar } from './components';
import { Blog, Footer, Header, WhatGPT, Possibility } from './containers';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App