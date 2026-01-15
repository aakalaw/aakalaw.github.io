import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description: 'N/A.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>
              A visually appealing and responsive React application written with
              modern TypeScript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my personal site! Feel free to review more{' '}
          <Link href="/about">about me</Link>, or you can check out my{' '}
          <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a
            href="https://github.com/aakalaw/aakalaw.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </article>
    </PageWrapper>
  );
}
