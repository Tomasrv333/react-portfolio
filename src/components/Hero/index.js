import * as Unicons from '@iconscout/react-unicons'

const Hero = () => {
    return (
        <div id="home" name="home" className="hero-container">
            <div className="hero-container__info-block">
                <span className='info-block__span'>Hola! Mi nombre es</span>
                <h1 className='info-block__title'>Tomás Rios Vargas</h1>
                <h1 className='info-block__title--mobile'>Tomás</h1>
                <h3 className='info-block__subtitle'>Desarrollador Full-Stack<span className='subtitle__icon--mobile'><Unicons.UilGrinTongueWinkAlt /></span></h3>
                <p className='info-block__text'>Aliquam a arcu facilisis orci volutpat rutrum ac at mauris. Nam nisl dolor, dictum et pretium et, viverra vel diam. Suspendisse vehicula cursus efficitur. Nulla mattis, felis eget molestie bibendum, augue metus fringilla felis, vitae semper erat nibh bibendum dolor.</p>
                <div className='info-block__bottom-element'>
                    <button className='bottom-element__button'>
                        Conoceme!
                    </button>
                    <span className='bottom-element__span'>Desliza hacia abajo<Unicons.UilMouseAlt /></span>
                </div>
            </div>

            <div className="hero-container__icons-block">
                    <div className='icons-block__icon'>
                        <Unicons.UilEnvelope />
                    </div>
                    <div className='icons-block__icon'>
                        <Unicons.UilPhone />
                    </div>
                    <div className='icons-block__icon'>
                        <Unicons.UilFileDownload />
                    </div>
                    <div className='icons-block__line'>

                    </div>
                </div>
            
        </div>
    )
}

export default Hero