import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
    return (
        <section id="projects" className="projects__container">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <h1 className="projects__title">Proyectos</h1>
                <div className="projects__content">
                    <div className='projects__card'>
                        <Unicons.UilFolderOpen />
                        <h3 className='card__title'>Task App</h3>
                        <p className='card__text'>
                            Aplicacion de tareas con metodologia CRUD
                        </p>
                        <img className='card__img' src='/images/project-1.png'></img>
                        <span className='card__span'>NodeJs | Express | ReactJs | MongoDB</span>
                        <div className='card__button-block'>
                            <button className='button-block--outline'>Despliegue</button>
                            <button className='button-block--fill'><Unicons.UilGithubAlt/></button>
                        </div>
                    </div>
                    <div className='projects__card'>
                        <Unicons.UilFolderOpen />

                    </div>
                    <div className='projects__card'>
                        <Unicons.UilFolderOpen />

                    </div>
                    <div className='projects__card'>
                        <Unicons.UilFolderOpen />

                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Projects