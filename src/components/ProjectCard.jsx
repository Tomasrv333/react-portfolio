import { FaGithub, FaFigma } from 'react-icons/fa'

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
          <a target='_blank' href={props.repository}><FaGithub size={24} /></a>
          <a target='_blank' href={props.figma}><FaFigma size={24} /></a>
        </div>
      </div>
      <div className="projectsHomeCard__img-content">
        <div className='projectsHomeCard__img'
          style={{
            backgroundImage: `url(${props.img})`
          }}
        ></div>
      </div>
    </article>
  )
}

export default ProjectCard