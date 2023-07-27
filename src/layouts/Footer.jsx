import Nav from "../components/Nav"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="container">
      <div className="footer__content">
        <div>
          <h3>Tomás Ríos Vargas</h3>
          <span className="footer__span">{t('footer.span')}</span>
        </div>
        <Nav/>
        <span>© 2023. {t('footer.copyright')}<a className="footer__link">Tomás Ríos Vargas</a></span>
      </div>
    </footer>
  )
}

export default Footer