import { Link } from "@inertiajs/react"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="py-8 text-center lg:pb-8 lg:pt-16 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Find your spot. Fill your fair.
        </div>
        <h1 className="max-w-4xl font-display text-2xl font-extrabold tracking-tight md:text-4xl lg:text-6xl">
          StallSpot - The easiest way to run and join local markets
        </h1>
        <p className="mt-6 max-w-2xl text-sm md:text-lg lg:text-xl leading-relaxed text-gray-600">
          Create events, manage vendor stands, and skip the spreadsheet chaos. One platform for organizers and vendors alike.
        </p>
        <div className="mt-10 flex flex-row md:flex-col w-full md:w-auto items-center gap-4">
          <Link
            href="/register"
            className="flex w-full items-center justify-center gap-4 md:gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm md:text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 sm:w-auto ">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}