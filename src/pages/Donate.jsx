import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Heart, Shield, Zap } from "lucide-react"
import { donationTiers, faq } from "../data/content"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"

const TRUST_BADGES = [
  { icon: Shield, label: "Secure Payment" },
  { icon: Zap, label: "Instant Receipt" },
  { icon: Heart, label: "80G Tax Benefit" },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-3 text-left sm:py-4"
      >
        <span className="text-[9px] font-semibold text-primary sm:text-sm">{item.q}</span>
        {open ? <ChevronUp className="size-3.5 shrink-0 text-teal sm:size-4" /> : <ChevronDown className="size-3.5 shrink-0 text-muted-foreground sm:size-4" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-[8px] leading-[1.65] text-muted-foreground sm:pb-4 sm:text-sm">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Donate() {
  const [selected, setSelected] = useState(donationTiers[0].id)
  const [custom, setCustom] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleDonate = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary-soft">
        <div className="page-shell px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-teal sm:text-[11px]">Make a Difference</p>
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] text-primary sm:text-5xl lg:text-[56px]">
              Donate Today
            </h1>
            <p className="mt-3 text-[10px] leading-[1.65] text-muted-foreground sm:mt-5 sm:text-sm lg:text-[15px]">
              Your generosity directly funds education, healthcare, and food programs for families in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form + Info */}
      <section className="page-shell px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:gap-10">
          {/* Form */}
          <FadeIn>
            <form onSubmit={handleDonate} className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-8">
              <h2 className="font-heading text-[18px] font-bold text-primary sm:text-2xl">Choose Your Impact</h2>

              {/* Tiers */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {donationTiers.map((tier) => {
                  const active = selected === tier.id
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => { setSelected(tier.id); setCustom("") }}
                      aria-pressed={active}
                      className={`rounded-xl border p-2.5 text-center transition active:scale-95 sm:rounded-2xl sm:p-4 ${
                        active
                          ? "border-teal bg-primary-soft text-teal"
                          : "border-border bg-background text-primary hover:border-teal/40"
                      }`}
                    >
                      <span className="block text-[13px] font-extrabold sm:text-xl">{tier.amount}</span>
                      <span className="mt-0.5 block text-[7px] text-muted-foreground sm:mt-1 sm:text-xs">{tier.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Custom amount */}
              <div className="mt-3 sm:mt-4">
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-muted-foreground sm:text-sm">₹</span>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                    placeholder="Enter amount"
                    min="1"
                    className="w-full rounded-xl border border-border bg-background py-2.5 pl-7 pr-3 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:pl-8 sm:text-sm"
                  />
                </div>
              </div>

              {/* Donor info */}
              <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-[10px] font-bold text-white transition hover:bg-accent/90 active:scale-[0.98] sm:mt-6 sm:rounded-2xl sm:py-4 sm:text-sm"
              >
                <Heart className="size-3.5 fill-current sm:size-4" />
                {submitted ? "Thank you! 🙏" : "Donate Securely"}
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 sm:mt-4">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1 text-[7px] text-muted-foreground sm:text-[10px]">
                    <Icon className="size-3 text-teal sm:size-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </form>
          </FadeIn>

          {/* Sidebar info */}
          <FadeIn delay={0.1} className="space-y-3 sm:space-y-4">
            {donationTiers.map((tier) => (
              <div key={tier.id} className="rounded-xl border border-border bg-card p-3 sm:rounded-2xl sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-[15px] font-extrabold text-primary sm:text-xl">{tier.amount}</span>
                  <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[7px] font-bold text-teal sm:text-[9px]">{tier.label}</span>
                </div>
                <p className="mt-1 text-[8px] text-muted-foreground sm:mt-2 sm:text-xs">{tier.description}</p>
              </div>
            ))}

            <div className="rounded-xl border border-border bg-primary-soft p-3 sm:rounded-2xl sm:p-5">
              <p className="text-[8px] font-semibold text-primary sm:text-xs">
                🏛️ We are registered under <strong>Section 80G</strong>. All donations are eligible for tax deduction. Receipt sent within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-shell px-3 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <FadeIn><SectionHeading>Frequently Asked Questions</SectionHeading></FadeIn>
        <FadeIn className="mx-auto mt-4 max-w-2xl rounded-2xl border border-border bg-card px-4 sm:mt-6 sm:rounded-3xl sm:px-8">
          {faq.map((item) => <FaqItem key={item.id} item={item} />)}
        </FadeIn>
      </section>
    </main>
  )
}
