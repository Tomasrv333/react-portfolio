import { FaGithub } from 'react-icons/fa'
import ImgProject from '../assets/ProjectImg.svg'

const ProjectCard = (props) => {
  return (
    <article className="project__content">
      <div className="project__info-content">
        <p className='project__description'>{props.description}</p>
        <div className="project__title-frame">
          <h4>{props.title}</h4>
          <span>/</span>
          <p>{props.category}</p>
        </div>
        <div className="projects__link-frame">
          <button className="project__button button--primary">Try Now</button>
          <FaGithub size={24} />
        </div>
      </div>
      <div className="project__img-content">
        <img src={ImgProject} alt="web application" />
      </div>
    </article>
  )
}

export default ProjectCard