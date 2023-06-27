import Nav from "../components/Nav"

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer__content">
        <div>
          <h3>Tomás Ríos Vargas</h3>
          <span className="footer__span">Full Stack Developer</span>
        </div>
        <Nav/>
        <span>© 2023. All Rights Reserved.<a className="footer__link">Tomás Ríos Vargas</a></span>
      </div>
    </footer>
  )
}

export default Footer