import { ArrowRight, Check } from "lucide-react"
import { NavLink } from "react-router-dom"
import { volunteer } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function VolunteerCTA() {
  return (
    <section id="volunteer" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="relative min-h-[190px] overflow-hidden rounded-2xl bg-teal text-white shadow-lg sm:min-h-0 sm:rounded-3xl">
        <img
          src={volunteer.image}
          alt="Volunteers"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-teal/80" />
        <div className="relative z-10 p-4 sm:grid sm:grid-cols-2 sm:items-center sm:gap-6 sm:p-8 lg:p-10">
          <div>
            <h2 className="font-heading text-[27px] font-bold leading-[1.02] sm:text-3xl">{volunteer.title}</h2>
            <p className="mt-1 text-[9px] text-white/85 sm:mt-2 sm:text-sm">{volunteer.subtitle}</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[8px] sm:mt-5 sm:gap-3 sm:text-sm">
              {volunteer.items.map((item) => (
                <li key={item} className="flex items-center gap-1">
                  <span className="grid size-3 place-items-center rounded-full bg-accent sm:size-5">
                    <Check className="size-2 sm:size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <NavLink
              to="/volunteer"
              className="mt-3 inline-flex min-h-9 items-center gap-1 rounded-full bg-white px-3 py-2 text-[8px] font-bold text-teal transition hover:bg-accent hover:text-white sm:mt-6 sm:px-5 sm:text-xs"
            >
              Join Now <ArrowRight className="size-3 sm:size-4" />
            </NavLink>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
