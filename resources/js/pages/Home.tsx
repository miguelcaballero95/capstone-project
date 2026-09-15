import { Link } from '@inertiajs/react';
import {
  ArrowRight
} from 'lucide-react';

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
        <section className="pb-20 pt-12 text-center lg:pb-8 lg:pt-16 ">
          <div className="mx-auto flex max-w-7xl flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide shadow-sm sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Find your spot. Fill your fair.
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              StallSpot - The easiest way to run and join local markets
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              Create events, manage vendor stands, and skip the spreadsheet chaos. One platform for organizers and vendors alike.
            </p>
            <div className="mb-16 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/register"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 sm:w-auto sm:text-base">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t-2 border-gray-200 px-6 py-8">
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