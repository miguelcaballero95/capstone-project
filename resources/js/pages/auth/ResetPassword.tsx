import { Form, Link } from "@inertiajs/react";

interface Props {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: Props) {
  return (
    <div className="flex md:items-center justify-center px-6 py-12 lg:px-8 lg:py-8 xl:px-20">
      <div className="w-full max-w-md flex flex-col">
        <div className="flex justify-center md:mb-10 lg:hidden">
          <Link href="/">
            <img src="/images/logo-landscape.png" alt="StallSpot Logo" className="h-auto w-50" />
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-4 md:mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">
              Almost there
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Create a new password
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Choose a new password for your account to get back to managing your events.
            </p>
          </div>

          <Form action="/reset-password" method="post" className="space-y-5">
            {
              ({ errors, processing }) => (
                <>
                  <input type="hidden" name="token" value={token} />

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      readOnly
                      className="w-full cursor-not-allowed rounded-xl bg-slate-100 px-4 py-3.5 text-sm text-slate-500 outline-none"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                      New password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                      placeholder="Enter your new password"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="password_confirmation"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Confirm new password
                    </label>
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      type="password"
                      autoComplete="new-password"
                      className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                      placeholder="Re-enter your new password"
                    />
                    {errors.password_confirmation && (
                      <p className="text-red-500">{errors.password_confirmation}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full cursor-pointer rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    Reset password
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
        </div>
      </div>
    </div>
  )
}