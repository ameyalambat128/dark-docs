'use client';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

function Logo() {
  return (
    <Link href={'/'} className="flex items-center">
      <Image
        src="/icon.png"
        alt="Logo"
        width={40}
        height={40}
        className="h-auto max-w-full drop-shadow-2xl"
      />
    </Link>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  let segment = useSelectedLayoutSegment() || '';
  let active = href === `/${segment}`;

  // console.log({ segment, href, active });
  return (
    <Link
      href={href}
      className={clsx(
        'text-md p-2 md:text-base lg:text-lg',
        active
          ? 'text-gray-900 dark:text-gray-100'
          : ' text-gray-400 ease-in-out hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-100',
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 lg:py-8">
      <Logo />
      <section className="grid grid-flow-col md:gap-4">
        <NavLink href="/" className="hidden md:block">
          Home
        </NavLink>
        <Link
          href="https://chromewebstore.google.com/detail/docs-dark-20/djmmkojigpkdagglmjjdjiddopgdchcn?authuser=0&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md p-2 text-gray-600 transition-colors ease-in-out hover:text-gray-100 md:text-base lg:text-lg"
        >
          Download
        </Link>
      </section>
    </nav>
  );
}
