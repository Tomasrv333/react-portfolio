import React from 'react'
import * as Unicons from '@iconscout/react-unicons'

const Header = () => {
  return (
    <>
        <header className='header__container'>
          <div className='header__title'>
            <h1>Tomas Rios Vargas</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <nav className='header__navbar'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
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