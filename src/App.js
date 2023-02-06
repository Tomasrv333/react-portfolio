import React from 'react'
import Header from './components/Header';
import { themeContext } from './context/context'
import { useContext } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import 'animate.css/animate.min.css'

const App = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App