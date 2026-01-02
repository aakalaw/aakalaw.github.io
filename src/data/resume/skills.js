const skills = [
  {
    title: 'AutoCAD',
    competency: 3.8,
    category: ['CAD', 'Tools'],
  },
  {
    title: 'Revit',
    competency: 2.8,
    category: ['BIM', 'Tools'],
  },
  {
    title: 'HTML + CSS',
    competency: 2.4,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 2.4,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'React',
    competency: 2.2,
    category: ['Web Development', 'Frontend', 'Frameworks'],
  },
  {
    title: 'WordPress',
    competency: 2.2,
    category: ['Web Development', 'CMS'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
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

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
