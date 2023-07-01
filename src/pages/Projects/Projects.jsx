import { FaArrowLeft } from "react-icons/fa"
import ProjectListCard from "../../components/projectsContent/ProjectListCard"
import ProjectImg from "../../assets/ProjectImg.svg"

const Projects = () => {
  return (
    <div className="container">
      <div className="projects__header-layout">
        <div className="projects__title">
          <a href="/"><FaArrowLeft/> Return</a>
          <span>/</span>
          <h4>All Projects</h4>
        </div>
        <div className="projects__sortBy">
          <span>Sort By</span>
          <select name="select" id="">
            <option value="data">Release Data</option>
            <option value="type">Project Type</option>
            <option value="popularity">Most Popularity</option>
          </select>
        </div>
      </div>
      <section className="projects__content">
        <ProjectListCard
          img={ProjectImg}
          alt=""
          title="Task Management"
          category="Web Application"          
        />
        <ProjectListCard
          img={ProjectImg}
          alt=""
          title="Task Management"
          category="Web Application"          
        />
        <ProjectListCard
          img={ProjectImg}
          alt=""
          title="Task Management"
          category="Web Application"  
        />
        <ProjectListCard
          img={ProjectImg}
          alt=""
          title="Task Management"
          category="Web Application"  
        />
      </section>
    </div>
  )
}

export default Projects