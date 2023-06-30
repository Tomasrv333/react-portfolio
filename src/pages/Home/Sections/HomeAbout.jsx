import EducationCard from "../../../components/EducationCard"
import TechSkill from "../../../components/TechSkill"
import FocusCheck from "../../../components/homeAbout/focusCheck"
import JavascriptIcon from '../../../assets/Icons/languages/Javascript.svg'
import PythonIcon from '../../../assets/Icons/languages/Python.svg'
import RubyIcon from '../../../assets/Icons/languages/Ruby.svg'
import MysqlIcon from '../../../assets/Icons/languages/MySQL.svg'
import MongoIcon from '../../../assets/Icons/languages/Mongo.svg'
import ExpressIcon from '../../../assets/Icons/languages/Express.svg'
import NodeIcon from '../../../assets/Icons/languages/Node.svg'
import DjangoIcon from '../../../assets/Icons/languages/Django.svg'
import ReactIcon from '../../../assets/Icons/languages/React.svg'
import AngularIcon from '../../../assets/Icons/languages/Angular.svg'
import BootstrapIcon from '../../../assets/Icons/languages/Bootstrap.svg'
import JavaIcon from '../../../assets/Icons/languages/Java.svg'
import GithubIcon from '../../../assets/Icons/languages/Github.svg'
import FigmaIcon from '../../../assets/Icons/languages/Figma.svg'
import SlackIcon from '../../../assets/Icons/languages/Slack.svg'
import NotionIcon from '../../../assets/Icons/languages/Notion.svg'
import OfficeIcon from '../../../assets/Icons/languages/Office.svg'

const HomeAbout = () => {
  return (
    <section className="container">
        <h2 className="about__title">About</h2>
        <div className="about__content">  
            <article className="focus__content">
                <h3>Work Focus</h3>
                <div className="focus__frame">
                    <div className="focus__frame-top">
                        <p>“I always want to offer the best quality with my work and projects”</p>
                    </div>
                    <div className="focus__frame-list">
                        <FocusCheck description="Understand the project requirements."/>
                        <FocusCheck description="Establish effective communication."/>
                        <FocusCheck description="Plan and organize work."/>
                        <FocusCheck description="Develop in iterative stages."/>
                        <FocusCheck description="Maintain a clean and documented code."/>
                        <FocusCheck description="Extensive testing."/>
                        <FocusCheck description="Provide support and follow-up."/>
                    </div>
                </div>
            </article>
            <article className="about__skill-content">
                <h3>Technical Skills</h3>
                <div className="about__skill-frame">
                    <div className="skill__list">
                        <TechSkill
                            icon={PythonIcon}
                            alt="Python"
                            name="Python"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={JavascriptIcon}
                            alt="Javascript"
                            name="Javascript"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={JavaIcon}
                            alt="Java"
                            name="Java"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={RubyIcon}
                            alt="Ruby"
                            name="Ruby"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={MysqlIcon}
                            alt="MySQL"
                            name="MySQL"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={MongoIcon}
                            alt="MongoDB"
                            name="MongoDB"
                            variant="horizontal"
                        />
                    </div>
                    <div className="skill__list">
                        <TechSkill
                            icon={DjangoIcon}
                            alt="Django"
                            name="Django"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={NodeIcon}
                            alt="Node"
                            name="Node"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={ExpressIcon}
                            alt="Express"
                            name="Express"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={ReactIcon}
                            alt="React"
                            name="React"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={AngularIcon}
                            alt="Angular"
                            name="Angular"
                            variant="horizontal"
                        />
                        <TechSkill
                            icon={BootstrapIcon}
                            alt="Bootstrap"
                            name="Bootstrap"
                            variant="horizontal"
                        />
                    </div>
                </div>
                <div className="about__skill-frame about__skill-frame--vertical">
                    <TechSkill
                        icon={FigmaIcon}
                        alt="Figma"
                        name="Figma"
                        variant="vertical"
                    />
                    <TechSkill
                        icon={GithubIcon}
                        alt="Github"
                        name="Github"
                        variant="vertical"
                    />
                    <TechSkill
                        icon={OfficeIcon}
                        alt="Office"
                        name="Office"
                        variant="vertical"
                    />
                    <TechSkill
                        icon={NotionIcon}
                        alt="Notion"
                        name="Notion"
                        variant="vertical"
                    />
                    <TechSkill
                        icon={SlackIcon}
                        alt="Slack"
                        name="Slack"
                        variant="vertical"
                    />
                </div>
            </article>
            <article className="about__education-content">
                <h3>Education</h3>
                <div className="about__education-cards">
                    <EducationCard
                        title="Systems Engineer "
                        info="Fundación Universitaria Luis Amigo / 2020"
                        status="In progress"
                    />
                    <EducationCard
                        title="Full Stack Development"
                        info="DevF / 2022"
                        status="Completed"
                    />
                    <EducationCard
                        title="Soft Skills for the 21st Century"
                        info="ProTalento / 2022"
                        status="Completed"
                    />
                    <EducationCard
                        title="Tech English"
                        info="English4"
                        status="Completed"
                    />
                </div>
            </article>
        </div>
    </section>
  )
}

export default HomeAbout