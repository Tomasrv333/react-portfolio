import ImageProfile from '../../../assets/ImageProfile.svg';
import SocialMedia from '../../../components/SocialMedia';

const HomeHero = () => {
  return (
    <div className="container">
      <div className="hero__content">
        <div className="hero__info">
          <span className="hero__span">Welcome to my portfolio...</span>
          <h1 className="hero__title">Im Tomás / Full Stack Developer</h1>
          <p className="hero__description">I will create custom web solutions for your needs. With expertise in full stack development, Ill deliver functional and visually appealing websites and applications that provide a seamless user experience.</p>
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
    </div>
  )
}

export default HomeHero