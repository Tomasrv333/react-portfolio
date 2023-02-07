import * as Unicons from '@iconscout/react-unicons'

const Hero = () => {
    return (
        <div id="home" name="home" className="hero-container">
            <div className="hero-container__info-block">
                {/* <span className='info-block__span'>Hola! Mi nombre es</span> */}
                <h1 className='info-block__title'>Tomás Rios Vargas</h1>
                <div className='info-block__tag'>
                    <hr className='tag__hr'></hr>
                    <span className='tag__span'>Desarrollador Full Stack</span>
                    <hr className='tag__hr'></hr>
                </div>
                <p className='info-block__text'>Soy desarrollador Full Stack y llevo 2 años trabajando en el desarrollo de sitios y aplicaciones web a traves de diferentes lenguajes y frameworks como JavaScript, NodeJs, Express, ReactJs, MongoDb y MySQL</p>
                <div className='info-block__bottom-element'>
                    <button className='bottom-element__button'>
                        Comencemos!
                    </button>
                    <span className='bottom-element__span'>Desliza hacia abajo<Unicons.UilMouseAlt /></span>
                </div>
            </div>
        </div>
    )
}

export default Hero