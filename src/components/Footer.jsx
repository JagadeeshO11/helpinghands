import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Camera, ChevronDown, ChevronUp, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Play, ShieldCheck, UserRound, X } from "lucide-react"
import Logo from "./Common/Logo"

const COLUMNS = [
  {
    title: "ABOUT US",
    links: [
      ["About Organization", "/about"],
      ["Leadership Desk", "/about/leadership"],
      ["Our Team", "/teams"],
      ["Volunteers", "/volunteer"],
      ["Privacy Policy", "/about/legal-terms"],
    ],
  },
  {
    title: "OUR WORK",
    links: [
      ["बाल शिक्षा अभियान", "/programs"],
      ["निःशुल्क स्वास्थ्य शिविर", "/programs"],
      ["महिला स्वयोरोजगार प्रशिक्षण", "/programs"],
      ["→ All Projects", "/programs"],
    ],
  },
  {
    title: "CAMPAIGNS",
    links: [
      ["Shiksha Jyoti: Education for 1000 Children", "/campaigns"],
      ["Arogya Sarv: Free Medical Camp Drive", "/campaigns"],
      ["Naari Shakti: Women Empowerment & Skill Training", "/campaigns"],
      ["Ration Mitra: Emergency Food Distribution", "/campaigns"],
      ["→ All Campaigns", "/campaigns"],
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      ["Make a Donation", "/donate"],
      ["Become a Member", "/support-us"],
      ["Volunteer With Us", "/volunteer"],
      ["Campaigns", "/campaigns"],
      ["🛡 Verify Member", "/support-us"],
      ["Partner With Us", "/contact"],
    ],
  },
  {
    title: "RESOURCE CENTRE",
    links: [
      ["Annual Report", "/about/reports"],
      ["Blog", "/resources/press-stories"],
      ["Gallery", "/resources/photos"],
      ["Events", "/events"],
    ],
  },
]

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Play, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Linkedin, label: "LinkedIn" },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-white sm:text-[14px]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map(([label, to]) => (
          <li key={`${title}-${label}`}>
            <NavLink to={to} className="text-[10px] leading-5 text-white/75 transition hover:text-white sm:text-[14px]">{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileColumn({ title, links }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button type="button" onClick={() => setOpen(v => !v)} className="flex min-h-12 w-full items-center justify-between text-left text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
        {title}{open ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-3"><ul className="space-y-2">{links.map(([label, to]) => <li key={`${title}-${label}`}><NavLink to={to} className="text-xs text-white/70 hover:text-white">{label}</NavLink></li>)}</ul></motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <footer id="footer" className="relative mt-0 overflow-hidden bg-[#373737] text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-10">
            {COLUMNS.map(column => <FooterColumn key={column.title} {...column} />)}
          </div>

          <div className="lg:hidden">
            {COLUMNS.map(column => <MobileColumn key={column.title} {...column} />)}
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1.05fr_1.45fr_.65fr] lg:gap-12 lg:px-16 lg:py-10">
            <div>
              <h3 className="font-heading text-base font-extrabold sm:text-lg">Global Impact Foundation</h3>
              <p className="mt-3 text-xs leading-6 text-white/75 sm:text-sm">C-42, First Floor, Jawahar Park, Khanpur, New Delhi – 110062</p>
              <p className="mt-1 text-xs leading-6 text-white/75 sm:text-sm">Contact: Tel: +91 9818398199 / +91-98765-43210 | E-mail: foundationsarvabhyudaya@gmail.com</p>
              <p className="mt-2 flex items-center gap-2 text-xs text-white/75 sm:text-sm"><span className="text-accent">●</span> Mon – Sat: 10:00 – 18:00</p>
              <div className="mt-5 flex gap-3">
                {SOCIALS.map(({ icon: Icon, label }) => <a key={label} href="#" aria-label={label} className="grid size-10 place-items-center rounded-full bg-white/10 text-white/80 transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"><Icon className="size-4" /></a>)}
              </div>
            </div>

            <div className="flex items-start">
              <p className="max-w-[650px] text-sm leading-7 text-white/75 sm:text-base">A registered NGO dedicated to education, health, livelihood, and community empowerment — working with transparency and community-driven impact across India.</p>
            </div>

            <div className="lg:justify-self-end">
              <p className="flex items-center gap-2 text-sm font-extrabold"><span className="text-accent">⌘</span> Scan to Support Us</p>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fhelpinghands.org%2Fdonate" alt="Scan to support Helping Hands" className="mt-4 size-36 rounded-xl border-4 border-[#ffb74d] bg-white p-1 object-contain" loading="eager" />
              <NavLink to="/donate" className="mt-5 inline-flex min-h-11 w-40 items-center justify-center gap-2 rounded-full bg-[#ff9700] px-5 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f38a00]"><Heart className="size-4 fill-current" /> Donate Now</NavLink>
              <a href="tel:+919818398199" className="mt-3 flex items-center gap-2 text-sm text-white/80"><Phone className="size-4 text-emerald-400" /> +91 9818398199</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 bg-[#292929]">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-3 px-6 py-4 text-center text-xs text-white/65 sm:px-10 lg:flex-row lg:justify-center lg:gap-5">
            <span>© 2026 Global Impact Foundation | All Rights Reserved</span>
            <span className="hidden lg:inline">|</span>
            <NavLink to="/about/legal-terms" className="hover:text-white">Terms &amp; Conditions</NavLink>
            <NavLink to="/about/legal-terms" className="hover:text-white">Privacy Policy</NavLink>
            <NavLink to="/about/legal-terms" className="hover:text-white">Disclaimer</NavLink>
            <NavLink to="/about/legal-terms" className="hover:text-white">Refund Policy</NavLink>
            <NavLink to="/about/legal-terms" className="hover:text-white">Shipping Policy</NavLink>
          </div>
        </div>
        <div className="bg-[#202020] px-6 py-3 text-center text-xs text-white/60"> <span className="text-orange-400">♥</span> Designed &amp; Developed by <strong className="text-white/80">Online Growth Hub</strong></div>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><ChevronUp className="size-5" /></button>
      </footer>

      <FloatingActions />
    </>
  )
}

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <a href="https://wa.me/919818398199" target="_blank" rel="noreferrer" className="pointer-events-auto grid size-14 place-items-center rounded-full bg-[#00d96b] text-white shadow-[0_10px_30px_rgba(0,0,0,.28)] transition hover:scale-105" aria-label="WhatsApp support"><MessageCircle className="size-7" /></a>
      <NavLink to="/volunteer" className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-[#ff9800] px-5 text-sm font-extrabold text-white shadow-[0_8px_24px_rgba(0,0,0,.25)] transition hover:-translate-y-0.5 hover:bg-[#f28c00]"><UserRound className="size-5" /> Volunteer</NavLink>
      <NavLink to="/support-us" className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-[#173d73] px-5 text-sm font-extrabold text-white shadow-[0_8px_24px_rgba(0,0,0,.25)] transition hover:-translate-y-0.5 hover:bg-[#0f315e]"><ShieldCheck className="size-5" /> Get Support</NavLink>
      <NavLink to="/donate" className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-[#ff9700] px-6 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(0,0,0,.3)] transition hover:-translate-y-0.5 hover:bg-[#f38a00]"><Heart className="size-5 fill-current" /> DONATE</NavLink>
    </div>
  )
}
