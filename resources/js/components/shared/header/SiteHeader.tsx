import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { CircleUser, Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const SiteHeader = () => {

  const { auth } = usePage().props;
  const isOrganizer = auth.user.role === 'organizer';

  const paths = [
    { path: '/events', label: isOrganizer ? 'My Events' : 'Upcoming Events' },
    { path: '/applications', label: isOrganizer ? 'Applications' : 'My Applications' },
  ]

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 shadow-sm md:px-8">
        <img
          src="/images/logo-landscape.png"
          className="h-16 w-auto md:h-20"
          alt="Logo"
        />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden">
          <Menu
            size={28}
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ display: isMobileMenuOpen ? 'none' : 'block' }}
          />
          <X
            size={28}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
          />
        </button>
        <div className="hidden md:flex items-center gap-4 text-base font-semibold text-slate-600 md:gap-8">
          {paths.map((path) => (
            <Link
              key={path.path}
              href={path.path}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">
              {path.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-label="Account"
              className="flex cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <CircleUser size={28} className="text-slate-500" />
            </button>
            <div
              className="absolute right-0 z-10 mt-3 w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-lg"
              style={{ display: isProfileMenuOpen ? 'block' : 'none' }}>
              <p className="text-sm font-semibold text-slate-700">
                {auth.user.first_name} {auth.user.last_name}
              </p>
              <p className="mt-1 text-xs text-slate-400 border-b border-slate-200 pb-2">
                {auth.user.email}
              </p>
              <Link
                href="/profile"
                className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary">
                Edit Profile
              </Link>
              <Link
                href="/logout"
                method="post"
                as="button"
                className="mt-2 block w-full cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-red-600">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={clsx(`relative md:hidden`, { hidden: !isMobileMenuOpen })}>
        <MobileMenu paths={paths} />
      </div>
    </>
  )
}
