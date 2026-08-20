import { useEffect, useState } from "react"
import { ArrowRight, Heart, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function CampaignPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="campaign-popup-title">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-card shadow-2xl">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close campaign popup" className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition hover:scale-105 hover:bg-white">
          <X className="size-4" />
        </button>
        <div className="h-2 bg-gradient-to-r from-[#04458F] via-[#5E922C] to-[#EF9A0A]" />
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent sm:text-xs">
            <Heart className="size-3.5 fill-current" /> Featured Campaign
          </span>
          <h2 id="campaign-popup-title" className="mt-4 font-heading text-2xl font-extrabold leading-tight text-primary sm:text-3xl">Every Child Deserves Education</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">Help provide school supplies, learning materials and better educational opportunities for children in underserved communities.</p>
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs font-bold"><span className="text-primary">Campaign progress</span><span className="text-teal">68%</span></div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-primary-soft"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#04458F] to-[#5E922C]" /></div>
            <p className="mt-2 text-right text-xs text-muted-foreground">Goal: <span className="font-bold text-primary">₹5,00,000</span></p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/campaigns" onClick={() => setOpen(false)} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary/90">View Campaign <ArrowRight className="size-4" /></Link>
            <Link to="/donate" onClick={() => setOpen(false)} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-bold text-primary transition hover:bg-primary-soft">Support Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
