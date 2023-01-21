import React from 'react'
import { UilMoon } from '@iconscout/react-icons'

const Header = () => {
  return (
    <>
        <header>
          <div>
            <h1>Tomas Rios Vargas</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </nav>
          <div>
            <UilMoon />
          </div>
        </header>
    </>
  )
}

export default Header