import { Link } from "@inertiajs/react";

interface Props {
  paths: {
    path: string;
    label: string;
  }[];
}

export const MobileMenu = ({ paths }: Props) => {
  return (
    <div className="absolute z-10 bg-white w-full py-10">
      <div className="flex flex-col items-center justify-center text-slate-600 gap-4 text-lg">
        {paths.map((path) => (
          <Link
            key={path.path}
            href={path.path}
            className="rounded-lg px-3 py-2 font-semibold">
            {path.label}
          </Link>
        ))}
        <Link
          href="/logout"
          method="post"
          as="button"
          className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-red-600">
          Logout
        </Link>
      </div>
    </div>
  )
}