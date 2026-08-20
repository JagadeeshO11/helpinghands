import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Heart, Menu, X } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaBolt, FaPhoneAlt } from "react-icons/fa"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Contact", to: "/contact" },
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
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isActive ? "text-teal" : "text-primary hover:text-teal"}`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-[13px] font-semibold transition ${isActive ? "bg-primary-soft text-teal" : "text-primary hover:bg-primary-soft"}`

  return (
    <>
      <div className="relative z-[60] w-full border-b border-slate-700/50 bg-[#0d2838] text-white">
        <div className="flex min-h-10 w-full items-center gap-3 py-2 sm:min-h-11">
          <div className="flex shrink-0 items-center gap-3 pl-3 sm:pl-5 lg:pl-6">
            {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
              <span key={label} title={`${label} link coming soon`} aria-label={`${label} link coming soon`} className="text-white transition-colors hover:text-orange-400">
                <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
              </span>
            ))}
          </div>

          <div className="relative hidden min-w-0 flex-1 items-center overflow-hidden md:flex">
            <div className="flex shrink-0 items-center gap-2 rounded-md bg-[#0b1f2c] px-2.5 py-1 text-[10px] font-bold sm:text-xs">
              <FaBolt className="text-[#EF9A0A]" aria-hidden="true" />
              <span>News</span>
            </div>
            <div className="relative ml-3 min-w-0 flex-1 overflow-hidden">
              <div className="flex w-max animate-[marquee_18s_linear_infinite] items-center whitespace-nowrap hover:[animation-play-state:paused]">
                {[...NEWS_ITEMS, ...NEWS_ITEMS, ...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex shrink-0 items-center text-xs text-white/85 transition-colors hover:text-orange-300 sm:text-sm">
                    <span>{item}</span>
                    <span className="mx-8 text-white/45">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a href="tel:+919818398199" className="mr-3 flex shrink-0 items-center gap-2 rounded-md bg-[#EF9A0A] px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-orange-600 sm:mr-5 sm:text-sm lg:mr-6">
            <FaPhoneAlt className="size-3" aria-hidden="true" />
            <span>+91 98183 98199</span>
          </a>
        </div>
      </div>

      <header className={`relative sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
        <div className="page-shell flex h-[75px] items-center justify-between gap-2 px-3 sm:h-[86px] lg:h-[97px] sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2.5">
            <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="grid size-9 shrink-0 place-items-center rounded-xl text-teal transition hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-accent lg:hidden">
              <span className="relative size-5"><Menu className={`absolute inset-0 size-5 transition-all duration-200 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} /><X className={`absolute inset-0 size-5 transition-all duration-200 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} /></span>
            </button>
            <NavLink to="/" className="group flex shrink-0 items-center gap-2 sm:gap-3">
              <span className="grid size-18 place-items-center rounded-full bg-transparent p-1 transition duration-300 group-hover:-translate-y-0.5 sm:size-21 lg:size-24">
                <img src={LOGO_URL} alt="Helping Hands Foundation" className="size-15 object-contain sm:size-18 lg:size-21" />
              </span>
              <span className="leading-none"><span className="block font-heading text-[11px] font-extrabold tracking-[-0.02em] text-primary sm:text-[14px] lg:text-[16px]">HELPING HANDS</span><span className="mt-1 block text-[6px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-[9px] lg:text-[10px]">Foundation</span></span>
            </NavLink>
          </div>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">{NAV_LINKS.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>{link.label}</NavLink>)}</nav>
          <NavLink to="/donate" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-[10px] font-bold text-accent-foreground shadow-sm transition hover:bg-accent/90 active:scale-95 sm:px-4 sm:text-sm">Donate<Heart className="size-3.5 fill-current sm:size-4" /></NavLink>
        </div>
        <div className={`absolute left-0 right-0 top-full z-40 border-b border-border bg-card shadow-lg transition-all duration-300 ease-in-out lg:hidden ${open ? "max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`} aria-hidden={!open}>
          <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1.5 px-3 py-3 sm:px-6">{NAV_LINKS.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={mobileLinkClass} tabIndex={open ? 0 : -1}>{link.label}</NavLink>)}</nav>
        </div>
      </header>
    </>
  )
}
