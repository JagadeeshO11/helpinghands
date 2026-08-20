import { Link } from "react-router-dom"
import { ArrowRight, Heart, Target } from "lucide-react"

const CAMPAIGNS = [
  { name: "Every Child Deserves Education", raised: 68, goal: "₹5,00,000", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85", text: "Support learning materials, school supplies and educational opportunities for children." },
  { name: "Healthy Communities", raised: 45, goal: "₹3,50,000", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85", text: "Help fund health camps, awareness programs and essential community care." },
  { name: "Meals With Dignity", raised: 82, goal: "₹4,00,000", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85", text: "Provide nutritious meals and food support to families facing hardship." },
  { name: "Women Empowerment Initiative", raised: 37, goal: "₹6,00,000", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85", text: "Support skills, livelihood opportunities and self-reliance for women." },
  { name: "Community Relief Fund", raised: 56, goal: "₹7,50,000", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85", text: "Create a rapid-response fund for urgent community needs and relief." },
  { name: "Green Neighbourhoods", raised: 29, goal: "₹2,50,000", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85", text: "Build cleaner communities through tree planting and environmental activities." },
]

function CampaignCard({ campaign }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img src={campaign.image} alt={campaign.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" onError={(event) => { event.currentTarget.src = "/images/hero-girl.png" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-accent">{campaign.raised}% funded</span>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-teal"><Heart className="size-6" /></div></div>
        <h2 className="mt-5 font-heading text-xl font-extrabold text-primary">{campaign.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{campaign.text}</p>
        <div className="mt-6"><div className="flex items-center justify-between text-xs font-bold"><span className="text-primary">Progress</span><span className="text-teal">{campaign.raised}%</span></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-primary-soft"><div className="h-full rounded-full bg-gradient-to-r from-[#04458F] to-[#5E922C]" style={{ width: `${campaign.raised}%` }} /></div><div className="mt-2 text-right text-xs text-muted-foreground">Goal: <span className="font-bold text-primary">{campaign.goal}</span></div></div>
        <Link to="/campaigns" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-teal">View campaign <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>
    </article>
  )
}

export default function Campaigns() {
  return <main className="min-h-screen bg-background"><section className="border-b border-border bg-gradient-to-br from-primary-soft via-background to-secondary-soft px-4 py-14 sm:px-6 lg:px-10 lg:py-20"><div className="mx-auto max-w-6xl"><span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal shadow-sm"><Target className="size-4" /> Our Campaigns</span><h1 className="mt-5 font-heading text-4xl font-extrabold text-primary sm:text-5xl">Together, We Can Make Change Happen</h1><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Explore our community campaigns and see how every contribution helps move a goal closer to reality.</p></div></section><section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20"><div className="mx-auto max-w-6xl"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Make an impact</p><h2 className="mt-2 font-heading text-3xl font-extrabold text-primary">Active Campaigns</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{CAMPAIGNS.map(c => <CampaignCard key={c.name} campaign={c} />)}</div></div></section></main>
}
