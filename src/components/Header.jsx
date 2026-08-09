import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Menu, X } from "lucide-react"
import Logo from "./Common/Logo"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Contact", to: "/contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
      isActive ? "text-teal" : "text-primary hover:text-teal"
    }`

  const mobileLinkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-[11px] font-semibold transition ${
      isActive ? "bg-primary-soft text-teal" : "text-primary hover:bg-primary-soft"
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="page-shell flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:px-6 lg:h-[76px] lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-xl text-teal transition hover:bg-primary-soft lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <NavLink to="/" className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="grid size-8 place-items-center rounded-full border border-[#cbe7e8] bg-[#effafa] sm:size-9">
              <Logo className="size-5 sm:size-6" />
            </span>
            <span className="leading-none">
              <span className="block font-heading text-[11px] font-extrabold tracking-[-0.02em] text-primary sm:text-[13px]">
                HELPING HANDS
              </span>
              <span className="mt-0.5 block text-[6px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-[9px]">
                Foundation
              </span>
            </span>
          </NavLink>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/donate"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-[10px] font-bold text-accent-foreground shadow-sm transition hover:bg-accent/90 active:scale-95 sm:px-4 sm:text-sm"
        >
          Donate
          <Heart className="size-3.5 fill-current sm:size-4" />
        </NavLink>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1 px-3 py-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} className={mobileLinkClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
