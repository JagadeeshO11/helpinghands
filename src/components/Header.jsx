import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
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

  // Close menu on route change
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
    `block rounded-xl px-4 py-3 text-[13px] font-semibold transition ${
      isActive ? "bg-primary-soft text-teal" : "text-primary hover:bg-primary-soft"
    }`

  return (
    <header
      className={`relative sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Main bar */}
      <div className="page-shell flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:px-6 lg:h-[76px] lg:px-8">
        {/* Left: hamburger + logo */}
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 shrink-0 place-items-center rounded-xl text-teal transition hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-accent lg:hidden"
          >
            {/* Animated icon swap — no layout shift */}
            <span className="relative size-5">
              <Menu
                className={`absolute inset-0 size-5 transition-all duration-200 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 size-5 transition-all duration-200 ${
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>

          <NavLink to="/" className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <span className="grid size-8 place-items-center rounded-full border border-[#cbe7e8] bg-[#effafa] sm:size-9">
              <Logo className="size-5 sm:size-6" />
            </span>
            <span className="leading-none">
              <span className="block font-heading text-[10px] font-extrabold tracking-[-0.02em] text-primary sm:text-[13px]">
                HELPING HANDS
              </span>
              <span className="mt-0.5 block text-[6px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-[9px]">
                Foundation
              </span>
            </span>
          </NavLink>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Donate CTA */}
        <NavLink
          to="/donate"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-[10px] font-bold text-accent-foreground shadow-sm transition hover:bg-accent/90 active:scale-95 sm:px-4 sm:text-sm"
        >
          Donate
          <Heart className="size-3.5 fill-current sm:size-4" />
        </NavLink>
      </div>

      {/* Mobile drawer — absolute so it overlays content, never pushes page down */}
      <div
        className={`absolute left-0 right-0 top-full z-40 border-b border-border bg-card shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1.5 px-3 py-3 sm:px-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={mobileLinkClass}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
