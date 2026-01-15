'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me.jpg"
            alt="Angelo Aaron Kalaw"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h3>Angelo Aaron Kalaw</h3>
          <p>
            <a href="mailto:angeloaaronkalaw@gmail.com">
              angeloaaronkalaw@gmail.com
            </a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi! You can call me AA. I&apos;m a Computer Engineering undergrad with
          over four years of CAD Operations under my belt. I&apos;ve drawn
          enough lines, layers, and layouts to last a lifetime—so now I&apos;m
          looking to reboot my career and break into the IT side of the
          universe, where I can apply my technical foundation to new challenges.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                View Resume
              </Link>
            ) : null}
          </li>
        </ul>
      </section>

      <section id="footer" role="contentinfo">
        <div className="footer-social" aria-labelledby="footer-social-heading">
          <h4 id="footer-social-heading" className="footer-social-label">
            Connect
          </h4>
          <ContactIcons />
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} ·{' '}
          <a href="https://aakalaw.github.io">AAK</a>
        </p>
      </section>
    </section>
  );
};

export default SideBar;
