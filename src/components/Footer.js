import React from 'react'
import Link from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <footer className='footer__container'>
            <div className='footer__info'>
            <h3>Tomas Rios Vargas</h3>
                    <p>Desarrollador Full Stack con casi 2 años de experiencia en el desarrollo de sitios y aplicaciones web utilizando diferentes tecnologias como Javascript, Nodejs, Express, React o MongoDB</p>
            </div>
            <div className='contactIcons__content'>
                <div className='icon__block'>
                    <Unicons.UilEnvelopeAlt />
                </div>
                <div className='icon__block'>
                    <Unicons.UilGithubAlt />
                </div>
                <div className='icon__block'>
                    <Unicons.UilLinkedinAlt />
                </div>
                <div className='icon__block'>
                    <Unicons.UilFacebookF />
                </div>
                <div className='icon__block'>
                    <Unicons.UilInstagram />
                </div>
            </div>
            <div className='legalTerms__content'>
                <a>©2023 | Todos los derechos reservados</a>
            </div>
        </footer>
    )
}

export default Footer