import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Check } from "lucide-react"
import { CheckCircle } from "lucide-react"
import { volunteerRoles } from "../../data/content"
import { useApp } from "../../context/AppContext"
import FadeIn from "../../components/Common/FadeIn"
import SectionHeading from "../../components/Common/SectionHeading"

const STEPS = [
  { step: "01", title: "Apply Online", desc: "Fill the form below." },
  { step: "02", title: "Get Reviewed", desc: "We review within 48 hours." },
  { step: "03", title: "Orientation", desc: "Brief online session." },
  { step: "04", title: "Start Serving", desc: "Get assigned and begin." },
]

export default function VolunteerRegister() {
  const { addVolunteer } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", role: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    addVolunteer({ name: form.name, email: form.email, phone: form.phone, city: form.city, role: form.role })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-teal/10 sm:size-20">
            <CheckCircle className="size-8 text-teal sm:size-10" />
          </div>
          <h1 className="mt-4 font-heading text-[26px] font-extrabold text-primary sm:text-4xl">Application Submitted!</h1>
          <p className="mt-2 text-[10px] text-muted-foreground sm:text-sm">
            Thank you <strong>{form.name}</strong>! We'll review your application and get back to you within 48 hours.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate("/volunteer/panel")}
              className="rounded-full bg-teal px-6 py-2.5 text-[10px] font-bold text-white transition hover:bg-teal-dark sm:text-sm"
            >
              Go to Volunteer Panel
            </button>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", city: "", role: "", message: "" }) }}
              className="rounded-full border border-border px-6 py-2.5 text-[10px] font-bold text-primary transition hover:bg-muted sm:text-sm"
            >
              Register Another
            </button>
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal text-white">
        <div className="page-shell px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">Join Our Team</p>
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
              Volunteer Registration
            </h1>
            <p className="mt-3 text-[10px] leading-[1.65] text-white/80 sm:mt-5 sm:text-sm lg:text-[15px]">
              Join 800+ volunteers making a real difference across India. Fill in your details and we'll be in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="page-shell px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <FadeIn><SectionHeading>How It Works</SectionHeading></FadeIn>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-card p-3 sm:rounded-2xl sm:p-5">
                <span className="font-heading text-[28px] font-extrabold text-primary/10 sm:text-4xl">{s.step}</span>
                <h3 className="mt-1 text-[10px] font-bold text-primary sm:mt-2 sm:text-sm">{s.title}</h3>
                <p className="mt-1 text-[7px] leading-[1.5] text-muted-foreground sm:text-xs">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="page-shell px-3 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <FadeIn><SectionHeading>Apply Now</SectionHeading></FadeIn>
        <FadeIn className="mx-auto mt-4 max-w-xl sm:mt-6">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Full Name *</label>
                <input required value={form.name} onChange={set("name")} type="text" placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm" />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Email *</label>
                <input required value={form.email} onChange={set("email")} type="email" placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm" />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Phone *</label>
                <input required value={form.phone} onChange={set("phone")} type="tel" placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm" />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">City *</label>
                <input required value={form.city} onChange={set("city")} type="text" placeholder="Your city"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Area of Interest *</label>
                <select required value={form.role} onChange={set("role")}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary focus:border-teal focus:outline-none sm:rounded-2xl sm:py-3 sm:text-sm">
                  <option value="">Select a role</option>
                  {volunteerRoles.map((r) => <option key={r.id} value={r.title}>{r.title}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Why do you want to volunteer?</label>
                <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Tell us about yourself..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm" />
              </div>
            </div>
            <button type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal py-3 text-[10px] font-bold text-white transition hover:bg-teal-dark active:scale-[0.98] sm:mt-6 sm:rounded-2xl sm:py-4 sm:text-sm">
              Submit Application
            </button>
          </form>
        </FadeIn>
      </section>
    </main>
  )
}
