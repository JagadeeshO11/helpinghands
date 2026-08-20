import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { programs } from "../data/content"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Programs() {
  return (
    <section id="programs" className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><SectionHeading>Our Programs</SectionHeading></FadeIn>
        <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {programs.map((program, i) => (
            <FadeIn key={program.id} delay={i * 0.1} className="w-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" decoding="async" loading="lazy" />
                  {program.tag && <span className="absolute left-3 top-3 rounded-full bg-teal px-2.5 py-1 text-[8px] font-bold text-white sm:text-[9px]">{program.tag}</span>}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-primary sm:text-base">{program.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">{program.description}</p>
                  <NavLink to="/programs" className="mt-4 inline-flex min-h-9 items-center gap-1.5 text-xs font-bold text-teal transition hover:gap-2.5">Learn More <ArrowRight className="size-3.5" /></NavLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
