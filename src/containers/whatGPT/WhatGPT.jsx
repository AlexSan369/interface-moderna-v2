import React from 'react';
import { Feature } from '../../components'
import './whatgpt.css';


const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt'
    >
      <div className="gpt__whatgpt-feature">
        <Feature 
          title="What is GPT-3" 
          text="We so opinion friends me message as delight. 
                Whole front do of plate heard oh ought. 
                His defective nor convinced residence own. 
                Connection has put impossible own apartments boisterous. 
                At jointure ladyship an insisted so humanity he. Friendly bachelor entrance" 
        />
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__whatgpt-container">
        <Feature 
          title="Chatbots" 
            Ztext="We so opinion friends me message as delight. Whole front do of plate heard oh ought." 
        />
        <Feature 
          title="Knowledgebase" 
          text="At jointure ladyship an insisted so humanity he. 
          Friendly bachelor entrance to on by. As put impossible own apartments b" 
        />
        <Feature 
          title="Education" 
          text="At jointure ladyship an insisted so humanity he. 
          Friendly bachelor entrance to on by. As put impossible own apartments b" 
        />
      </div>
    </div>
  )
}

export default WhatGPT