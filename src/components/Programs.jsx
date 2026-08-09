import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { programs } from "../data/content"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Programs() {
  return (
    <section id="programs" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn><SectionHeading>Our Programs</SectionHeading></FadeIn>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {programs.map((program, i) => (
          <FadeIn key={program.id} delay={i * 0.1} className="min-w-[205px] sm:min-w-0">
            <article className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl">
              <div className="relative h-28 overflow-hidden sm:aspect-[4/3] sm:h-auto">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
                {program.tag && (
                  <span className="absolute left-2 top-2 rounded-full bg-teal px-2 py-0.5 text-[7px] font-bold text-white sm:text-[9px]">
                    {program.tag}
                  </span>
                )}
              </div>
              <div className="p-2.5 sm:p-4">
                <h3 className="text-[10px] font-bold text-primary sm:text-sm">{program.title}</h3>
                <p className="mt-1 text-[8px] leading-[1.45] text-muted-foreground sm:text-xs sm:leading-relaxed">{program.description}</p>
                <NavLink to="/programs" className="mt-2 inline-flex min-h-7 items-center gap-1 text-[8px] font-bold text-teal transition hover:gap-2 sm:mt-3 sm:text-xs">
                  Learn More <ArrowRight className="size-2.5 sm:size-3.5" />
                </NavLink>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
