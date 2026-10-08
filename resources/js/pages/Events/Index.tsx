import { SiteHeader } from '@/components/shared/header/SiteHeader';
import { Link, usePage } from '@inertiajs/react';

export default function EventsPage() {
    const { auth } = usePage().props;
    const isOrganizer = auth.user.role === 'organizer';

    return (
        <div className="bg-background min-h-screen text-black">
            <SiteHeader />
            <main className="flex-1 px-6 py-8 md:px-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="flex items-end justify-between">
                        <h1 className="text-2xl font-bold tracking-tight">
                            {isOrganizer ? 'My Events' : 'Upcoming Events'}
                        </h1>
                        {isOrganizer && (
                            <Link
                                href="/events/create"
                                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 lg:text-base"
                            >
                                New Event
                            </Link>
                        )}
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <article className="overflow-hidden rounded-xl bg-white shadow-md">
                            <div className="flex h-48 items-center justify-center bg-blue-100 text-5xl text-blue-700">
                                ✦
                            </div>
                            <div className="p-6">
                                <h2 className="mb-2 text-xl font-bold">
                                    Hamilton Summer Festival
                                </h2>
                                <div className="flex flex-col gap-2 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">◷</span>
                                        <span>July 15 - 18, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">⌖</span>
                                        <span>Bayfront Park, Hamilton</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end border-t border-slate-200 pt-6">
                                    <button
                                        type="button"
                                        className="text-sm font-bold text-blue-700 hover:text-blue-800"
                                    >
                                        Manage
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="overflow-hidden rounded-xl bg-white shadow-md">
                            <div className="flex h-48 items-center justify-center bg-amber-100 text-5xl text-amber-700">
                                ✧
                            </div>
                            <div className="p-6">
                                <h2 className="mb-2 text-xl font-bold">
                                    Autumn Craft Market
                                </h2>
                                <div className="flex flex-col gap-2 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">◷</span>
                                        <span>Oct 12 - 14, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span aria-hidden="true">⌖</span>
                                        <span>Cotton Factory, Hamilton</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end border-t border-slate-200 pt-6">
                                    <button
                                        type="button"
                                        className="text-sm font-bold text-blue-700 hover:text-blue-800"
                                    >
                                        Manage
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
}
