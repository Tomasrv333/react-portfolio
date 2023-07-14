import ProjectCard from "../../../components/ProjectCard"
import EcommerceImg from "../../../assets/projects/ProjectEcommerce.svg"
import { FaArrowRight } from 'react-icons/fa'

const HomeProjects = () => {
  return (
    <section id="projects" className='container'>
      <h2 className="projects__title">My Projects</h2>
      <div className="projectsHomeCards__content">
        <ProjectCard
          img={EcommerceImg}
          alt=""
          description="A revolutionary ecommerce that gives you instant access to a wide range of products from the comfort of your home, transforming the way you shop and opening up a world of limitless business possibilities."
          title="E-commerce"
          category="Web Application"
          deploy=""
          repository="https://github.com/Tomasrv333/mern-ecommerce"
          figma="https://www.figma.com/file/ywh1GfMudI4nRB91fthf5d/E-commerce?type=design&mode=design&t=1nk1c28ZuqYisazu-0"
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
          figma=""
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
          figma=""
          variant="primary"
        />
      </div>
      <a href="/projects" className="more-link">View All <FaArrowRight size={14}/></a>
    </section>
  )
}

export default HomeProjects