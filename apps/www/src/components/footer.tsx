import Link from 'next/link';

export default function Footer() {
  return (
    <section className="absolute bottom-0 text-gray-400 dark:text-gray-600">
      <div className="h-[1px] w-screen bg-gray-400 dark:bg-gray-600" />
      <div className="mx-3 flex max-w-4xl justify-between py-2 text-xs md:mx-auto md:text-sm">
        <p>
          <Link
            href="https://chromewebstore.google.com/detail/docs-dark-20/djmmkojigpkdagglmjjdjiddopgdchcn?authuser=0&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-tight underline transition-colors hover:text-gray-100"
          >
            Dark Docs 2.0
          </Link>
        </p>

        <div className="flex items-center gap-1">
          <a
            href="mailto:i@ameyalambat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 transition-all hover:text-black hover:underline dark:hover:text-white"
          >
            i@ameyalambat.com
          </a>
          |<p>{new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
