export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'AutoCAD',
    competency: 3.8,
    category: ['CAD', 'Tools'],
  },
  {
    title: 'Revit',
    competency: 2.7,
    category: ['BIM', 'Tools'],
  },
  {
    title: 'HTML + CSS',
    competency: 2.2,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 2.2,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'React',
    competency: 1.8,
    category: ['Web Development', 'Frontend', 'Frameworks'],
  },
  {
    title: 'TypeScript',
    competency: 1.8,
    category: ['Web Development', 'Frontend', 'Frameworks'],
  },
  {
    title: 'WordPress',
    competency: 2.0,
    category: ['Web Development', 'CMS'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(
  new Set(skills.flatMap(({ category }) => category)),
)
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
