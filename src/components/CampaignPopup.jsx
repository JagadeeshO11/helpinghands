import { useEffect, useState } from "react"
import { ArrowRight, Heart, X } from "lucide-react"
import { Link } from "react-router-dom"

const CAMPAIGNS = [
  { name: "Every Child Deserves Education", raised: 68, goal: "₹5,00,000", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85", text: "Support learning materials, school supplies and better educational opportunities for children." },
  { name: "Healthy Communities", raised: 45, goal: "₹3,50,000", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85", text: "Help fund health camps, awareness programs and essential community care." },
  { name: "Meals With Dignity", raised: 82, goal: "₹4,00,000", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85", text: "Provide nutritious meals and food support to families facing hardship." },
  { name: "Women Empowerment Initiative", raised: 37, goal: "₹6,00,000", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85", text: "Support skills, livelihood opportunities and self-reliance for women." },
  { name: "Community Relief Fund", raised: 56, goal: "₹7,50,000", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85", text: "Create a rapid-response fund for urgent community needs and relief." },
  { name: "Green Neighbourhoods", raised: 29, goal: "₹2,50,000", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85", text: "Build cleaner communities through tree planting and environmental activities." },
]

export default function CampaignPopup() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const openTimer = window.setTimeout(() => setOpen(true), 900)
    const rotationTimer = window.setInterval(() => {
      setActive((current) => (current + 1) % CAMPAIGNS.length)
    }, 3000)
    return () => {
      window.clearTimeout(openTimer)
      window.clearInterval(rotationTimer)
    }
  }, [])

  if (!open) return null
  const campaign = CAMPAIGNS[active]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="campaign-popup-title">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-card shadow-2xl">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close campaign popup" className="absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition hover:scale-105 hover:bg-white"><X className="size-4" /></button>
        <div className="h-2 bg-gradient-to-r from-[#04458F] via-[#5E922C] to-[#EF9A0A]" />
        <div className="relative aspect-[16/8] overflow-hidden bg-muted">
          <img key={campaign.image} src={campaign.image} alt={campaign.name} className="h-full w-full object-cover transition-opacity duration-500" onError={(event) => { event.currentTarget.src = "/images/hero-girl.png" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
          <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent sm:text-xs"><Heart className="size-3.5 fill-current" /> Featured Campaign</span>
        </div>
        <div className="p-6 sm:p-8">
          <h2 id="campaign-popup-title" className="font-heading text-2xl font-extrabold leading-tight text-primary sm:text-3xl">{campaign.name}</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{campaign.text}</p>
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs font-bold"><span className="text-primary">Campaign progress</span><span className="text-teal">{campaign.raised}%</span></div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-primary-soft"><div className="h-full rounded-full bg-gradient-to-r from-[#04458F] to-[#5E922C] transition-all duration-700" style={{ width: `${campaign.raised}%` }} /></div>
            <p className="mt-2 text-right text-xs text-muted-foreground">Goal: <span className="font-bold text-primary">{campaign.goal}</span></p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/campaigns" onClick={() => setOpen(false)} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary/90">View Campaign <ArrowRight className="size-4" /></Link>
            <Link to="/donate" onClick={() => setOpen(false)} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary transition hover:bg-primary-soft">Support Now</Link>
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {CAMPAIGNS.map((item, index) => <button key={item.name} type="button" onClick={() => setActive(index)} aria-label={`Show ${item.name}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-6 bg-teal" : "w-1.5 bg-teal/25"}`} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
