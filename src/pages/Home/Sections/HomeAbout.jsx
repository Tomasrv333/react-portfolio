import EducationCard from "../../../components/EducationCard"
import TechSkill from "../../../components/TechSkill"

const HomeAbout = () => {
  return (
    <section className="container">
        <h2 className="about__title">About</h2>
        <div className="about__content">  
            <article>
                <h3>Work Focus</h3>
                <div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </article>
            <article>
                <h3>Technical Skills</h3>
                <div>
                    <div>
                        <TechSkill
                            icon=""
                            alt="Python"
                            name="Python"
                        />
                        <TechSkill
                            icon=""
                            alt="Javascript"
                            name="Javascript"
                        />
                        <TechSkill
                            icon=""
                            alt="Java"
                            name="Java"
                        />
                        <TechSkill
                            icon=""
                            alt="Ruby"
                            name="Ruby"
                        />
                        <TechSkill
                            icon=""
                            alt="MySQL"
                            name="MySQL"
                        />
                        <TechSkill
                            icon=""
                            alt="MongoDB"
                            name="MongoDB"
                        />
                    </div>
                    <div>
                        <TechSkill
                            icon=""
                            alt="Django"
                            name="Django"
                        />
                        <TechSkill
                            icon=""
                            alt="Node"
                            name="Node"
                        />
                        <TechSkill
                            icon=""
                            alt="Express"
                            name="Express"
                        />
                        <TechSkill
                            icon=""
                            alt="React"
                            name="React"
                        />
                        <TechSkill
                            icon=""
                            alt="Angular"
                            name="Angular"
                        />
                        <TechSkill
                            icon=""
                            alt="Bootstrap"
                            name="Bootstrap"
                        />
                    </div>
                </div>
                <div>

                </div>
            </article>
            <article>
                <h3>Education</h3>
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
            </article>
        </div>
    </section>
  )
}

export default HomeAbout