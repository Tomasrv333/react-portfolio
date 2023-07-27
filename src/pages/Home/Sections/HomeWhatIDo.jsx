import ProductCard from "../../../components/ProductCard"
import WebsiteIcon from "../../../assets/whatIDo/Website.svg"
import WebAppIcon from "../../../assets/whatIDo/WebApp.svg"
import AppIcon from "../../../assets/whatIDo/App.svg"
import MaintenanceIcon from "../../../assets/whatIDo/Maintenance.svg"
import { useTranslation } from "react-i18next"

const HomeWhatIDo = () => {
  const {t} = useTranslation()

  return (
    <section id="whatIDo" className='container'>
      <h2 className="whatIDo__title">{t('whatIDo.title')}</h2>
      <div className="whatIDo__content">
        <div className="whatIDo__cards">
          <ProductCard
            img={WebsiteIcon}
            alt={t('whatIDo.card1.title')}
            title={t('whatIDo.card1.title')}
            description={t('whatIDo.card1.description')}
          />
          <ProductCard
            img={WebAppIcon}
            alt={t('whatIDo.card2.title')}
            title={t('whatIDo.card2.title')}
            description={t('whatIDo.card2.description')}
          />
          <ProductCard
            img={AppIcon}
            alt={t('whatIDo.card3.title')}
            title={t('whatIDo.card3.title')}
            description={t('whatIDo.card3.description')}
          />
          <ProductCard
            img={MaintenanceIcon}
            alt={t('whatIDo.card4.title')}
            title={t('whatIDo.card4.title')}
            description={t('whatIDo.card4.description')}
          />
        </div>
        
      </div>
    </section>
  )
}

export default HomeWhatIDo