import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
    return (
        <section id="contact" className="contact__container">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className="container__contact-info">
                    <h1 className="contact-info__title">Informacion de Contacto</h1>
                    <p className="contact-info__text">Contactame ahora! Es momento de realizar una nueva conexion. Puedes enviarme un mensaje a traves de mis diferentes canales de comunicacion o ingresa tus datos de contacto para comunicarme contigo de inmediato!   </p>
                    <h2 className="contact-info__subtitle">Formulario</h2>
                    <form>
                        <input placeholder="Nombre"></input>
                        <input placeholder="Direccion de correo"></input>
                        <input placeholder="Mensaje"></input>
                        <button className="contact-info__button">Enviar</button>
                    </form>
                </div>
                <div>

                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Contact