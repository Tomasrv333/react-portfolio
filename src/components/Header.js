import React from 'react'
import * as Unicons from '@iconscout/react-unicons'

const Header = () => {
  return (
    <>
        <header className='header__container'>
          <div className='header__logo'>
            <a>TRV</a>
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