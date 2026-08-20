import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { partners } from "../data/content"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Partners() {
  const scroller = useRef(null)
  const scroll = (dir) => scroller.current?.scrollBy({ left: dir * 180, behavior: "smooth" })

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><SectionHeading>Our Partners</SectionHeading></FadeIn>
        <FadeIn className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-3">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous partners" className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card text-teal transition hover:bg-primary-soft sm:size-10">
            <ChevronLeft className="size-4" />
          </button>
          <div ref={scroller} className="no-scrollbar flex min-w-0 flex-1 gap-3 overflow-x-auto sm:gap-4">
            {partners.map((name) => (
              <div key={name} className="grid h-16 min-w-[120px] flex-1 place-items-center rounded-2xl border border-border bg-card px-4 shadow-sm sm:h-24 sm:min-w-44 sm:rounded-3xl">
                <span className="text-center text-xs font-bold text-muted-foreground sm:text-sm">{name}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => scroll(1)} aria-label="Next partners" className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card text-teal transition hover:bg-primary-soft sm:size-10">
            <ChevronRight className="size-4" />
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
