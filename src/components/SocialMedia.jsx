import IconYoutube from '../assets/Icons/Youtube.svg';
import IconLinkedin from '../assets/Icons/Linkedin.svg';
import IconGithub from '../assets/Icons/Github.svg';
import IconFacebook from '../assets/Icons/Facebook.svg';
import IconTelegram from '../assets/Icons/Telegram.svg';
import IconDiscord from '../assets/Icons/Discord.svg';

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