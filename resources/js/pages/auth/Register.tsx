import { Form, Link } from '@inertiajs/react';
import { Armchair, Store } from 'lucide-react';

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center px-6 py-4 lg:px-8 lg:py-8 xl:px-20">
            <div className="w-full max-w-4xl">
                <div className="mb-2 flex justify-center md:mb-10 lg:hidden">
                    <Link href="/">
                        <img
                            src="/images/logo-landscape.png"
                            alt="StallSpot Logo"
                            className="h-auto w-50"
                        />
                    </Link>
                </div>
                <div className="mb-4 md:mb-8">
                    <p className="mb-3 text-sm font-bold tracking-wide text-emerald-700 uppercase">
                        Get started
                    </p>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                        Create your account
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Join StallSpot and start building better event
                        experiences.
                    </p>
                </div>

                <Form className="space-y-5" action="/register" method="post">
                    {({ errors, processing }) => (
                        <>
                            <fieldset>
                                <legend className="mb-3 block text-sm font-semibold">
                                    I'm joining as a...
                                </legend>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <label
                                        className="group relative cursor-pointer"
                                        data-test="role-vendor"
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            value="vendor"
                                            defaultChecked
                                            className="peer sr-only"
                                        />
                                        <span className="peer-checked:ring-primary peer-checked:[&>span:first-child]:bg-primary peer-checked:[&>span:last-child]:border-primary flex h-full items-center gap-3 rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-200 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:[&>span:first-child]:text-white peer-checked:[&>span:last-child>span]:opacity-100">
                                            <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold shadow-sm transition">
                                                <Store size={20} />
                                            </span>
                                            <span>
                                                <span className="block text-sm font-bold">
                                                    Vendor
                                                </span>
                                                <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                                                    Sell goods & book stands
                                                </span>
                                            </span>
                                            <span className="peer-checked:border-primary ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300">
                                                <span className="bg-primary h-2.5 w-2.5 rounded-full opacity-0 transition peer-checked:opacity-100" />
                                            </span>
                                        </span>
                                    </label>

                                    <label
                                        className="group relative cursor-pointer"
                                        data-test="role-organizer"
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            value="organizer"
                                            className="peer sr-only"
                                        />
                                        <span className="peer-checked:ring-primary peer-checked:[&>span:first-child]:bg-primary peer-checked:[&>span:last-child]:border-primary flex h-full items-center gap-3 rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-200 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:[&>span:first-child]:text-white peer-checked:[&>span:last-child>span]:opacity-100">
                                            <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold shadow-sm transition">
                                                <Armchair size={20} />
                                            </span>
                                            <span>
                                                <span className="block text-sm font-bold">
                                                    Organizer
                                                </span>
                                                <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                                                    Create & host events
                                                </span>
                                            </span>
                                            <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300">
                                                <span className="bg-primary h-2.5 w-2.5 rounded-full opacity-0 transition" />
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </fieldset>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="name"
                                        className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-200"
                                        placeholder="John"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="name"
                                        className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-200"
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="businessName"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Business Name
                                </label>
                                <input
                                    id="businessName"
                                    name="businessName"
                                    type="text"
                                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    placeholder="eg., John's Bakery"
                                />
                                {errors.businessName && (
                                    <p className="text-red-500">
                                        {errors.businessName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    placeholder="••••••••"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-primary w-full cursor-pointer rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                            >
                                Create account
                            </button>
                        </>
                    )}
                </Form>
                <p className="mt-8 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-primary font-bold hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
