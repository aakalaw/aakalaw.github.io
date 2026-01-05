'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const pstOffsetHours = -8; // PST is UTC-8
    const msInYear = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTimeUTC = new Date('1993-06-23T00:00:00Z'); // Z ensures UTC
    const birthTimePST = new Date(
      birthTimeUTC.getTime() + pstOffsetHours * 60 * 60 * 1000,
    );
    setAge(((Date.now() - birthTimePST.getTime()) / msInYear).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 1,
    link: 'https://www.google.com/maps/d/u/0/embed?mid=13NxPUrlYkcyO61umHs6zy1USYm25klA&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'City of Antipolo, Rizal',
  },
];

export default data;
