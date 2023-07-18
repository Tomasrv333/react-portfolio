import IconYoutube from '../assets/Icons/socialMedia/YouTube.svg';
import IconLinkedin from '../assets/Icons/socialMedia/LinkedIn.svg';
import IconGithub from '../assets/Icons/socialMedia/Github.svg';
import IconFacebook from '../assets/Icons/socialMedia/Facebook.svg';
import IconTelegram from '../assets/Icons/socialMedia/Telegram.svg';
import IconDiscord from '../assets/Icons/socialMedia/Discord.svg';

const SocialMedia = () => {
  return (
    <div className='socialMedia-card__content'>
        <img src={IconYoutube} alt="Youtube"/>
        <img src={IconLinkedin} alt="Linkedin"/>
        <img src={IconGithub} alt="Github"/>
        <img src={IconFacebook} alt="Facebook"/>
        <img src={IconTelegram} alt="Telegram"/>
        <img src={IconDiscord} alt="Discord"/>
    </div>
  )
}

export default SocialMedia