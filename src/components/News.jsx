import { ArrowRight, Calendar } from "lucide-react"
import { news } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function News() {
  return (
    <section id="news" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="flex items-center justify-between">
        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">Latest News & Events</h2>
      </FadeIn>
      <div className="mt-3 space-y-2 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0">
        {news.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08}>
            <article className="flex gap-2 overflow-hidden rounded-xl border border-border bg-card p-2 shadow-[0_3px_10px_rgba(30,54,59,0.05)] transition hover:shadow-lg sm:block sm:rounded-2xl sm:p-0">
              <div className="relative h-[62px] w-[72px] shrink-0 overflow-hidden rounded-lg sm:h-40 sm:w-full sm:rounded-none">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" decoding="async" loading="lazy" />
                {item.tag && (
                  <span className="absolute left-1.5 top-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[6px] font-bold text-white sm:text-[8px]">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1 sm:p-4">
                <h3 className="text-[9px] font-bold text-primary sm:text-sm">{item.title}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-[6px] text-muted-foreground sm:mt-1 sm:text-xs">
                  <Calendar className="size-2.5 sm:size-3.5" />{item.date}
                </p>
                <p className="mt-1 line-clamp-2 text-[7px] leading-[1.35] text-muted-foreground sm:mt-1.5 sm:text-xs sm:leading-relaxed">{item.excerpt}</p>
                <a href="#" className="mt-1 inline-flex min-h-6 items-center gap-1 text-[7px] font-bold text-teal transition hover:gap-2 sm:mt-3 sm:text-xs">
                  Read More <ArrowRight className="size-2.5 sm:size-3.5" />
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
