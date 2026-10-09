import {Form, Link} from '@inertiajs/react';
import {FormField} from "@/components/shared/FormField";

interface Props {
  status?: string;
}

export default function LoginPage({status}: Props) {
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
          <div className="mb-4 md:mb-8">
            <p className="mb-3 text-sm font-bold tracking-wide text-emerald-700 uppercase">
              Welcome back
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Log in to your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pick up where you left off and keep your events
              moving forward.
            </p>
            {status && (
              <p className="mt-3 text-sm text-emerald-700">
                {status}
              </p>
            )}
          </div>

          <Form action="/login" method="post" className="space-y-5">
            {({errors, processing}) => (
              <>
                <FormField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  errors={errors.email}
                />
                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  errors={errors.password}
                />
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-primary text-sm font-semibold transition hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={processing}
                  className="btn-primary"
                >
                  Log in
                </button>
              </>
            )}
          </Form>
          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link
              href="/register"
              className="text-primary font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
