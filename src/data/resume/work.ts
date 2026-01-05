/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'ShareBIM Asia Engineering Consultancy',
    position: 'Revit BIM Modeler',
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
    ],
  },
];

export default work;
