import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


import './navbar.css';
import logo from '../../assets/logo.svg';


// BEM -> Block Element Modifier

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgot">O que é GPT?</a></p>
  <p><a href="#possibility">OpenAI</a></p>
  <p><a href="#features">Cases</a></p>
  <p><a href="#blog">Arquivos</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

return (
  <div className='gpt__navbar'>
    <div className='gpt__navbar-links'>
      <div className='gpt__navbar-links_logo'>
          <img src={logo} alt="logo GPT" />
        </div>
        <div className="gpt__navabar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Junte-se!</p>
        <button type='button'>Sign in</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu />
              <div className="gpt__navbar-menu_container-links-sign">
                <button type='button'>Sign in</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar