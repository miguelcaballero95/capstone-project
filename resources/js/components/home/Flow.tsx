import { CalendarDays, CheckCircle2, LucideIcon, Store } from "lucide-react"
import { FlowCard } from "./FlowCard"

export interface FlowItem {
  icon: LucideIcon
  color: 'blue' | 'green' | 'orange'
  number: string
  title: string
  copy: string
}

const items: FlowItem[] = [
  {
    icon: CalendarDays,
    color: 'blue',
    number: '01',
    title: 'Organizers create an event',
    copy: 'Set your date, upload a map, and mark out available stands.'
  },
  {
    icon: Store,
    color: 'green',
    number: '02',
    title: 'Vendors apply for a spot',
    copy: 'Browse upcoming markets and request the stand that fits your setup.'
  },
  {
    icon: CheckCircle2,
    color: 'orange',
    number: '03',
    title: 'Approve and go',
    copy: 'Organizers approve requests, vendors get confirmed — no back-and-forth messages needed.'
  },
]

export const Flow = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
      {items.map(item => <FlowCard key={item.number} item={item} />)}
    </section>
  )
}