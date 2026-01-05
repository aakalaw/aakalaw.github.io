export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Technological Institute of the Philippines',
    degree: 'Computer Engineering',
    link: 'https://www.tip.edu.ph/',
    year: 2017,
  },
];

export default degrees;
