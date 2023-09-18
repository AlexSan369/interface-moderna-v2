import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className="gpt__header-content">
        <h1 className="gradient__text">Desenvolva algo incrível usando OpenAI GPT4!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, facere asperiores. Reiciendis itaque nulla quidem reprehenderit debitis odio? Possimus explicabo distinctio maiores excepturi esse itaque velit ipsam repellendus cumque quod.
        </p>

        <div className="gpt__header-content__input">
          <input type="email" placeholder='Seu e-Mail' className='' />
          <button type='button'>Comece</button>
        </div>

        <div className="gpt__header-content__people">
          <img src={people} alt="pessoas" />
          <p>tantas pessoas em 24 horas</p>
        </div>
      </div>


      <div className="gpt__header-image">
        <img src={ai} alt="IA" />
      </div>
    </div>
  )
}

export default Header