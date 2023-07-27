import HeaderIcon from '../assets/Icons/HomeIcon.svg'
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import Nav from "../components/Nav";
import { useState } from 'react';
import CopyEmail from '../components/CopyEmail';
import {useTranslation} from "react-i18next";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const { t, i18n } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  const handleLanguages = (e) => {
    const language = e.target.value
    setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <header>
      <div className="header__content">
        <div>
            <a className="header__title" href="/"><img src={HeaderIcon}></img>{t('header.title')} </a>
        </div>
        <div className='header__nav'>
          <Nav/>
        </div>
        <div className='header__options'>
        <select name="languages" value={selectedLanguage} onChange={handleLanguages}>
          <option value="en">{t('language.english')}</option>
          <option value="es">{t('language.spanish')}</option>
        </select>
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
          <a href='https://drive.google.com/uc?export=download&id=1IsT9m6qa10oKEHwRn_a9FRzGdtzUWV0t'>
            <button className='sidebar__btn button--primary'>{t('header.sidebar.btn')}<FaDownload/></button>
          </a>
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