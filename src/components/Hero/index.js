import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Hero = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div id="home" name="home" className="hero-container">
            <div className="hero-container__info-block">
                <span className='title__span'>Full Stack Developer</span>
                <h1 className='info-block__title'>Tomás Ríos Vargas</h1>
                <p className='info-block__text'>Bienvenido a mi portafolio! Encuentra aquí toda la información relacionada con mi perfil como desarrollador; las tecnologías que manejo y mi experiencia en proyectos personales como Full Stack.<br></br> ¡Descarga mi CV y contáctame ahora!</p>
                <span className='info-block__copy-title'>E-mail</span>
                <div className='info-block__copy-box'>
                    <p className='copy-box__text'>tomasrv123@gmail.com</p>
                    <div className='copy-box__icon'>
                        <Unicons.UilCopy />
                    </div>
                </div>
                <div className='info-block__bottom-element'>
                    <button className='bottom-element__button' onClick={handleClickScroll}>
                        Comencemos!
                    </button>
                </div>
            </div>
            <div className='hero-container__img-block'>
                <div className='img-block__img'></div>
            </div>
            <div className='hero-container__icons'>
                <div className='icons__block'>
                    <Unicons.UilLinkedin />
                </div>
                <div className='icons__block'>
                    <Unicons.UilGithubAlt />
                </div>
                <div className='icons__block'>
                    <Unicons.UilFacebookF />
                </div>
                <p className='icons__text'>Medellin | Colombia</p>
            </div>
            
        </div>
    )
}

export default Hero