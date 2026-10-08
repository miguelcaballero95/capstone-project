import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="py-8 text-center lg:pt-16 lg:pb-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center">
                <div className="bg-primary/10 mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide shadow-sm md:text-sm">
                    <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                    Find your spot. Fill your fair.
                </div>
                <h1 className="font-display max-w-4xl text-2xl font-extrabold tracking-tight md:text-4xl lg:text-6xl">
                    StallSpot - The easiest way to run and join local markets
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-lg lg:text-xl">
                    Create events, manage vendor stands, and skip the
                    spreadsheet chaos. One platform for organizers and vendors
                    alike.
                </p>
                <div className="mt-10 flex w-full flex-row items-center gap-4 md:w-auto md:flex-col">
                    <Link
                        href="/register"
                        className="bg-primary flex w-full items-center justify-center gap-4 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 sm:w-auto md:gap-2.5 md:text-base"
                    >
                        Get Started <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
