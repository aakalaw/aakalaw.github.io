import Link from 'next/link';
import React from 'react';

const References: React.FC = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>
        References available upon request.{' '}
        <Link href="/contact">Get in touch →</Link>
      </h3>
    </div>
  </div>
);

export default References;
