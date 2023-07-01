import ProjectCard from "../../../components/ProjectCard"
import { FaArrowRight } from 'react-icons/fa'

const HomeProjects = () => {
  return (
    <section id="projects" className='container'>
      <h2 className="projects__title">My Projects</h2>
      <div className="projectsCards__content">
        <ProjectCard
          img=""
          alt=""
          description="Streamline your life effortlessly: the ultimate online solution for managing your tasks and maximizing productivity."
          title="Task Management"
          category="Web Application"
          deploy=""
          reposity=""
          variant="primary"
        />
        <ProjectCard
          img=""
          alt=""
          description="Streamline your life effortlessly: the ultimate online solution for managing your tasks and maximizing productivity."
          title="Task Management"
          category="Web Application"
          deploy=""
          reposity=""
          variant="secondary"
        />
        <ProjectCard
          img=""
          alt=""
          description="Streamline your life effortlessly: the ultimate online solution for managing your tasks and maximizing productivity."
          title="Task Management"
          category="Web Application"
          deploy=""
          reposity=""
          variant="primary"
        />
      </div>
      <a href="/projects" className="more-link">View All <FaArrowRight size={14}/></a>
    </section>
  )
}

export default HomeProjects