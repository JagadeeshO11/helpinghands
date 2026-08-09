import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { causes } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Causes() {
  return (
    <section id="causes" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn><SectionHeading>Our Causes</SectionHeading></FadeIn>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 lg:grid-cols-4">
        {causes.map((cause, i) => (
          <FadeIn key={cause.id} delay={i * 0.08}>
            <article className="group h-full rounded-xl border border-[#eee9df] bg-[#fffdfa] p-2.5 shadow-[0_4px_14px_rgba(40,63,70,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5">
              <span className={`grid size-7 place-items-center rounded-full sm:size-11 sm:rounded-2xl ${cause.color === "accent" ? "bg-accent-soft text-accent" : "bg-primary-soft text-teal"}`}>
                <Icon name={cause.icon} className="size-4 sm:size-5" />
              </span>
              <h3 className="mt-2 text-[11px] font-bold text-primary sm:mt-4 sm:text-[15px]">{cause.title}</h3>
              <ul className="mt-1.5 space-y-0.5 text-[7px] leading-[1.4] text-muted-foreground sm:mt-3 sm:space-y-1 sm:text-[11px]">
                {cause.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <NavLink
                to="/programs"
                className={`mt-2 inline-flex min-h-7 items-center gap-1 text-[7px] font-bold transition hover:gap-2 sm:mt-4 sm:text-[10px] ${cause.color === "accent" ? "text-accent" : "text-teal"}`}
              >
                Learn More <ArrowRight className="size-2.5 sm:size-3" />
              </NavLink>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
