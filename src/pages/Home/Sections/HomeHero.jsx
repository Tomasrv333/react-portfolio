import ImageProfile from '../../../assets/ImageProfile.svg';
import HomeIcon from '../../../assets/Icons/HomeIcon.svg'
import SocialMedia from '../../../components/SocialMedia';
import { FaCopy, FaMouse } from "react-icons/fa";

const HomeHero = () => {
  return (
    <div className="container">
      <div className="hero__content">
        <div className="hero__info">
          <div className='hero__info--up-group'>
            <img src={ImageProfile} alt="Tomás Ríos Vargas" />
            <div className='hero__info--title-group'>
              <span className="hero__span">Welcome, I'm</span>
              <h1 className="hero__title">Tomás Ríos Vargas</h1>
              <h2 className='hero__subtitle'>Full Stack Developer</h2>
              <p className="hero__description">I will create custom web solutions for your needs. With expertise in full stack development, Ill deliver functional and visually appealing websites and applications that provide a seamless user experience.</p>
              <div className='hero__copyEmail'>
                <span>tomasrv123@gmail.com</span>
                <FaCopy/>
              </div>
            </div>
          </div>
          <button className='hero__btn button--primary'><a href="#contact">Contact me</a> </button>
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
        <span>Scroll down</span>
        <FaMouse/>
      </div>
    </div>
  )
}

export default HomeHero