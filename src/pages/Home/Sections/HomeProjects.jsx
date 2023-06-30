import ProjectCard from "../../../components/ProjectCard"
import { FaArrowRight } from 'react-icons/fa'

const HomeProjects = () => {
  return (
    <section className='container'>
      <h2 className="projects__title">My Projects</h2>
      <div className="projects__content">
        <ProjectCard
          img=""
          alt=""
          description="Streamline your life effortlessly: the ultimate online solution for managing your tasks and maximizing productivity."
          title="Task Management"
          category="Web Application"
          deploy=""
          reposity=""
        />
        <ProjectCard
          img=""
          alt=""
          description=""
          title=""
          deploy=""
          reposity=""
        />
        <ProjectCard
          img=""
          alt=""
          description=""
          title=""
          deploy=""
          reposity=""
        />
      </div>
      <div className="projects__more-frame more-frame">
        <a href="" className="more-link">View All <FaArrowRight size={14}/></a>
      </div>
    </section>
  )
}

export default HomeProjects