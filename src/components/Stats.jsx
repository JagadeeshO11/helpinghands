import { stats } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"

export default function Stats() {
  return (
    <section aria-label="Foundation stats" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="rounded-2xl border border-border bg-[#fffdfa] p-2 shadow-[0_6px_20px_rgba(38,57,66,0.06)] sm:rounded-3xl sm:p-4 lg:p-5">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.id} delay={i * 0.08} className="flex flex-col items-start gap-2 rounded-xl p-3 sm:flex-row sm:items-center sm:gap-3 sm:rounded-2xl sm:p-4">
              <span className={`grid size-9 shrink-0 place-items-center rounded-full text-white sm:size-11 ${stat.color === "accent" ? "bg-accent" : "bg-teal"}`}>
                <Icon name={stat.icon} className="size-4 sm:size-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-base font-extrabold text-primary sm:text-lg lg:text-xl">{stat.value}</span>
                <span className="mt-0.5 block text-[10px] text-muted-foreground sm:mt-1 sm:text-xs">{stat.label}</span>
              </span>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
