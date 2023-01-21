import React from 'react'
import Header from './components/Header';
import { themeContext } from './context/context'
import { useContext } from 'react';

const App = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <>
            <Header />
            <div>App</div>
        </>
    )
}

export default App