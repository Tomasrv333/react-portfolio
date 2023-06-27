import SocialMedia from "../../../components/SocialMedia"

const HomeContact = () => {
  return (
    <section className='container'>
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <article>
          <p>Lets connect to bring your digital vision to life! Together, we can build web solutions that drive your business towards success.</p>
          <div>
            <h3>My networks</h3>
            <SocialMedia/>
          </div>
        </article>
        <form action="">
          <div className="form__info">
            <div>
              <div>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required/>
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required/>
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone"/>
              </div>
            </div>
            <div>
              <div>
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" name="message" required/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <input 
                type="radio" 
                name="service"
                value='Web Design'
              />
              <label htmlFor="">Web Design</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="service"
                value='Web Development'
              />
              <label htmlFor="">Web Development</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="service"
                value='Other'
              />
              <label htmlFor="">Other</label>
            </div>
          </div>
          <button>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default HomeContact