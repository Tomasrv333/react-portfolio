import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
    return (
        <section id="projects" className="projects__container">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <h1 className="projects__title">Proyectos</h1>
                <div className="projects__content">
                    <div className='projects__card--main'>

                    </div>
                    <div className='projects__card--info'>
                        <h3>Descubre todos mis proyectos!</h3>
                        <p>Descubre un poco de mi trabajo y experiencia durante los ultimos años en donde hago uso de  tecnologias para el desarrollo de aplicaciones web. </p>
                        <button>Github<Unicons.UilGithubAlt /></button>
                    </div>
                    <div className='projects__card'>

                    </div>
                    <div className='projects__card'>

                    </div>
                    <div className='projects__card--more'>

                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Projects