import { useState } from "react"
import { Heart } from "lucide-react"
import { NavLink } from "react-router-dom"
import { donationTiers } from "../data/content"
import Logo from "./Common/Logo"
import FadeIn from "./Common/FadeIn"

export default function SupportMission() {
  const [selected, setSelected] = useState(donationTiers[0].id)

  return (
    <section id="support" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="relative overflow-hidden rounded-2xl bg-teal-dark p-4 text-white shadow-lg sm:rounded-3xl sm:p-8 lg:p-10">
        <Logo variant="light" className="pointer-events-none absolute right-2 top-2 w-16 opacity-10 sm:right-5 sm:top-5 sm:w-28" aria-hidden="true" />
        <h2 className="font-heading text-[24px] font-bold sm:text-3xl lg:text-[36px]">Support Our Mission</h2>
        <p className="mt-1 max-w-md text-[9px] text-white/80 sm:mt-2 sm:text-sm">
          Every contribution helps us reach another family in need.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-4">
          {donationTiers.map((tier) => {
            const active = selected === tier.id
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelected(tier.id)}
                aria-pressed={active}
                className={`min-h-16 rounded-lg border p-3 text-center transition active:scale-95 sm:min-h-20 sm:rounded-xl sm:p-4 ${
                  active ? "border-accent bg-accent/20" : "border-white/25 bg-white/10 hover:bg-white/15"
                }`}
              >
                <span className="block text-[13px] font-extrabold sm:text-base">{tier.amount}</span>
                <span className="mt-0.5 block text-[10px] leading-tight text-white/80 sm:mt-1 sm:text-[10px]">{tier.label}</span>
              </button>
            )
          })}
        </div>
        <NavLink
          to="/donate"
          className="mt-3 flex min-h-11 w-full items-center justify-center gap-1.5 rounded-md bg-accent py-2.5 text-[9px] font-bold text-white transition hover:bg-accent/90 sm:mt-6 sm:text-sm"
        >
          <Heart className="size-3.5 sm:size-4" />
          Donate Securely
        </NavLink>
      </FadeIn>
    </section>
  )
}
