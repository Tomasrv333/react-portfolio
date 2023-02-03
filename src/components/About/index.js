import * as Unicons from '@iconscout/react-unicons'

const About = () => {
    return (
        <section id="about" className="about-container"
        >
            <div className="about-container__l-block">
                <h1 className='l-block__title'>Acerca de mi</h1>
                <p className="l-block__text">¡Hola! ✌ Soy un programador Full Stack con casi 2 años de experiencia en el desarrollo y el despliegue de sitios web utilizando varias tecnologías de Código abierto como NodeJs, así como otros sistemas de gestión de contenido como Wordpress. Además, he trabajado en diferentes proyectos comerciales para algunos clientes como Freelance utilizando más que todo tecnologías Front-End como Sass, Bootstrap y ReactJs. </p>
                <h3 className="l-block__subtitle">Habilidades</h3>
                
                <div className="l-block__skill-content">
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-js.svg"></img>
                        <p className='skill-card__text'>Javascript</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-node.svg"></img>
                        <p className='skill-card__text'>Node</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-express.svg"></img>
                        <p className='skill-card__text'>Express</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-react.svg"></img>
                        <p className='skill-card__text'>React</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-mongo.svg"></img>
                        <p className='skill-card__text'>Mongo</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-mysql.svg"></img>
                        <p className='skill-card__text'>MySQL</p>
                    </div>
                    <div className='l-block__skill-card'>
                        <img className='skill-card__icon' src="/images/icons/icon-postgresql.svg"></img>
                        <p className='skill-card__text'>Postgresql</p>
                    </div>
                </div>
            </div>

            <div className="about-container__r-block">
                <div className='r-block__img'>
                    {/* <img className='img-profile' src='/images/img-profile.jpeg'></img> */}
                </div>

                <span className='r-block__span'>Medellín / Colombia</span>
                
                <div className='r-block__icons'>
                    <div className='icons__block'>
                        <Unicons.UilLinkedin />
                    </div>
                    <div className='icons__block'>
                        <Unicons.UilGithubAlt />
                    </div>
                    <div className='icons__block'>
                        <Unicons.UilFacebookF />
                    </div>
                </div>

                <button className='r-block__button'>Descarga CV</button>

            </div>

            

        </section>
    )
}

export default About