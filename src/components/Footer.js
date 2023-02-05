import React from 'react'
import * as Unicons from '@iconscout/react-unicons'

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
                <div className='info-footer__block'>
                    <h4 className='block-footer__title'>Navegación</h4>
                    <ul className='block-footer__list'>
                        <li>Home</li>
                        <li>Acerca de</li>
                        <li>Proyectos</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className='info-footer__block'>
                    <h4 className='block-footer__title'>Proyectos</h4>
                    <ul className='block-footer__list'>
                        <li>Mern Social Media App</li>
                        <li>Mern Delivery App</li>
                        <li>Mern E-commerce App</li>
                        <li>Mern Task App</li>
                    </ul>
                </div>
                <div className='info-footer__block'>
                    <h4 className='block-footer__title'>Informacion</h4>
                    <p className='block-footer__text'>Mi nombre es Tomas, vivo en Medellin / Colombia y soy desarrollador Full Stack</p>
                </div>
            </div>

            {/* <div className='contactIcons__content'>
                <a className='icon__block' onClick={() => {
                    if (navigator.clipboard.writeText(Links.phone)) {
                        alert('Numero de contacto copiado!')
                    }
                    
                }}>
                    <Unicons.UilPhoneAlt />
                </a>
                <a className='icon__block' onClick={() => {
                    if (navigator.clipboard.writeText(Links.gmail)) {
                        alert('Correo copiado!')
                    }
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
                <a className='icon__block' href={Links.instagram} target='_blank'>
                    <Unicons.UilInstagram />
                </a>
            </div> */}
            <div className='footer__legal-block'>
                <a>©2023 | Todos los derechos reservados</a>
            </div>
        </footer>
    )
}

export default Footer