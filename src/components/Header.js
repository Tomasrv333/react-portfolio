import React from 'react'
import * as Unicons from '@iconscout/react-unicons'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <>
        <header className='header__container'>
          <div className='header__logo'>
            <a href='header__container'>Portafolio</a>
          </div>

          <nav className='header__navbar'>
            <ul>
              <li className='navbar__item'>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className='link__home'
                  activeClass = 'link__home--active'
                >
                  Home
                </Link>
              </li>
              <li className='navbar__item'>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className='link__about'
                  activeClass = 'link__about--active'
                >
                  About
                </Link>
              </li>
              <li className='navbar__item'>
                <Link
                  to='projects'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className='link__projects'
                  activeClass = 'link__projects--active'
                >
                  Projects
                </Link>
              </li>
              <li className='navbar__item'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className='link__contact'
                  activeClass = 'link__contact--active'
                >
                  Contact
                </Link>
              </li>
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