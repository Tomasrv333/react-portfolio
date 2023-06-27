import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Blog from './pages/Blog/Blog.jsx'
import NoPage from './pages/NoPage.jsx'
import './index.scss'
import Footer from './layouts/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='projects' element={<Projects/>} />
        <Route exact path='blog' element={<Blog/>} />
        <Route exact path='*' element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
