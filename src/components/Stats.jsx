import { stats } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"

export default function Stats() {
  return (
    <section aria-label="Foundation stats" className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="rounded-2xl border border-border/70 bg-white p-2 shadow-[0_10px_30px_rgba(6,29,73,0.07)] sm:rounded-3xl sm:p-4 lg:p-5">
          <div className="grid grid-cols-2 gap-1 sm:gap-3 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.id} delay={i * 0.08} className="flex min-h-[92px] items-center gap-3 rounded-xl px-3 py-4 sm:min-h-[108px] sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-5">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-white sm:size-12 ${stat.color === "accent" ? "bg-accent" : "bg-primary"}`}>
                  <Icon name={stat.icon} className="size-4 sm:size-5" />
                </span>
                <span className="leading-tight">
                  <span className="block font-heading text-lg font-extrabold text-primary sm:text-xl lg:text-2xl">{stat.value}</span>
                  <span className="mt-1 block text-[10px] text-muted-foreground sm:text-xs">{stat.label}</span>
                </span>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
