import {Form, Link} from '@inertiajs/react';
import {FormField} from '@/components/shared/FormField';
import {AuthHeader} from '@/components/auth/AuthHeader';

interface Props {
  status?: string;
}

export default function LoginPage({status}: Props) {
  return (
    <div className="max-w-md mx-auto">
      <AuthHeader
        eyebrow="Welcome back"
        title="Log in to your account"
        description="Pick up where you left off and keep your events moving forward."
      />
      {status && (
        <p className="mb-4 text-base font-medium text-emerald-700">
          {status}
        </p>
      )}
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
  );
}
