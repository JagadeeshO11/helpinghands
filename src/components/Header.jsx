import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Heart, Menu, X, ChevronDown } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaBolt, FaPhoneAlt } from "react-icons/fa"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Teams", to: "/teams", dropdown: true },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Contact", to: "/contact" },
]

const TEAM_LINKS = [
  { label: "Management Team", to: "/teams/management" },
  { label: "General Members", to: "/teams/members" },
  { label: "Valued Donors", to: "/teams/donors" },
  { label: "Volunteers", to: "/teams/volunteers" },
]

const LOGO_URL = "https://res.cloudinary.com/dwmjz9csc/image/upload/v1786889497/9ec8064b-61d9-4e70-897d-4790e9ea2cdf-removebg-preview_ogtw6d.png"
const SOCIAL_LINKS = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
]
const NEWS_ITEMS = [
  "Helping communities. Creating hope.",
  "Volunteer with Helping Hands and make an impact.",
  "Every contribution helps us reach another family in need.",
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [teamsOpen, setTeamsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setTeamsOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = ({ isActive }) => `text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isActive ? "text-teal" : "text-primary hover:text-teal"}`
  const mobileLinkClass = ({ isActive }) => `block rounded-xl px-4 py-3 text-[13px] font-semibold transition ${isActive ? "bg-primary-soft text-teal" : "text-primary hover:bg-primary-soft"}`

  return (
    <>
      <div className="relative z-[60] w-full border-b border-[#04458F]/20 bg-white text-[#061D49]">
        <div className="flex min-h-10 w-full items-stretch sm:min-h-11">
          <div className="flex shrink-0 items-center gap-2 bg-gradient-to-r from-[#196823] to-[#5E922C] px-2 text-white sm:gap-3 sm:px-5 lg:px-6">
            {SOCIAL_LINKS.map(({ label, icon: Icon }) => <span key={label} title={`${label} link coming soon`} aria-label={`${label} link coming soon`} className="transition-colors hover:text-[#EF9A0A]"><Icon className="size-3 sm:size-4" aria-hidden="true" /></span>)}
          </div>
          <div className="flex min-w-0 flex-1 items-center overflow-hidden bg-white">
            <div className="flex h-full shrink-0 items-center gap-1 border-y border-[#04458F]/20 bg-white px-1.5 py-1 text-[9px] font-bold sm:gap-2 sm:px-2.5 sm:text-xs"><FaBolt className="text-[#EF9A0A]" aria-hidden="true" /><span className="text-[#EF9A0A]">Latest</span></div>
            <div className="news-marquee-viewport bg-white"><div className="news-marquee-track">{[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => <span key={`${item}-${index}`} className="inline-flex shrink-0 items-center text-[9px] text-[#061D49] transition-colors hover:text-[#04458F] sm:text-sm"><span>{item}</span><span className="mx-4 text-[#04458F] sm:mx-8">•</span></span>)}</div></div>
          </div>
          <a href="tel:+919818398199" className="flex shrink-0 items-center gap-1 bg-gradient-to-r from-[#196823] to-[#5E922C] px-2 text-[9px] font-semibold text-white transition-all hover:text-[#EF9A0A] sm:gap-2 sm:px-5 sm:text-sm lg:px-6"><FaPhoneAlt className="size-2.5 sm:size-3" aria-hidden="true" /><span className="hidden min-[400px]:inline">+91 98183 98199</span><span className="min-[400px]:hidden">Call</span></a>
        </div>
      </div>

      <header className={`relative sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
        <div className="flex h-[75px] w-full items-center justify-between gap-2 px-2 sm:h-[86px] sm:px-5 lg:h-[97px] lg:px-6">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2.5">
            <button type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="grid size-9 shrink-0 place-items-center rounded-xl text-teal transition hover:bg-primary-soft lg:hidden"><span className="relative size-5"><Menu className={`absolute inset-0 size-5 transition-all ${open ? "rotate-90 opacity-0" : "opacity-100"}`} /><X className={`absolute inset-0 size-5 transition-all ${open ? "opacity-100" : "-rotate-90 opacity-0"}`} /></span></button>
            <NavLink to="/" className="group flex shrink-0 items-center gap-2 sm:gap-3"><span className="grid size-18 place-items-center rounded-full bg-transparent p-1 transition duration-300 group-hover:-translate-y-0.5 sm:size-21 lg:size-24"><img src={LOGO_URL} alt="Helping Hands Foundation" className="size-15 object-contain sm:size-18 lg:size-21" /></span><span className="leading-none"><span className="block font-heading text-[11px] font-extrabold tracking-[-0.02em] text-primary sm:text-[14px] lg:text-[16px]">HELPING HANDS</span><span className="mt-1 block text-[6px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-[9px] lg:text-[10px]">Foundation</span></span></NavLink>
          </div>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map(link => link.dropdown ? (
              <div key={link.to} className="relative" onMouseEnter={() => setTeamsOpen(true)} onMouseLeave={() => setTeamsOpen(false)}>
                <NavLink to={link.to} className={`${linkClass({ isActive: pathname.startsWith("/teams") })} inline-flex items-center gap-1`}>Teams <ChevronDown className="size-3.5" /></NavLink>
                <div className={`absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 shadow-xl transition-all duration-200 ${teamsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                  <NavLink to="/teams" className="block rounded-xl px-3 py-2.5 text-sm font-bold text-primary hover:bg-primary-soft">All Teams</NavLink>
                  {TEAM_LINKS.map(item => <NavLink key={item.to} to={item.to} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft">{item.label}</NavLink>)}
                </div>
              </div>
            ) : <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>{link.label}</NavLink>)}
          </nav>
          <NavLink to="/donate" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-[10px] font-bold text-accent-foreground shadow-sm transition hover:bg-accent/90 active:scale-95 sm:px-4 sm:text-sm">Donate<Heart className="size-3.5 fill-current sm:size-4" /></NavLink>
        </div>
        <div className={`absolute left-0 right-0 top-full z-40 border-b border-border bg-card shadow-lg transition-all duration-300 lg:hidden ${open ? "max-h-[520px] opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
          <nav aria-label="Mobile navigation" className="grid gap-1.5 px-3 py-3 sm:px-6">
            {NAV_LINKS.map(link => link.dropdown ? <div key={link.to}><div className="flex items-center justify-between"><NavLink to="/teams" className={mobileLinkClass({ isActive: pathname.startsWith("/teams") })}>Teams</NavLink><button type="button" onClick={() => setTeamsOpen(v => !v)} aria-label="Toggle Teams submenu" className="mr-2 grid size-9 place-items-center rounded-lg text-teal"><ChevronDown className={`size-4 transition-transform ${teamsOpen ? "rotate-180" : ""}`} /></button></div>{teamsOpen && <div className="ml-3 border-l-2 border-[#5E922C] pl-2">{TEAM_LINKS.map(item => <NavLink key={item.to} to={item.to} className={mobileLinkClass}>{item.label}</NavLink>)}</div>}</div> : <NavLink key={link.to} to={link.to} end={link.to === "/"} className={mobileLinkClass}>{link.label}</NavLink>)}
          </nav>
        </div>
      </header>
    </>
  )
}
