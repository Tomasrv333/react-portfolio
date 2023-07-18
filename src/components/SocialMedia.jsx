import IconYoutube from '../../src/assets/Icons/socialMedia/Youtube.svg';
import IconLinkedin from '../../src/assets/Icons/socialMedia/Linkedin.svg';
import IconGithub from '../../src/assets/Icons/socialMedia/Github.svg';
import IconFacebook from '../../src/assets/Icons/socialMedia/Facebook.svg';
import IconTelegram from '../../src/assets/Icons/socialMedia/Telegram.svg';
import IconDiscord from '../../src/assets/Icons/socialMedia/Discord.svg';

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