import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Heart, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Contact", to: "/contact" },
]

const LOGO_URL = "https://res.cloudinary.com/dwmjz9csc/image/upload/v1786889497/9ec8064b-61d9-4e70-897d-4790e9ea2cdf-removebg-preview_ogtw6d.png"

const SOCIAL_LINKS = [
  { label: "Facebook", glyph: "f", className: "text-[#1877F2]" },
  { label: "Instagram", glyph: "◎", className: "text-[#E4405F]" },
  { label: "YouTube", glyph: "▶", className: "text-[#FF0000]" },
  { label: "LinkedIn", glyph: "in", className: "text-[#0A66C2]" },
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
      <div className="relative z-[60] h-[40px] overflow-hidden border-b border-[#04458F]/20 bg-white text-primary sm:h-[44px]">
        <div className="page-shell flex h-full items-center gap-4 px-3 sm:px-6 lg:px-8">
          <div className="relative flex w-1/2 shrink-0 items-center overflow-hidden border-l-2 border-[#04458F] sm:h-full">
            <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-10 whitespace-nowrap pl-4 text-[9px] font-semibold sm:gap-14 sm:text-[11px]">
              {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-2">
                  <span className="font-extrabold uppercase tracking-[0.14em] text-[#EF9A0A]">Latest</span>
                  <span className="text-[#061D49]/80">{item}</span>
                  <span className="text-[#04458F]">•</span>
                </span>
              ))}
            </div>
          </div>
          <div className="ml-auto flex w-1/2 items-center justify-end gap-2 border-r-2 border-[#04458F] pr-2 sm:gap-3 sm:pr-3">
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-[#061D49]/55 sm:block">Follow us</span>
            {SOCIAL_LINKS.map(({ label, glyph, className }) => (
              <span key={label} aria-label={`${label} link coming soon`} title={`${label} link coming soon`} className={`grid size-6 cursor-default place-items-center rounded-md transition sm:size-7 ${className}`}>
                <span className="text-[11px] font-extrabold leading-none sm:text-xs" aria-hidden="true">{glyph}</span>
              </span>
            ))}
          </div>
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
