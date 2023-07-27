import ImageProfile from '../../../assets/ImageProfile.svg';
import CopyEmail from '../../../components/CopyEmail';
import SocialMedia from '../../../components/SocialMedia';
import { FaMouse } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const HomeHero = () => {
  const {t} = useTranslation()

  return (
    <div className="container">
      <div id='hero' className="hero__content">
        <div className="hero__info">
          <div className='hero__info--up-group'>
            <img src={ImageProfile} alt="Tomás Ríos Vargas" />
            <div className='hero__info--title-group'>
              <span className="hero__span">{t('hero.spanMessage')}</span>
              <h1 className="hero__title">Tomás Ríos Vargas</h1>
              <h2 className='hero__subtitle'>{t('hero.spanTitle')}</h2>
              <p className="hero__description">{t('hero.description')}</p>
              <CopyEmail/>
            </div>
          </div>
          <button className='hero__btn button--primary'><a href="#contact">{t('hero.btn')}</a> </button>
        </div>
        <div className="hero__side">
          <div className="hero__img">
            <img src={ImageProfile} alt="Tomás Ríos Vargas" />
          </div>
          <div className="hero__media">
            <SocialMedia/>
          </div>
        </div>
      </div>
      <div className='hero__scroll'>
        <span>{t('hero.scrollDown')}</span>
        <FaMouse/>
      </div>
    </div>
  )
}

export default HomeHero