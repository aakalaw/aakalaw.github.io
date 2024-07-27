import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:angeloaaronkalaw@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=09085655001',
    label: 'Github',
    icon: faWhatsapp,
  },
  {
    link: 'https://www.linkedin.com/in/angeloaaronkalaw',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/angeloaaronkalaw',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://github.com/aakalaw',
    label: 'Github',
    icon: faGithub,
  },
];

export default data;
