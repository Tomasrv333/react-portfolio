import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import { Box, useTheme } from "@mui/material"
import { tokens } from "../theme";

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Box
                backgroundColor={theme.palette.mode === 'dark' ? (
                    colors.darkAccent[100]
                ) : (
                    colors.darkAccent[800]
                )}
            >
                <Hero />
                <About />
                <Projects />
                <Contact />
            </Box>
        </>
    )
}

export default Home