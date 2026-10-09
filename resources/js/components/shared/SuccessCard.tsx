import {Check} from "lucide-react";
import {Link} from "@inertiajs/react";

interface Props {
  title: string;
  subtitle?: string;
  message?: string;
  redirect?: {
    to: string;
    text: string;
  }
}

export const SuccessCard = (props: Props) => {

  const {title, subtitle, message, redirect} = props;

  return (
    <div>
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center md:p-8">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <Check className="text-emerald-700"/>
        </div>
        <p className="mt-6 text-sm font-bold tracking-wide text-emerald-700 uppercase">
          {title}
        </p>
        {
          subtitle && (
            <p className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              {subtitle}
            </p>
          )
        }
        {
          message && (
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {message}
            </p>
          )
        }
        {
          redirect && (
            <Link
              href={redirect.to}
              className="bg-primary mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              {redirect.text}
            </Link>
          )
        }
      </div>
    </div>
  );
};
