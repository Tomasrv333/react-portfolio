import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div>
            <p>TomRvar</p>
        </div>
        <nav>
            <ul>
                <li>Projects</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>
            <div>
                <FaBars/>
            </div>
        </div>
    </header>
  )
}

export default Header