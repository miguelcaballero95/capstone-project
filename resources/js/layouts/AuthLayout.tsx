import { Link } from "@inertiajs/react"
import { PropsWithChildren } from "react"

export default function AuthLayout({ children }: PropsWithChildren) {
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
        {children}
      </div>
    </main>
  )
}