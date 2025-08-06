"use client";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
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

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 lg:py-8">
      <div className="flex items-center gap-2 md:gap-4">
        <Logo />
        <span className="text-lg font-bold tracking-tighter md:text-xl">
          Dark Docs 2.0
        </span>
      </div>
      <section className="grid grid-flow-col md:gap-4">
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
