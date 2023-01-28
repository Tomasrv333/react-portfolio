import React from 'react'
import Copy from "react-copy-to-clipboard"
import * as Unicons from '@iconscout/react-unicons'
import CopyToClipboard from 'react-copy-to-clipboard';

const Footer = () => {

    const Links = {
        gmail: 'tomasrv123@gmail.com',
        phone: '+573214332191',
        github: 'https://github.com/Tomasrv333',
        linkedin: 'https://www.linkedin.com/in/tomasrvar/',
        facebook: 'https://www.facebook.com/tomasrv333',
        instagram: 'https://www.instagram.com/tomas_rios3/'
    }

    return (
        <footer className='footer__container'>
            <div className='footer__info'>
            <h3>Tomas Rios Vargas</h3>
                    <p>Desarrollador Full Stack con casi 2 años de experiencia en el desarrollo de sitios y aplicaciones web utilizando diferentes tecnologias como Javascript, Nodejs, Express, React o MongoDB</p>
            </div>
            <div className='contactIcons__content'>
                <a className='icon__block' onClick={() => {
                    navigator.clipboard.writeText(Links.phone)
                }}>
                    <Unicons.UilPhoneAlt />
                </a>
                <a className='icon__block' onClick={() => {
                    navigator.clipboard.writeText(Links.gmail)
                }}>
                    <Unicons.UilEnvelopeAlt />
                </a>
                <a className='icon__block' href={Links.github} target='_blank'>
                    <Unicons.UilGithubAlt />
                </a>
                <a className='icon__block' href={Links.linkedin} target='_blank'>
                    <Unicons.UilLinkedinAlt />
                </a>
                <a className='icon__block' href={Links.facebook} target='_blank'>
                    <Unicons.UilFacebookF />
                </a>
                <a className='icon__block' href={Links.instagrama} target='_blank'>
                    <Unicons.UilInstagram />
                </a>
            </div>
            <div className='legalTerms__content'>
                <a>©2023 | Todos los derechos reservados</a>
            </div>
        </footer>
    )
}

export default Footer