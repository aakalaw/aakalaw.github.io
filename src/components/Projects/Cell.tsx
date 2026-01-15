import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => {
  const { title, date, desc, image, link } = data;

  const hasLink = Boolean(link);

  const cardContent = (
    <article className="mini-post">
      <header>
        <h3>{title}</h3>
        <time className="published">{dayjs(date).format('MMMM, YYYY')}</time>
      </header>
      <div className="image">
        <Image src={image} alt={title} width={600} height={400} />
      </div>
      <div className="description">
        <p>{desc}</p>
      </div>
    </article>
  );

  return (
    <div className="cell-container">
      {hasLink ? (
        <a href={link} className="project-card-link">
          {cardContent}
        </a>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}
    </div>
  );
};

export default Cell;
