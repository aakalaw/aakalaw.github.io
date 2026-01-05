import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
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
  {
    link: 'https://www.linkedin.com/in/angeloaaronkalaw',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=09085655001',
    label: 'WhatsApp',
    icon: faWhatsapp,
  },
  {
    link: 'mailto:angeloaaronkalaw@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
