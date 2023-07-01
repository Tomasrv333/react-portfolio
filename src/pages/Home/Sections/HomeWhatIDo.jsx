import ProductCard from "../../../components/ProductCard"
import WebsiteIcon from "../../../assets/whatIDo/Website.svg"
import WebAppIcon from "../../../assets/whatIDo/WebApp.svg"
import AppIcon from "../../../assets/whatIDo/App.svg"
import MaintenanceIcon from "../../../assets/whatIDo/Maintenance.svg"

const HomeWhatIDo = () => {
  return (
    <section className='container'>
      <h2 className="whatIDo__title">What I Do</h2>
      <div className="whatIDo__content">
        <div className="whatIDo__cards">
          <ProductCard
            img={WebsiteIcon}
            alt="websites"
            title="Websites"
            description="Digital platform that provides information and services online."
          />
          <ProductCard
            img={WebAppIcon}
            alt="web applications"
            title="Web Applications"
            description="Interactive and scalable platform for specific tasks online."
          />
          <ProductCard
            img={AppIcon}
            alt="mobile applications"
            title="Mobile Applications"
            description="Interactive software on mobile devices for various functionalities."
          />
          <ProductCard
            img={MaintenanceIcon}
            alt="maintenance"
            title="Maintenance"
            description="Update, performance, security, correctness, scalability, monitoring."
          />
        </div>
        
      </div>
    </section>
  )
}

export default HomeWhatIDo