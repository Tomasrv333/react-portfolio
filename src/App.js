import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import 'animate.css/animate.min.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar />
                <Home />
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App