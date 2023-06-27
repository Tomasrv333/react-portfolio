import Nav from "../components/Nav"

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer__content">
        <h2>Tomás Ríos Vargas</h2>
        <span>Full Stack Developer</span>
        <Nav/>
        <span>© 2023. All Rights Reserved.<a> Tomás Ríos Vargas</a></span>
      </div>
    </footer>
  )
}

export default Footer