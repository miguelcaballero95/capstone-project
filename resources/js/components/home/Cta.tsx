import { Link } from "@inertiajs/react"
import { ArrowRight, CheckCircle2, LockKeyhole, Zap } from "lucide-react"

export const Cta = () => {
  return (
    <section className="px-6 py-16 lg:py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-10 text-center text-white shadow-md sm:p-14 lg:p-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ready to simplify your next market?
          </h2>
          <p className="mb-10 mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Join hundreds of market organizers and independent vendors organizing better events today.
          </p>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Link href="/register" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-white/95 sm:w-auto">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/80 sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} />Free plan available
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap size={15} />Instant setup in 5 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LockKeyhole size={15} />Secure vendor processing
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}