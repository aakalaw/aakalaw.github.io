'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '../../data/routes';

import Hamburger from './Hamburger';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} href={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>

      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link
                  href={l.path}
                  className={isActive(l.path) ? 'active' : ''}
                  aria-current={isActive(l.path) ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <div className="nav-action">
        <Hamburger />
      </div>
    </header>
  );
};

export default Navigation;
