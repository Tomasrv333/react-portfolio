import * as Unicons from '@iconscout/react-unicons'
import CardProject from '../CardProject'

const Projects = () => {
    return (
        <section id="projects" className="projects__container">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__content">
                <div className="projects__info-side">
                    <div className='info-side__img'>

                    </div>
                    <h2>Hola!</h2>
                    <p>Explora los diferentes proyectos que he realizado haciendo uso de tecnologias pertenecientes al MERN Stack</p>
                    <button>Github<Unicons.UilGithub /></button>
                </div>
                <div className='projects__template-side'>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
                
            </div>
        </section>
    )
}

export default Projects