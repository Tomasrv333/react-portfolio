import ProductCard from "../../../components/ProductCard"
import LogoWebsites from "../../../assets/ImageProfile.svg"

const HomeWhatIDo = () => {
  return (
    <section className='container'>
      <div className="whatIDo__content">
        <h2 className="whatIDo__title">What I Do</h2>
        <div className="whatIDo__cards">
          <ProductCard
            img={LogoWebsites}
            alt="websites"
            title="Websites"
            description="Digital platform that provides information and services online."
          />
          <ProductCard
            img={LogoWebsites}
            alt="web applications"
            title="Web Applications"
            description="Interactive and scalable platform for specific tasks online."
          />
          <ProductCard
            img={LogoWebsites}
            alt="mobile applications"
            title="Mobile Applications"
            description="Interactive software on mobile devices for various functionalities."
          />
          <ProductCard
            img={LogoWebsites}
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