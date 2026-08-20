import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Scale, Users } from "lucide-react"

const DATA = {
  leadership: { title: "Leadership", description: "Meet the leadership structure guiding our mission, programs and community initiatives.", icon: Users, items: ["Founder & President", "Executive Leadership", "Program Leadership", "Community Coordination"] },
  "legal-terms": { title: "Legal & Terms", description: "Organizational policies, terms and governance information for transparent engagement.", icon: Scale, items: ["Terms of Use", "Privacy Policy", "Donation Policy", "Volunteer Terms"] },
}

export default function AboutSubpage() {
  const { type } = useParams(); const data = DATA[type] || DATA.leadership; const Icon = data.icon
  return <main className="min-h-screen bg-background"><section className="border-b border-border bg-gradient-to-br from-primary-soft via-background to-secondary-soft px-4 py-14 sm:px-6 lg:px-10"><div className="mx-auto max-w-6xl"><Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-teal"><ArrowLeft className="size-4" /> Back to About Us</Link><div className="mt-7 flex items-center gap-4"><div className="grid size-14 place-items-center rounded-2xl bg-primary text-white"><Icon className="size-7" /></div><div><h1 className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">{data.title}</h1><p className="mt-3 max-w-2xl text-muted-foreground">{data.description}</p></div></div></div></section><section className="px-4 py-14 sm:px-6 lg:px-10"><div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{data.items.map((item,i)=><article key={item} className="rounded-3xl border border-border bg-card p-6 shadow-sm"><span className="text-xs font-bold text-accent">{String(i+1).padStart(2,"0")}</span><h2 className="mt-4 font-heading text-lg font-bold text-primary">{item}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Presentation placeholder content. Replace with approved organizational information.</p></article>)}</div></section></main>
}
