import { Link } from "@inertiajs/react";
import { CircleUser } from "lucide-react";
import { useState } from "react";

export const Header = () => {

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 shadow-sm md:px-8">
      <img src="/images/logo-landscape.png" alt="Logo" className="h-16 w-auto md:h-20" />
      <div className="flex items-center gap-4 text-base font-semibold text-slate-600 md:gap-8">
        <Link href="/admin/events" className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">
          My Events
        </Link>
        <Link href="/admin/applications" className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">
          Applications
        </Link>
        <div className="relative">
          <button type="button" aria-label="Account" className="flex cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
            <CircleUser size={28} className="text-slate-500" />
          </button>
          <div className="absolute right-0 z-10 mt-3 w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-lg" style={{ display: isProfileMenuOpen ? 'block' : 'none' }}>
            <p className="text-sm font-semibold text-slate-700">John Doe</p>
            <p className="mt-1 text-xs text-slate-400 border-b border-slate-200 pb-2">john.doe@example.com</p>
            <Link href="/admin/profile" className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary">
              Edit Profile
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="mt-2 block w-full cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-red-600"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
