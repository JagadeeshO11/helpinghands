import { impact } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"

export default function Impact() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="rounded-3xl bg-primary-soft px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-teal/40 sm:w-12" />
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal sm:text-xs">{impact.title}</h2>
            <span className="h-px w-8 bg-teal/40 sm:w-12" />
          </div>
          <div className="mt-7 grid grid-cols-2 gap-y-8 sm:mt-9 sm:grid-cols-4 sm:gap-6">
            {impact.stats.map((stat, i) => (
              <FadeIn key={stat.id} delay={i * 0.08} className="flex flex-col items-center text-center">
                <span className="grid size-11 place-items-center rounded-full bg-card text-teal shadow-sm sm:size-14">
                  <Icon name={stat.icon} className="size-5 sm:size-6" />
                </span>
                <span className="mt-2 font-heading text-xl font-extrabold text-primary sm:mt-3 sm:text-2xl">{stat.value}</span>
                <span className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
