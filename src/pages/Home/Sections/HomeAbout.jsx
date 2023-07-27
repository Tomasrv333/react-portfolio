import EducationCard from "/src/components/EducationCard"
import TechSkill from "/src/components/TechSkill"
import FocusCheck from "/src/components/homeAbout/FocusCheck.jsx"
import JavascriptIcon from '/src/assets/Icons/languages/Javascript.svg'
import PythonIcon from '/src/assets/Icons/languages/Python.svg'
import RubyIcon from '/src/assets/Icons/languages/Ruby.svg'
import MysqlIcon from '/src/assets/Icons/languages/MySQL.svg'
import MongoIcon from '/src/assets/Icons/languages/Mongo.svg'
import ExpressIcon from '/src/assets/Icons/languages/Express.svg'
import NodeIcon from '/src/assets/Icons/languages/Node.svg'
import DjangoIcon from '/src/assets/Icons/languages/Django.svg'
import ReactIcon from '/src/assets/Icons/languages/React.svg'
import AngularIcon from '/src/assets/Icons/languages/Angular.svg'
import BootstrapIcon from '/src/assets/Icons/languages/Bootstrap.svg'
import JavaIcon from '/src/assets/Icons/languages/Java.svg'
import GithubIcon from '/src/assets/Icons/languages/Github.svg'
import FigmaIcon from '/src/assets/Icons/languages/Figma.svg'
import SlackIcon from '/src/assets/Icons/languages/Slack.svg'
import NotionIcon from '/src/assets/Icons/languages/Notion.svg'
import OfficeIcon from '/src/assets/Icons/languages/Office.svg'
import { useTranslation } from "react-i18next"

const HomeAbout = () => {
    const {t} = useTranslation()

  return (
    <section id="about" className="container">
        <h2 className="about__title">{t('about.title')}</h2>
        <div className="about__content">  
            <article className="focus__content">
                <h3>{t('about.column1.title')}</h3>
                <div className="focus__frame">
                    <div className="focus__frame-top">
                        <p>{t('about.column1.description')}</p>
                    </div>
                    <div className="focus__frame-list">
                        <FocusCheck description={t('about.column1.list.listItem1')}/>
                        <FocusCheck description={t('about.column1.list.listItem2')}/>
                        <FocusCheck description={t('about.column1.list.listItem3')}/>
                        <FocusCheck description={t('about.column1.list.listItem4')}/>
                        <FocusCheck description={t('about.column1.list.listItem5')}/>
                        <FocusCheck description={t('about.column1.list.listItem6')}/>
                        <FocusCheck description={t('about.column1.list.listItem7')}/>
                    </div>
                </div>
            </article>
            <article className="about__skill-content">
                <h3>{t('about.column2.title')}</h3>
                <div className="about__skill-group">
                    <div className="about__skill-frame about__skill-frame--up">
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
                        <div className="skill__line">

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
                    <div className="about__skill-frame about__skill-frame--down">
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
                </div>
            </article>
            <article className="about__education-content">
                <h3>{t('about.column3.title')}</h3>
                <div className="about__education-cards">
                    <EducationCard
                        title={t('about.column3.card1.title')}
                        info={t('about.column3.card1.entity')}
                        status={t('about.column3.status.inProgress')}
                    />
                    <EducationCard
                        title={t('about.column3.card2')}
                        info="DevF / 2022"
                        status={t('about.column3.status.completed')}
                    />
                    <EducationCard
                        title={t('about.column3.card3')}
                        info="ProTalento / 2022"
                        status={t('about.column3.status.completed')}
                    />
                    <EducationCard
                        title={t('about.column3.card4')}
                        info="English4"
                        status={t('about.column3.status.completed')}
                    />
                </div>
            </article>
        </div>
    </section>
  )
}

export default HomeAbout