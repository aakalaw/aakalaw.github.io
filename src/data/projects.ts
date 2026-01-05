export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  url: string;
}

const data: Project[] = [
  {
    title: 'Personal Site',
    subtitle: '2026 Last Update',
    image: '/images/projects/personal-site.png',
    date: '2026-01-03',
    desc: 'A visually appealing and responsive React application written with modern TypeScript. ',
    url: 'https://aakalaw.github.io',
  },
];

export default data;
