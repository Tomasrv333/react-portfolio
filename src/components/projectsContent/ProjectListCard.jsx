import { FaGithub, FaFigma } from "react-icons/fa"

const ProjectListCard = (props) => {
  return (
    <div className="projectListCard__content">
        <div className="projectListCard__img"
            style={{
                backgroundImage: `url(${props.img})`
            }}
        ></div>
        <div className="projectListCard__info">
            <span className="projectListCard__category">{props.category}</span>
            <h3 className="projectListCard__title">{props.title}</h3>
            <div className="projectListCard__links">
                <button className="button--primary">Try Now</button>
                <a href=""><FaGithub size={24}/></a>
                <a href=""><FaFigma size={24}/></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectListCard