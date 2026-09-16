import { Sparkles, Store } from "lucide-react"
import { BenefitCard } from "./BenefitCard"

export const Benefits = () => {
  return (
    <section className="px-6 py-20 lg:py-18">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Built For Both Sides
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#414754] sm:text-lg">
          Whether you curate community events or build an artisan business, StallSpot replaces friction with flow.
        </p>
      </div>;
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        <BenefitCard
          audience="For Event Curators & Organizers"
          title="Benefits for Organizers"
          color="blue"
          icon={Sparkles}
          items={[
            'No more spreadsheets — see every stand, every applicant, in one dashboard',
            'Visual event maps make it obvious what’s open and what’s taken',
            'Approve or reject vendor requests in a click',
            'Fewer emails and DMs chasing vendor confirmations']}
        />
        <BenefitCard
          audience="For Artisans, Makers & Stalls"
          title="Benefits for Vendors"
          color="green"
          icon={Store}
          items={[
            'Browse upcoming markets in one place instead of hunting across social media',
            'Apply for the exact stand you want, based on the event map',
            'Track your application status without waiting on a reply',
            'One profile, reusable across every event you apply to'
          ]}
        />
      </div>
    </section>
  )
}