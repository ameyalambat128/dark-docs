"use client";

import Navbar from "@/components/navbar";
import { Background } from "@/components/background";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import AddToBrowserButton from "@/components/add-to-browser-button";
import GoogleIcon from "@/components/google-icon";

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
              className="mb-8 lg:mb-12"
            >
              <h1 className="mb-6 text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                The Dark Theme,{" "}
                <span className="font-bold">
                  <GoogleIcon className="lg:w-15 lg:h-15 mx-2 inline h-8 w-8 -translate-y-[6px] md:h-12 md:w-12" />
                  <span className="font-bold">Google</span>
                </span>{" "}
                <span className="font-bold">&ldquo;Forgot&rdquo;</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Experience Google Docs like never before with{" "}
                <a
                  href="https://chromewebstore.google.com/detail/docs-dark-20/djmmkojigpkdagglmjjdjiddopgdchcn?authuser=0&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-tight underline transition-colors hover:text-gray-100"
                >
                  Dark Docs 2.0
                </a>{" "}
                that&apos;s easy on your eyes and beautiful to work with.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 lg:mb-12"
            >
              <AddToBrowserButton />
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
