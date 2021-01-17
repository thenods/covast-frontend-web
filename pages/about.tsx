import Link from 'next/link';
import { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <div>
      Welcome to the about page. Go to the{' '}
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      page.
    </div>
  );
}
