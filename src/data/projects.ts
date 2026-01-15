export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Personal Site',
    subtitle: '2026 Last Update',
    link: 'https://aakalaw.github.io',
    image: '/images/projects/personal-site.png',
    date: '2026-01-03',
    desc: 'A visually appealing and responsive React application written with modern TypeScript. ',
  },
];

export default data;
