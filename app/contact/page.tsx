import type { Metadata } from 'next';
import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Angelo Aaron Kalaw via email @ angeloaaronkalaw@gmail.com',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>
            Feel free to reach out and send me a message if you need any
            assistance. I&apos;ll be happy to help.
          </p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
