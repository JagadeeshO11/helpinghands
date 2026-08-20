import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"

const SLOT_STYLES = {
  center: { x: 0, z: 40, scale: 1, opacity: 1 },
  left1: { x: -270, z: 30, scale: 0.9, opacity: 0.72 },
  left2: { x: -510, z: 20, scale: 0.8, opacity: 0.48 },
  right1: { x: 270, z: 30, scale: 0.9, opacity: 0.72 },
  right2: { x: 510, z: 20, scale: 0.8, opacity: 0.48 },
  hidden: { x: 0, z: 0, scale: 0.65, opacity: 0 },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % testimonials.length), 3600)
    return () => clearInterval(timer)
  }, [])

  const getSlot = (index) => {
    const count = testimonials.length
    const offset = (index - active + count) % count
    if (offset === 0) return "center"
    if (offset === 1) return "right1"
    if (offset === 2) return "right2"
    if (offset === count - 1) return "left1"
    if (offset === count - 2) return "left2"
    return "hidden"
  }

  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2>
        </FadeIn>

        <div className="relative mx-auto mt-7 h-[355px] w-full max-w-[1260px] [perspective:1400px] sm:mt-9 sm:h-[330px]">
          {testimonials.map((item, index) => {
            const slot = getSlot(index)
            const style = SLOT_STYLES[slot]
            const visible = slot !== "hidden"

            return (
              <article
                key={item.id}
                onClick={() => visible && setActive(index)}
                aria-hidden={!visible}
                style={{
                  transform: `translate3d(calc(-50% + ${style.x}px), -50%, ${slot === "center" ? 0 : -Math.abs(style.x) / 3}px) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.z,
                }}
                className={`absolute left-1/2 top-1/2 h-[250px] w-[min(82vw,440px)] rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-xl [transform-style:preserve-3d] transition-[transform,opacity] duration-[850ms] ease-[cubic-bezier(.22,.61,.36,1)] sm:h-[260px] sm:w-[440px] sm:p-7 ${visible ? "cursor-pointer" : "pointer-events-none invisible"} ${slot === "center" ? "shadow-2xl" : ""}`}
              >
                <Quote className="size-7 text-teal/50 sm:size-8" aria-hidden="true" />
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">{item.quote}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="size-10 shrink-0 rounded-full border-2 border-primary-soft object-cover sm:size-11" loading="lazy" />
                    <div className="min-w-0"><p className="truncate text-sm font-bold text-primary">{item.name}</p><p className="mt-1 truncate text-xs text-muted-foreground">{item.role}</p></div>
                  </div>
                  <div className="flex shrink-0 gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, star) => <Star key={star} className="size-3 fill-accent text-accent sm:size-3.5" />)}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((item, index) => <button key={item.id} type="button" onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-2 rounded-full transition-all duration-300 ${index === active ? "w-7 bg-teal" : "w-2 bg-teal/25"}`} />)}
        </div>
      </div>
    </section>
  )
}
