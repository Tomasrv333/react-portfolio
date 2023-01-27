import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Home = () => {
    return (
        <>
            <Hero />
            <main className="main__container">
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default Home