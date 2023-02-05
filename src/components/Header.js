import React from 'react'
import { Link } from 'react-scroll'
import * as Unicons from '@iconscout/react-unicons'

const Header = () => {
  const sections = document.querySelectorAll('section')
  const navbarItem = document.querySelectorAll('nav ul li')

  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach( section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
    
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id')
      }
    })

    navbarItem.forEach(li => {
      li.classList.remove('active')
      
      if (li.classList.contains(current)) {
        li.classList.add('active')
      }
    })
  })

  return (
    <>
        <header className='header__container'>
          <div className='header__logo'>
            <a href='header__container'>Portafolio</a>
          </div>

          <nav className='header__navbar'>
              <ul>
                <li>
                  <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={800}
                    className='navbar__item'
                    activeClass = 'navbar__item--active'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={800}
                    className='navbar__item'
                    activeClass = 'navbar__item--active'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={800}
                    className='navbar__item'
                    activeClass = 'navbar__item--active'
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={800}
                    className='navbar__item'
                    activeClass = 'navbar__item--active'
                  >
                    Contact
                  </Link>
                </li>
              </ul> 
            </nav>
          <div className='header__bars'>
            <Unicons.UilBars />
          </div>

          <div className='header__button'>
            <button className='button-outline'>Hire Me</button>
          </div>
          
        </header>
    </>
  )
}

export default Header