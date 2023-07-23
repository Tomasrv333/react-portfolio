import HeaderIcon from '../assets/Icons/HomeIcon.svg'
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import Nav from "../components/Nav";
import { useState } from 'react';
import CopyEmail from '../components/CopyEmail';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header>
      <div className="header__content">
        <div>
            <a className="header__title" href="/"><img src={HeaderIcon}></img>Portfolio</a>
        </div>
        <div className='header__nav'>
          <Nav/>
        </div>
        <div>
            <div onClick={handleSidebarToggle} className="header__icon">
                <FaBars size="18px"/>
            </div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='sidebar__icon-div'>
          <div className='sidebar__icon' onClick={handleSidebarToggle}>
            <FaTimes size="18px"/>
          </div>
        </div>
        <div className='sidebar__content'>
          <button className='sidebar__btn button--primary'>Download my Cv <FaDownload/></button>
          <CopyEmail/>
          <div className='sidebar__nav'>
            <Nav/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header