import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <main className="bg-background min-h-screen">
            <div className="grid min-h-screen lg:grid-cols-2">
                <section className="bg-primary hidden overflow-hidden px-12 py-12 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">
                    <Link href="/" className="flex justify-center">
                        <img
                            src="/images/logo-portrait-white.png"
                            alt="StallSpot Logo"
                            className="h-auto w-70"
                        />
                    </Link>
                    <div className="max-w-xl">
                        <p className="mb-5 text-sm font-bold tracking-[0.22em] text-blue-100 uppercase">
                            Make space for what matters
                        </p>
                        <h1 className="max-w-lg text-4xl leading-tight font-extrabold tracking-tight xl:text-6xl">
                            Bring your next event to life.
                        </h1>
                        <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
                            Create events, discover the perfect vendors, and
                            manage every detail from one welcoming workspace.
                        </p>
                    </div>
                </section>
                {children}
            </div>
        </main>
    );
}
