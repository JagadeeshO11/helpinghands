import { CalendarDays, ArrowRight, MapPin, Newspaper } from "lucide-react"
import { Link } from "react-router-dom"

const UPCOMING = [
  { date: "15 Sep 2026", title: "Community Health Camp", location: "Local Community Centre", text: "Free basic health screening, awareness sessions and wellness guidance for families." },
  { date: "02 Oct 2026", title: "Gandhi Jayanti Service Drive", location: "Community Outreach Area", text: "A volunteer-led cleanliness, food distribution and community service initiative." },
  { date: "14 Nov 2026", title: "Children's Education Day", location: "Helping Hands Learning Centre", text: "Learning activities, school-supply support and an inspiring day for children." },
]

const NEWS = [
  { date: "20 Aug 2026", title: "Helping Hands expands community outreach", text: "Our volunteers are preparing new local outreach activities focused on education, health and community welfare." },
  { date: "12 Aug 2026", title: "Volunteer network welcomes new members", text: "More community members have joined our volunteer network to support upcoming programs." },
  { date: "28 Jul 2026", title: "Education support initiative begins", text: "A new presentation-phase initiative connects learning support with community participation." },
]

export default function Events() {
  return <main className="min-h-screen bg-background">
    <section className="border-b border-border bg-gradient-to-br from-primary-soft via-background to-secondary-soft px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl"><span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal shadow-sm"><CalendarDays className="size-4" /> Events & News</span><h1 className="mt-5 font-heading text-4xl font-extrabold text-primary sm:text-5xl">Stay Connected With Our Work</h1><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Follow upcoming community events, latest announcements and stories from Helping Hands Foundation.</p></div>
    </section>

    <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20"><div className="mx-auto max-w-6xl">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">What's next</p><h2 className="mt-2 font-heading text-3xl font-extrabold text-primary">Upcoming Events</h2></div></div>
      <div className="grid gap-6 lg:grid-cols-3">{UPCOMING.map(event => <article key={event.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="bg-primary px-6 py-5 text-white"><p className="text-sm font-bold text-white/80">{event.date}</p><h3 className="mt-1 font-heading text-xl font-bold">{event.title}</h3></div><div className="p-6"><div className="flex items-center gap-2 text-sm font-semibold text-teal"><MapPin className="size-4" />{event.location}</div><p className="mt-4 text-sm leading-6 text-muted-foreground">{event.text}</p><button type="button" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Event details <ArrowRight className="size-4" /></button></div></article>)}</div>
    </div></section>

    <section className="bg-primary-soft px-4 py-14 sm:px-6 lg:px-10 lg:py-20"><div className="mx-auto max-w-6xl"><div className="flex items-end gap-3"><Newspaper className="size-7 text-accent" /><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Latest</p><h2 className="mt-1 font-heading text-3xl font-extrabold text-primary">News & Updates</h2></div></div><div className="mt-8 grid gap-5 md:grid-cols-3">{NEWS.map(item => <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm"><time className="text-xs font-bold text-accent">{item.date}</time><h3 className="mt-3 font-heading text-xl font-bold text-primary">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p><Link to="/resources/press-stories" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">Read stories <ArrowRight className="size-4" /></Link></article>)}</div></div></section>
  </main>
}
