import { FaGithub } from 'react-icons/fa'
import ImgProject from '../assets/ProjectImg.svg'

const ProjectCard = (props) => {
  return (
    <article className={`projectsHomeCard__content projectsHomeCard__content--${props.variant === 'secondary' ? 'secondary' : 'primary'}`}>
      <div className="projectsHomeCard__info-content">
        <p className='projectsHomeCard__description'>{props.description}</p>
        <div className="projectsHomeCard__title-frame">
          <h4>{props.title}</h4>
          <span>/</span>
          <p>{props.category}</p>
        </div>
        <div className="projectsHomeCard__link-frame">
          <button className="projectsHomeCard__button button--primary">Try Now</button>
          <FaGithub size={24} />
        </div>
      </div>
      <div className="projectsHomeCard__img-content">
        <img src={ImgProject} alt="web application" />
      </div>
    </article>
  )
}

export default ProjectCard