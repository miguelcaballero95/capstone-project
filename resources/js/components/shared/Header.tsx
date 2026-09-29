import { Link } from "@inertiajs/react";
import clsx from "clsx";
import { CircleUser, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 shadow-sm md:px-8">
        <img src="/images/logo-landscape.png" alt="Logo" className="h-16 w-auto md:h-20" />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          <Menu size={28} onClick={() => setIsMobileMenuOpen(true)} style={{ display: isMobileMenuOpen ? 'none' : 'block' }} />
          <X size={28} onClick={() => setIsMobileMenuOpen(false)} style={{ display: isMobileMenuOpen ? 'block' : 'none' }} />
        </button>
        <div className="hidden md:flex items-center gap-4 text-base font-semibold text-slate-600 md:gap-8">
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
      <div className={clsx(`relative md:hidden`, { hidden: !isMobileMenuOpen })}>
        <div className="absolute z-10 bg-white w-full py-10">
          <div className="flex flex-col items-center justify-center text-slate-600 gap-4 text-lg">
            <Link href="/admin/events" className="rounded-lg px-3 py-2 font-semibold">
              My Events
            </Link>
            <Link href="/admin/applications" className="rounded-lg px-3 py-2 font-semibold">
              Applications
            </Link>
            <Link href="/admin/profile" className="rounded-lg px-3 py-2 font-semibold">
              Edit Profile
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-red-600">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
