import { Form, Link } from '@inertiajs/react';

interface Props {
    status?: string;
}

export default function ForgotPasswordPage({ status }: Props) {
    return (
        <div className="flex justify-center px-6 py-12 md:items-center lg:px-8 lg:py-8 xl:px-20">
            <div className="flex w-full max-w-md flex-col">
                <div className="flex justify-center md:mb-10 lg:hidden">
                    <Link href="/">
                        <img
                            src="/images/logo-landscape.png"
                            alt="StallSpot Logo"
                            className="h-auto w-50"
                        />
                    </Link>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    {status ? (
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center md:p-8">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
                                ✓
                            </div>
                            <p className="mt-6 text-sm font-bold tracking-wide text-emerald-700 uppercase">
                                Email sent
                            </p>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                                Check your inbox
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {status}
                            </p>
                            <Link
                                href="/login"
                                className="bg-primary mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                            >
                                Return to login
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="mb-4 md:mb-8">
                                <p className="mb-3 text-sm font-bold tracking-wide text-emerald-700 uppercase">
                                    Forgot your password?
                                </p>
                                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                                    Reset your password
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    Enter your email address and we'll send you
                                    a link to reset your password.
                                </p>
                            </div>
                            <Form
                                action="/forgot-password"
                                method="post"
                                className="space-y-5"
                            >
                                {({ errors, processing }) => (
                                    <>
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
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-primary w-full cursor-pointer rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                                        >
                                            Send Reset Link
                                        </button>
                                    </>
                                )}
                            </Form>
                            <p className="mt-8 text-center text-sm text-slate-500">
                                Remember your password?{' '}
                                <Link
                                    href="/login"
                                    className="text-primary font-bold hover:underline"
                                >
                                    Log in
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
