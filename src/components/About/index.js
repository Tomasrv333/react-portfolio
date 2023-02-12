import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
    return (
        <section id="about" className="about-container"
        >
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className='about-container__content'>
                    <div className="about-container__l-block">
                            <h2 className='l-block__subtitle'>Acerca de mi</h2>
                            <div className='content__ability'>
                            <p className="l-block__text">Con mis conocimientos en el desarrollo web he podido crear APIs que me han permitido transportar peticiones y respuestas entre la base de datos, el backend y el frontend con la finalidad de construir aplicaciones web dinámicas y amigables para el cliente, adicionalmente, tengo experiencia manipulando bases de datos SQL y noSQL, entre otras herramientas tales como Github para el control de versiones o Figma para el diseño de Mockups.</p>
                            <div className='ability__block'>
                                {/* // TODO: Crear cards con las habilidades como full-stack: Apis, servidores y arquitectura */}
                                <div className='card__info'>
                                    <h4>UX / UI</h4>
                                    <p>Experiencia e interfaz de usuario</p>
                                </div>
                                <div className='card__info'>
                                    <h4>Rest APIs</h4>
                                    <p>Interfaz de programación</p>
                                </div>
                                <div className='card__info'>
                                    <h4>Performance</h4>
                                    <p>Testing & Debugging</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-container__r-block">
                        <h2 className='r-block__subtitle'>Mis habilidades</h2>
                        <p className='r-block__text'>Tengo buen manejo de Javascript y sus diferentes frameworks y tecnologías relacionadas con el stack MERN (NodeJs, Express, React y MongoDB).</p>

                        <div className='content__skill'>
                            <div className='skill__box'>
                                <div className='skill__icon'>
                                    <h4 className='skill__title'>Front-end</h4>
                                    <Unicons.UilLaptop />
                                </div>
                                <div className='skill__name'>
                                    <ul>
                                        <li><img src='/images/icons/icon-js.svg'/>Javascript</li>
                                        <li><img src='/images/icons/icon-react.svg'/>ReactJs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='skill__box'>
                                <div className='skill__icon'>
                                    <h4 className='skill__title'>Back-end</h4>
                                    <Unicons.UilServer />
                                </div>
                                <div className='skill__name'>
                                    <ul>
                                        <li><img src='/images/icons/icon-node.svg'/>NodeJs</li>
                                        <li><img src='/images/icons/icon-express.svg'/>ExpressJs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='skill__box'>
                                <div className='skill__icon'>
                                    <h4 className='skill__title'>Database</h4>
                                    <Unicons.UilDatabase />
                                </div>
                                <div className='skill__name'>
                                    <ul>
                                        <li><img src='/images/icons/icon-mysql.svg'/>MySQL</li>
                                        <li><img src='/images/icons/icon-postgresql.svg'/>PostgreSQL</li>
                                        <li><img src='/images/icons/icon-mongo.svg'/>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default About