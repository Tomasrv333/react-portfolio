import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
    return (
        <section id="projects" className="projects__container">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <h1 className="projects__title">Proyectos</h1>
                <div className="projects__content">
                    <div className='projects__card'>
                        <div className='card__img'></div>
                        <div className='card__box-text'>
                            <div className='box-text__block-title'>
                                <Unicons.UilFolderOpen />
                                <h3 className='box-text__title'>Task App</h3>
                            </div>
                            <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
                            <p className='box-text__p'>
                                Aplicacion de tareas con metodologia CRUD
                            </p>
                        </div>
                        
                        <button className='card__button'>Ver</button>
                    </div>
                    <div className='projects__card'>
                        <div className='card__img'></div>
                        <div className='card__box-text'>
                            <div className='box-text__block-title'>
                                <Unicons.UilFolderOpen />
                                <h3 className='box-text__title'>E-commerce</h3>
                            </div>
                            <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
                            <p className='box-text__p'>
                                Aplicacion de tareas con metodologia CRUD
                            </p>
                        </div>
                        
                        <button className='card__button'>Ver</button>
                    </div>
                    <div className='projects__card'>
                        <div className='card__img'></div>
                        <div className='card__box-text'>
                            <div className='box-text__block-title'>
                                <Unicons.UilFolderOpen />
                                <h3 className='box-text__title'>Delivery App</h3>
                            </div>
                            <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
                            <p className='box-text__p'>
                                Aplicacion de tareas con metodologia CRUD
                            </p>
                        </div>
                        
                        <button className='card__button'>Ver</button>
                    </div>
                    <div className='projects__card'>
                        <div className='card__img'></div>
                        <div className='card__box-text'>
                            <div className='box-text__block-title'>
                                <Unicons.UilFolderOpen />
                                <h3 className='box-text__title'>Social Networking</h3>
                            </div>
                            <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
                            <p className='box-text__p'>
                                Aplicacion de tareas con metodologia CRUD
                            </p>
                        </div>
                        
                        <button className='card__button'>Ver</button>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Projects