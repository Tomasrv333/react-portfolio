import { FaBars } from "react-icons/fa";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header>
      <div className="header__content">
        <div>
            <a className="header__title" href="/">TomRvar</a>
        </div>
        <Nav/>
        <div>
            <div className="header__icon">
                <FaBars size="16px"/>
            </div>
        </div>
      </div> 
    </header>
  )
}

export default Header