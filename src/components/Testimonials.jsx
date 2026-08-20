import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">
            What People Say
          </h2>
        </FadeIn>

        <div className="relative mx-auto mt-8 h-[370px] max-w-[980px] sm:h-[350px] lg:mt-10">
          {testimonials.map((item, index) => {
            const offset = (index - active + testimonials.length) % testimonials.length
            const visible = offset <= 3
            const isActive = offset === 0
            const direction = offset % 2 === 0 ? 1 : -1
            const depth = Math.min(offset, 3)
            const x = isActive ? 0 : direction * (depth * 40)
            const scale = isActive ? 1 : 1 - depth * 0.055
            const opacity = isActive ? 1 : 0.55 - depth * 0.1

            return (
              <article
                key={item.id}
                onClick={() => setActive(index)}
                className="absolute left-1/2 top-1/2 w-[92%] max-w-[510px] cursor-pointer rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-xl transition-all duration-700 ease-out sm:p-8"
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
                  opacity: visible ? opacity : 0,
                  zIndex: 40 - depth,
                  pointerEvents: visible ? "auto" : "none",
                  visibility: visible ? "visible" : "hidden",
                }}
                onMouseEnter={(event) => {
                  if (!isActive) {
                    event.currentTarget.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale + 0.035})`
                    event.currentTarget.style.zIndex = "45"
                    event.currentTarget.style.opacity = "0.9"
                  }
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale})`
                  event.currentTarget.style.zIndex = String(40 - depth)
                  event.currentTarget.style.opacity = String(opacity)
                }}
              >
                <Quote className="size-8 text-teal/50" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="size-11 rounded-full border-2 border-primary-soft object-cover sm:size-13"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-bold text-primary">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, star) => (
                      <Star key={star} className="size-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-7 bg-teal" : "w-2 bg-teal/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
