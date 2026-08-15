import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Camera, ChevronDown, ChevronUp, Globe2, Mail, MapPin, Phone, Play, Share2 } from "lucide-react"
import Logo from "./Common/Logo"

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Donate", to: "/donate" },
  { label: "Contact", to: "/contact" },
]

const SERVICES = ["Education", "Healthcare", "Food Distribution", "Women Empowerment"]

const CONTACT_ITEMS = [
  { icon: MapPin, text: "12 Community Road, New Delhi, India" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "care@helpinghands.org" },
]

const SOCIALS = [
  { icon: Globe2, label: "Website" },
  { icon: Camera, label: "Instagram" },
  { icon: Share2, label: "LinkedIn" },
  { icon: Play, label: "YouTube" },
]

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/15">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex min-h-11 w-full items-center justify-between py-3 text-left text-[8px] font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
        {title}
        {open ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden pb-2">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-2 bg-teal-dark text-white">
      <div className="page-shell px-3 py-5 sm:px-6 sm:py-10 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl border border-white/25 bg-white/10 p-1 shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:size-16">
                <Logo variant="light" className="size-11 sm:size-13" />
              </span>
              <span>
                <b className="block text-[10px] font-extrabold sm:text-sm">HELPING HANDS</b>
                <small className="block text-[6px] uppercase tracking-[0.14em] text-white/70 sm:text-[9px]">Foundation</small>
              </span>
            </div>
            <p className="mt-3 max-w-[330px] text-[8px] leading-[1.55] text-white/75 sm:mt-4 sm:text-[11px] sm:leading-[1.7]">
              Committed to creating a better tomorrow for underprivileged communities through compassion and collective action.
            </p>
            <div className="mt-3 flex gap-1.5 sm:mt-5 sm:gap-2.5">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="grid size-7 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent sm:size-9">
                  <Icon className="size-3.5 sm:size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 lg:hidden">
            <AccordionSection title="Quick Links">
              <ul className="space-y-1.5 pb-1">{QUICK_LINKS.map((link) => <li key={link.to}><NavLink to={link.to} className="text-[8px] text-white/70 transition hover:text-accent sm:text-sm">{link.label}</NavLink></li>)}</ul>
            </AccordionSection>
            <AccordionSection title="Our Services">
              <ul className="space-y-1.5 pb-1">{SERVICES.map((s) => <li key={s} className="text-[8px] text-white/70 sm:text-sm">{s}</li>)}</ul>
            </AccordionSection>
            <AccordionSection title="Contact Us">
              <ul className="space-y-2 pb-1">{CONTACT_ITEMS.map(({ icon: Icon, text }) => <li key={text} className="flex items-start gap-2 text-[8px] text-white/70 sm:text-sm"><Icon className="mt-0.5 size-3.5 shrink-0 text-accent" />{text}</li>)}</ul>
            </AccordionSection>
          </div>

          <div className="hidden lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-8">
            <div><h3 className="text-[11px] font-bold uppercase tracking-[0.12em]">Quick Links</h3><ul className="mt-5 space-y-3">{QUICK_LINKS.map((link) => <li key={link.to}><NavLink to={link.to} className="text-[11px] text-white/70 transition hover:text-accent">{link.label}</NavLink></li>)}</ul></div>
            <div><h3 className="text-[11px] font-bold uppercase tracking-[0.12em]">Our Services</h3><ul className="mt-5 space-y-3 text-[11px] text-white/70">{SERVICES.map((s) => <li key={s}>{s}</li>)}</ul></div>
            <div><h3 className="text-[11px] font-bold uppercase tracking-[0.12em]">Contact Us</h3><ul className="mt-5 space-y-3">{CONTACT_ITEMS.map(({ icon: Icon, text }) => <li key={text} className="flex items-start gap-2.5 text-[11px] text-white/70"><Icon className="mt-0.5 size-4 shrink-0 text-accent" />{text}</li>)}</ul></div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[7px] text-white/55 sm:mt-8 sm:pt-5 sm:text-[9px]">
          <span>© 2026 Helping Hands Foundation. All Rights Reserved.</span>
          <NavLink to="/admin/login" className="text-white/30 transition hover:text-white/60">Admin</NavLink>
        </div>
      </div>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="absolute -top-3 right-3 grid size-8 place-items-center rounded-full bg-white text-teal shadow-md transition hover:bg-accent hover:text-white sm:-top-5 sm:right-4 sm:size-11">
        <ChevronUp className="size-4 sm:size-5" />
      </button>
    </footer>
  )
}
