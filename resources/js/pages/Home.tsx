import { Benefits } from '@/components/home/Benefits';
import { Cta } from '@/components/home/Cta';
import { Flow } from '@/components/home/Flow';
import { Hero } from '@/components/home/Hero';
import { Link } from '@inertiajs/react';

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen overflow-hidden text-black">
            <header className="bg-background fixed top-0 right-0 left-0 z-50 border-b border-gray-100 shadow-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2 lg:px-12">
                    <div className="flex items-center gap-2.5">
                        <img
                            src="/images/logo-landscape.png"
                            alt="StallSpot Logo"
                            className="h-auto w-30 md:w-34 lg:w-42"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <Link
                            href="/login"
                            className="px-2 text-sm font-semibold text-gray-600 md:px-4"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/register"
                            className="bg-primary rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-lg md:px-5 md:py-2.5"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </header>
            <main className="px-6 pt-20">
                <Hero />
                <Flow />
                <Benefits />
                <Cta />
            </main>
            <footer className="bg-background mt-12 border-t-2 border-gray-200 px-6 py-8">
                <div className="mx-auto max-w-7xl">
                    <div>
                        <div className="flex flex-col items-start lg:col-span-2">
                            <img
                                src="/images/logo-landscape.png"
                                alt="StallSpot Logo"
                                className="h-auto w-32 md:w-38"
                            />
                            <p className="mb-2 text-base font-semibold text-gray-500">
                                Find your spot. Fill your fair.
                            </p>
                            <p className="max-w-sm text-sm leading-relaxed text-[#414754]">
                                Connecting craft artisans, food vendors, and
                                modern fair organizers through seamless
                                interactive booth booking.
                            </p>
                        </div>
                    </div>
                    <div className="pt-8 text-xs text-gray-500">
                        <p>
                            © {new Date().getFullYear()} StallSpot. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
