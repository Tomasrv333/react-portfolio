import ProjectCard from "../../../components/ProjectCard"
import EcommerceImg from "../../../assets/projects/ProjectEcommerce.svg"
import ScreenshotTaskApp from "../../../assets/projects/screenshot-taskApp.svg"
import ScreenshotPokedex from "../../../assets/projects/screenshot-pokedex.jpg"
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from "react-i18next"

const HomeProjects = () => {
  const {t} = useTranslation();

  return (
    <section id="projects" className='container'>
      <h2 className="projects__title">{t('projects.title')}</h2>
      <div className="projectsHomeCards__content">
        <ProjectCard
          img={EcommerceImg}
          alt={t('projects.card1.title')}
          description={t('projects.card1.description')}
          tech="ReactJs, PostgreSQL, NodeJs, ExpressJs, Tailwind"
          title={t('projects.card1.title')}
          category={t('projects.card.types.webApp')}
          deploy=""
          repository="https://github.com/Tomasrv333/mern-ecommerce"
          figma="https://www.figma.com/file/ywh1GfMudI4nRB91fthf5d/E-commerce?type=design&mode=design&t=1nk1c28ZuqYisazu-0"
          variant="primary"
        />
        <ProjectCard
          img={ScreenshotTaskApp}
          alt={t('projects.card1.title')}
          description={t('projects.card1.description')}
          tech="ReactJs, NodeJs, ExpressJs, MongoDb, Sass"
          title={t('projects.card1.title')}
          category={t('projects.card.types.webApp')}
          deploy=""
          repository="https://github.com/Tomasrv333/mern-tasksApp"
          figma=""
          variant="secondary"
        />
        <ProjectCard
          img={ScreenshotPokedex}
          alt={t('projects.card1.title')}
          description={t('projects.card1.description')}
          tech="ReactJs, Pokedex Api, Css"
          title={t('projects.card1.title')}
          category={t('projects.card.types.website')}
          deploy=""
          repository="https://github.com/Tomasrv333/mern-ecommerce"
          figma=""
          variant="primary"
        />
      </div>
      <a href="/projects" className="more-link">{t('projects.view')}<FaArrowRight size={14}/></a>
    </section>
  )
}

export default HomeProjects