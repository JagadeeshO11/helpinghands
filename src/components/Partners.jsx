import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { partners } from "../data/content"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Partners() {
  const scroller = useRef(null)
  const scroll = (dir) => scroller.current?.scrollBy({ left: dir * 140, behavior: "smooth" })

  return (
    <section className="page-shell px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-20">
      <FadeIn><SectionHeading>Our Partners</SectionHeading></FadeIn>
      <FadeIn className="mt-3 flex items-center gap-1.5 sm:mt-6 sm:gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous" className="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-card text-teal transition hover:bg-primary-soft sm:size-9">
          <ChevronLeft className="size-3.5 sm:size-4" />
        </button>
        <div ref={scroller} className="no-scrollbar flex min-w-0 flex-1 gap-1.5 overflow-x-auto sm:gap-3">
          {partners.map((name) => (
            <div key={name} className="grid h-11 min-w-[72px] flex-1 place-items-center rounded-lg border border-border bg-card px-2 shadow-sm sm:h-20 sm:min-w-36 sm:rounded-2xl sm:px-4">
              <span className="text-center text-[8px] font-bold text-muted-foreground sm:text-sm">{name}</span>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => scroll(1)} aria-label="Next" className="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-card text-teal transition hover:bg-primary-soft sm:size-9">
          <ChevronRight className="size-3.5 sm:size-4" />
        </button>
      </FadeIn>
    </section>
  )
}
