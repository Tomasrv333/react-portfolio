import Icons from '.'

const About = () => {
    return (
        <section id="about" className="about__container">
            <h1>About me</h1>

            <div className="about__content">
                <div className="about__info-content">
                    <p>¡Hola! ✌ Soy un programador Full Stack con casi 2 años de experiencia en el desarrollo y el despliegue de sitios web utilizando varias tecnologías de Código abierto como NodeJs, así como otros sistemas de gestión de contenido como Wordpress. Además, he trabajado en diferentes proyectos comerciales para algunos clientes como Freelance utilizando más que todo tecnologías Front-End como Sass, Bootstrap y ReactJs. </p>
                </div>
                <div className="about__profile-content">
                    <div className='img-profile__content'>
                        {/* <img className='img-profile' src='/images/img-profile.jpeg'></img> */}
                        <div>
                            <button>Descarga CV</button>
                        </div>
                    </div>
                </div>
                <div className="about__skill-content">
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-js.svg"></img>
                        <p>Javascript</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-node.svg"></img>
                        <p>Node</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-express.svg"></img>
                        <p>Express</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-react.svg"></img>
                        <p>React</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-mongo.svg"></img>
                        <p>Mongo</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-mysql.svg"></img>
                        <p>MySQL</p>
                    </div>
                    <div className='skill-card'>
                        <img className='about__icon' src="/images/icons/icon-postgresql.svg"></img>
                        <p>Postgresql</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About