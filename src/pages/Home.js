import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Home = () => {
    return (
        <>
            <main className="main__container">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default Home