/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ShareBIM Asia Engineering Consultancy',
    position: 'BIM Modeler',
    url: 'https://www.jobstreet.com.ph/companies/sharebim-asia-engineering-consultancy-168550826318019',
    startDate: '2024-03-05',
    endDate: '2024-05-05',
    summary: ` 
     `,
    highlights: [
      'Partnered with project lead to drive the successful completion of complex modeling tasks.',
      'Prepared and updated design drawings effectively, ensuring accurate model updates and generating detailed shop drawings from approved construction plans.',
    ],
  },
  {
    name: 'Fire Professionals Inc.',
    position: 'AutoCAD Operator',
    url: 'https://fireprofessionals.com.ph',
    startDate: '2019-09-03',
    endDate: '2023-09-15',
    summary: ` 
     `,
    highlights: [
      'Expert in creating and modifying engineering drawings to precise specifications.',
      'Proven track record of producing accurate CAD drawings and plans from complex instructions.',
      'Skilled in calculating materials, labor, and overhead in alignment with bid plans and technical specifications.',
      'Exhibited skills to create business presentations and advertising tools for products and services.',
      'Strong capability in designing, building, and maintaining websites with a clear strategic vision.',
      'Advanced expertise in identifying hardware and software solutions and efficiently diagnosing and repairing faults.',
    ],
  },
];

export default work;
