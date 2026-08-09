import { impact } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"

export default function Impact() {
  return (
    <section className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="rounded-2xl bg-primary-soft px-3 py-4 sm:rounded-3xl sm:px-8 sm:py-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <span className="h-px w-5 bg-teal/40 sm:w-8" />
          <h2 className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-teal sm:text-[11px]">{impact.title}</h2>
          <span className="h-px w-5 bg-teal/40 sm:w-8" />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1 text-center sm:mt-7 sm:gap-6">
          {impact.stats.map((stat, i) => (
            <FadeIn key={stat.id} delay={i * 0.08} className="flex flex-col items-center">
              <span className="grid size-7 place-items-center rounded-full bg-card text-teal shadow-sm sm:size-12">
                <Icon name={stat.icon} className="size-3.5 sm:size-5" />
              </span>
              <span className="mt-1.5 font-heading text-[11px] font-extrabold text-primary sm:mt-3 sm:text-xl">{stat.value}</span>
              <span className="text-[6px] text-muted-foreground sm:text-[11px]">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
