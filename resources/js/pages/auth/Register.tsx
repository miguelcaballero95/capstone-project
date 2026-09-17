import { Link } from "@inertiajs/react";
import { Armchair, Store } from "lucide-react";

export default function RegisterPage() {
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

        <section className="flex items-center justify-center px-6 lg:px-8 xl:px-20 py-4 lg:py-8">
          <div className="w-full max-w-4xl">
            <div className="mb-2 md:mb-10 flex justify-center lg:hidden">
              <Link href="/">
                <img src="/images/logo-landscape.png" alt="StallSpot Logo" className="h-auto w-50" />
              </Link>
            </div>
            <div className="mb-4 md:mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">
                Get started
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">Create your account</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Join StallSpot and start building better event experiences.
              </p>
            </div>

            <form className="space-y-5">
              <fieldset>
                <legend className="mb-3 block text-sm font-semibold">
                  I'm joining as a...
                </legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="group relative cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="vendor"
                      defaultChecked
                      className="peer sr-only"
                    />
                    <span className="flex h-full items-center gap-3 rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-200 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-primary peer-checked:[&>span:first-child]:bg-primary peer-checked:[&>span:first-child]:text-white peer-checked:[&>span:last-child]:border-primary peer-checked:[&>span:last-child>span]:opacity-100">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-primary shadow-sm transition">
                        <Store size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold">Vendor</span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                          Sell goods & book stands
                        </span>
                      </span>
                      <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 peer-checked:border-primary">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary opacity-0 transition peer-checked:opacity-100" />
                      </span>
                    </span>
                  </label>

                  <label className="group relative cursor-pointer">
                    <input type="radio" name="role" value="organizer" className="peer sr-only" />
                    <span className="flex h-full items-center gap-3 rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-200 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-primary peer-checked:[&>span:first-child]:bg-primary peer-checked:[&>span:first-child]:text-white peer-checked:[&>span:last-child]:border-primary peer-checked:[&>span:last-child>span]:opacity-100">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-primary shadow-sm transition">
                        <Armchair size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold">Organizer</span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                          Create & host events
                        </span>
                      </span>
                      <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 peer-checked:border-primary">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary opacity-0 transition peer-checked:opacity-100" />
                      </span>
                    </span>
                  </label>
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-slate-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-slate-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="businessName" className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                  placeholder="eg., John's Bakery"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="password_confirmation" className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm password
                  </label>
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 cursor-pointer"
              >
                Create account
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}