"use client";
import Link from "next/link";
import Image from "next/image";
import AddToBrowserButton from "./add-to-browser-button";

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
      <section className="flex items-center gap-4">
        {/* Product Hunt Badge - Large */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            style={{ width: "160px", height: "34px" }}
            width="160"
            height="34"
          />
        </a>
        {/* Product Hunt Badge - Small */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block lg:hidden"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            style={{ width: "90px", height: "20px" }}
            width="90"
            height="20"
          />
        </a>
        {/* Product Hunt Badge - Mobile */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="block sm:hidden"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            style={{ width: "120px", height: "26px" }}
            width="120"
            height="26"
          />
        </a>
      </section>
    </nav>
  );
}
