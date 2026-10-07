import { Form, Link } from "@inertiajs/react";

interface Props {
  status?: string;
}

export default function ForgotPasswordPage({ status }: Props) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden overflow-hidden bg-primary px-12 py-12 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">
          <Link href="/" className="flex justify-center">
            <img src="/images/logo-portrait-white.png" alt="StallSpot Logo" className="h-auto w-70" />
          </Link>
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
              Make space for what matters
            </p>
            <h1 className="max-w-lg text-4xl font-extrabold leading-tight tracking-tight xl:text-6xl">
              Bring your next event to life.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
              Create events, discover the perfect vendors, and manage every detail from one
              welcoming workspace.
            </p>
          </div>
        </section>
        <section className="flex md:items-center justify-center px-6 py-12 lg:px-8 lg:py-8 xl:px-20">
          <div className="w-full max-w-md flex flex-col">
            <div className="flex justify-center md:mb-10 lg:hidden">
              <Link href="/">
                <img src="/images/logo-landscape.png" alt="StallSpot Logo" className="h-auto w-50" />
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-4 md:mb-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">
                  Forgot your password?
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                  Reset your password
                </h2>
                {
                  status ? (
                    <p className="mt-3 text-base leading-6 text-emerald-700">
                      {status}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  )
                }
              </div>
              {
                !status && (
                  <>
                    <Form action="/forgot-password" method="post" className="space-y-5">
                      {
                        ({ errors, processing }) => (
                          <>
                            <div>
                              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                                Email address
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                placeholder="you@example.com"
                              />
                              {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <button
                              type="submit"
                              disabled={processing}
                              className="w-full cursor-pointer rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                            >
                              Send Reset Link
                            </button>
                          </>
                        )
                      }
                    </Form>
                    <p className="mt-8 text-center text-sm text-slate-500">
                      Remember your password?{" "}
                      <Link href="/login" className="font-bold text-primary hover:underline">
                        Log in
                      </Link>
                    </p>
                  </>
                )
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}