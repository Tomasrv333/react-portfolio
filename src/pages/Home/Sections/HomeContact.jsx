import SocialMedia from "../../../components/SocialMedia"
import ContactFigure from '../../../assets/ContactFigure.svg'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

const HomeContact = () => {
  const {t} = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phone: formData.get('phone'),
      service: formData.get('services')
    }

    console.log(data)

    emailjs.send(
      'service_6qweux7',
      'template_6dzqmxn',
      data,
      'KybRyDhv7MVP_cH9l'
    )
    .then((response) => {
      toast("✅ Mensaje enviado!", response)
    })
    .catch((error) => {
      toast("😪 No se pudo enviar el mensaje", error)
    })
  }

  return (
    <section id="contact" className='container'>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="contact__title">{t('contact.title')}</h2>
      <div className="contact__content">
        <article>
          <p>{t('contact.info')}</p>
          <div>
            <h4>{t('contact.networks')}</h4>
            <SocialMedia/>
          </div>
          <img src={ContactFigure} alt="" />
        </article>
        <form id="form__contact" onSubmit={handleSubmit}>
          <div className="form__info">
            <div className="form__info-frame">
              <div className="form__info-input">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form__info-input">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form__info-input">
                <label htmlFor="phone">{t('contact.form.phone')}</label>
                <input type="tel" id="phone" name="phone"/>
              </div>
            </div>
            <div>
              <div className="form__info-textarea">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" required/>
              </div>
            </div>
          </div>
          <div className="form__services-content">
            <h4>{t('contact.form.service')}</h4>
            <div className="form__services-frame">
                <input type="radio" name="services" id="web-design" value="Web design and development"/>
                <label htmlFor="web-design">{t('contact.form.services.item1')}</label>
                <input type="radio" name="services" id="web-app" value="Job Opportunity"/>
                <label htmlFor="web-app">{t('contact.form.services.item2')}</label>
                <input type="radio" name="services" id="other" value="Other"/>
                <label htmlFor="other">{t('contact.form.services.item3')}</label>
            </div>
          </div>
          <button type="submit" className="button--primary">
            {t('contact.form.btn')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default HomeContact