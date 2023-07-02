import SocialMedia from "../../../components/SocialMedia"
import ContactFigure from '../../../assets/ContactFigure.svg'
import { useState } from "react"
const HomeContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <section id="contact" className='container'>
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <article>
          <p>Lets connect to bring your digital vision to life! Together, we can build web solutions that drive your business towards success.</p>
          <div>
            <h4>My networks</h4>
            <SocialMedia/>
          </div>
          <img src={ContactFigure} alt="" />
        </article>
        <form id="form__contact" onSubmit={handleSubmit}>
          <div className="form__info">
            <div className="form__info-frame">
              <div className="form__info-input">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form__info-input">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form__info-input">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone"/>
              </div>
            </div>
            <div>
              <div className="form__info-textarea">
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" name="message" required/>
              </div>
            </div>
          </div>
          <div className="form__services-content">
            <h4>Services</h4>
            <div className="form__services-frame">
              <div>
                <input type="radio" name="services" id="web-design"/>
                <label htmlFor="web-design">Web Design</label>
              </div>
              <div>
                <input type="radio" name="services" id="web-app"/>
                <label htmlFor="web-app">Web Application</label>
              </div>
              <div>
                <input type="radio" name="services" id="other"/>
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <button type="submit" className="button--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default HomeContact