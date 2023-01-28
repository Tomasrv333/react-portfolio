import * as Unicons from '@iconscout/react-unicons'
import CardProject from '../CardProject'

const Projects = () => {
    return (
        <section id="projects" className="projects__container">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__content">
                <div className='projects__template-side'>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
                <div className='projects__info'>
                    <div className='info__img'>

                    </div>

                    <div className='info__text'>
                        <h3>Revisa mi perfil en Github!</h3>
                        <button>Github<Unicons.UilGithub/></button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects