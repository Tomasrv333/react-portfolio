import { useTranslation } from "react-i18next"

const Nav = () => {
  const {t} = useTranslation()

  return (
    <nav>
        <ul>
            <li>
              <a href="#projects">{t('header.nav.navItem1')}</a>
            </li>
            <li>
              <a href="#about">{t('header.nav.navItem2')}</a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">{t('header.nav.navItem3')}</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav