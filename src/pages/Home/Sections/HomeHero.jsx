import ImageProfile from '../../../assets/ImageProfile.svg';
import SocialMedia from '../../../components/SocialMedia';
import { FaCopy, FaMouse } from "react-icons/fa";

const HomeHero = () => {
  return (
    <div className="container">
      <div className="hero__content">
        <div className="hero__info">
          <span className="hero__span">Welcome to my portfolio...</span>
          <h1 className="hero__title">Im Tomás / Full Stack Developer</h1>
          <hr className='hero__line'></hr>
          <p className="hero__description">I will create custom web solutions for your needs. With expertise in full stack development, Ill deliver functional and visually appealing websites and applications that provide a seamless user experience.</p>
          <div className='hero__copyEmail'>
            <span>tomasrv123@gmail.com</span>
            <FaCopy/>
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