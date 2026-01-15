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
    category: ['Design & Drafting', 'CAD & BIM'],
  },
  {
    title: 'Revit',
    competency: 2.7,
    category: ['Design & Drafting', 'CAD & BIM'],
  },
  {
    title: 'HTML & CSS',
    competency: 2.2,
    category: ['Web Development', 'Frontend', 'Markup & Styling'],
  },
  {
    title: 'Javascript',
    competency: 2.2,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'TypeScript',
    competency: 1.8,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'React',
    competency: 1.8,
    category: ['Web Development', 'Frontend', 'Frameworks & Libraries'],
  },
  {
    title: 'WordPress',
    competency: 2.0,
    category: ['Web Development', 'CMS & Platform'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#c3423f', // Deep Red
  '#40494e', // Dark Gray
  '#5C677D', // Slate Gray
  '#3F7D20', // Forest Green
  '#4A6FA5', // Steel Blue
  '#3896e2', // Medium Azure
  '#2E8B8B', // Muted Teal
  '#cc7b94', // Dusty Rose
  '#6B7280', // Cool Gray
  '#515dd4', // Medium Indigo
  '#8B5E34', // Warm Brown
  '#e47272', // Soft Coral
  '#37b1f5', // Bright Sky Blue
  '#1F3A5F', // Deep Navy
  '#6968b3', // Muted Indigo
  '#64cb7b', // Mint Green
  '#747fff', // Light Indigo
  '#d75858', // Soft Red
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
