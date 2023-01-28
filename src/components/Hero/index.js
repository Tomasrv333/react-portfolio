import * as Unicons from '@iconscout/react-unicons'

const Hero = () => {
    return (
        <div id="home" name="home" className="hero__container">
            <div className="hero__info">
                <h1>Tomas Rios Vargas</h1>
                <h3><Unicons.UilAngleRight /> Desarrollador Full-Stack</h3>
                <p>Aliquam a arcu facilisis orci volutpat rutrum ac at mauris. Nam nisl dolor, dictum et pretium et, viverra vel diam. Suspendisse vehicula cursus efficitur. Nulla mattis, felis eget molestie bibendum, augue metus fringilla felis, vitae semper erat nibh bibendum dolor.</p>
                <button className='info__button'>
                    Conoceme!
                </button>
            </div>
            <div className="hero__bg">
                <p>lorem</p>
            </div>
        </div>
    )
}

export default Hero