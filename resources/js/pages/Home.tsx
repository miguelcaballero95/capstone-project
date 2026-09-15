import { Flow } from '@/components/home/Flow';
import { Hero } from '@/components/home/Hero';
import { Link } from '@inertiajs/react';

export default function HomePage() {

  return (
    <div className="min-h-screen overflow-hidden bg-background text-black">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-background shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-2.5">
            <img src="/images/logo-landscape.png" alt="StallSpot Logo" className="h-auto w-34 md:w-42" />
          </div>
          <div className="items-center gap-1 flex">
            <Link href="/login" className="px-4 text-sm font-semibold text-gray-600">Log in</Link>
            <Link
              href="/register"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              Register
            </Link>
          </div>
        </div>
      </header>
      <main className="pt-20 px-6">
        <Hero />
        <Flow />
      </main>
      <footer className="bg-background border-t-2 border-gray-200 px-6 py-8 mt-12">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="flex flex-col items-start lg:col-span-2">
              <img src="/images/logo-landscape.png" alt="StallSpot Logo" className="h-auto w-32 md:w-38" />
              <p className="mb-2 text-gray-500 font-semibold text-base">
                Find your spot. Fill your fair.
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-[#414754]">
                Connecting craft artisans, food vendors, and modern fair organizers through seamless interactive booth booking.
              </p>
            </div>
          </div>
          <div className="pt-8 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} StallSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}