'use client';

import Navbar from '@/components/navbar';
import { Background } from '@dark-docs/ui';

export default function Home() {
  return (
    <div className="bg-[#111010] text-white">
      {/* Background Grid */}
      <Background />
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="mx-6 max-w-4xl lg:mx-auto">
          <Navbar />
        </div>
      </main>
    </div>
  );
}
