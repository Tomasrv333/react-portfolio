import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Hero = () => {
    return (
        <div id="home" name="home" className="hero-container">
            <div className="hero-container__info-block">
                <span className='title__span'>Full Stack Developer</span>
                <h1 className='info-block__title'>Tomás Ríos Vargas</h1>
                <p className='info-block__text'>Soy desarrollador Full Stack y llevo 2 años trabajando en el desarrollo de sitios y aplicaciones web a traves de diferentes lenguajes y frameworks como JavaScript, NodeJs, Express, ReactJs, MongoDb y MySQL</p>
                <div className='info-block__bottom-element'>
                    <button className='bottom-element__button'>
                        Comencemos!
                    </button>
                </div>
            </div>
            <div className='hero-container__img-block'>
                <img className='img-block__img' src='/images/background-img.png'></img>
            </div>
            
        </div>
    )
}

export default Hero