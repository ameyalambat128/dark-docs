'use client';

import Navbar from '@/components/navbar';
import { Background } from '@/components/background';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/footer';

// Google icon component (simplified version)
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111010] text-white">
      {/* Background Grid */}
      <Background />

      <main className="relative z-10">
        <div className="mx-6 max-w-6xl lg:mx-auto">
          <Navbar />

          {/* Hero Section */}
          <section className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
            {/* Hero Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="mb-6 text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                The Dark Theme,{' '}
                <span className="font-bold">
                  <GoogleIcon className="lg:w-15 lg:h-15 mx-2 inline h-8 w-8 -translate-y-[6px] md:h-12 md:w-12" />
                  <span className="font-bold">Google</span>
                </span>{' '}
                <span className="font-bold">&ldquo;Forgot&rdquo;</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Experience Google Docs like never before with{' '}
                <a
                  href="https://chromewebstore.google.com/detail/docs-dark-20/djmmkojigpkdagglmjjdjiddopgdchcn?authuser=0&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-tight underline transition-colors hover:text-gray-100"
                >
                  Dark Docs 2.0
                </a>{' '}
                that&apos;s easy on your eyes and beautiful to work with.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Blurred shadow behind image */}
              <div className="absolute inset-0 -z-10 scale-110 bg-gradient-to-r from-gray-500/20 via-gray-500/20 to-gray-500/20 blur-3xl" />

              {/* Main hero image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/hero-promo.png"
                  alt="Dark Docs 2.0 Preview"
                  width={1200}
                  height={800}
                  className="h-auto max-w-full"
                  priority
                />
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
