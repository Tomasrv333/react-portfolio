import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useForm } from "react-hook-form";

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/daee79f0-a9b5-11ed-a31e-753411848f80';

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [ message, setMessage ] = useState('');
    
    const onSubmit = (data) => {
        console.log(data)

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 422) {
                    setMessage('Ya se ha enviado un mensaje con este correo')
                }

                if (response.status === 200) {
                    setMessage('Mensaje enviado!')
                    console.log(data)
                }
            })
            .then(() => {
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
    };

    return (
        <section id="contact" className="contact__container">
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className="container__contact-info">
                    <h1 className="contact-info__title">Informacion de Contacto</h1>
                    <p className="contact-info__text">Contactame ahora! Es momento de realizar una nueva conexion. Puedes enviarme un mensaje a traves de mis diferentes canales de comunicacion o ingresa tus datos de contacto para comunicarme contigo lo mas pronto!</p>
                    <h2 className="contact-info__subtitle">Formulario</h2>
                    
                    <form action='https://public.herotofu.com/v1/daee79f0-a9b5-11ed-a31e-753411848f80' method='post' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-input'>
                            <input
                                placeholder="Nombre" 
                                {...register("name", { required: true, minLength: 3 })}
                            />
                            {errors.name && errors.name.type === 'required' && (
                                <span className='error-contact'>Se require un nombre</span>
                            )}
                            {errors.name && errors.name.type === 'minLength' && (
                                <span className='error-contact'>El nombre no es valido</span>
                            )}
                        </div>
                        <div className='form-input'>
                            <input 
                                type='email'
                                name='email'
                                placeholder="Direccion de correo"
                                {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                            />
                            {errors.email && errors.email.type === 'required' && (
                                <span className='error-contact'>Se require un e-mail</span>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <span className='error-contact'>E-mail invalido</span>
                            )}
                        </div>
                        <div className='form-input'>
                            <input
                                type='text' 
                                name='message'
                                placeholder="Mensaje"
                                {...register("message", {required: true})}
                            />
                            {errors.message && errors.message.type === 'required' && (
                                <span className='error-contact'>Se require un mensaje
                                </span>
                            )}
                        </div>
                        {message && 
                            <div className='contact-info__status-text'>
                                <p>{message}</p>
                            </div>
                        }
                        <button type='submit' className="contact-info__button">Enviar</button>
                    </form>
                </div>
                <div>

                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Contact