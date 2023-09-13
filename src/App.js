import React from 'react';
import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Footer, Header, WhatGPT, Possibility } from './containers';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Article />
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