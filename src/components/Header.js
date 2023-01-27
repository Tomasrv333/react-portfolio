import React from 'react'
import * as Unicons from '@iconscout/react-unicons'

const Header = () => {
  return (
    <>
        <header className='header__container'>
          <div className='header__logo'>
            <h3>Portafolio</h3>
          </div>
          <nav className='header__navbar'>
            <ul>
              <li>Home</li>
              <li>Acerca de mi</li>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <div className='header__icons'>
            <Unicons.UilMoon />
          </div>
        </header>
    </>
  )
}

export default Header