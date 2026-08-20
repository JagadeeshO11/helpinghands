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
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2>
        </FadeIn>
        <div className="relative mx-auto mt-8 h-[360px] max-w-[1120px] sm:h-[330px] lg:mt-10">
          {testimonials.map((item, index) => {
            const offset = (index - active + testimonials.length) % testimonials.length
            const position = offset === 0 ? "center" : offset === 1 ? "right" : "left"
            return (
              <article
                key={item.id}
                onClick={() => setActive(index)}
                className={`absolute left-1/2 top-1/2 w-[88%] max-w-[510px] cursor-pointer rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-xl transition-all duration-700 sm:p-8 ${
                  position === "center"
                    ? "z-30 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 sm:scale-[1.03]"
                    : position === "right"
                      ? "z-10 translate-x-[8%] -translate-y-1/2 scale-[0.82] opacity-45 sm:translate-x-[48%]"
                      : "z-10 -translate-x-[108%] -translate-y-1/2 scale-[0.82] opacity-45 sm:-translate-x-[148%]"
                } hover:z-40 hover:scale-[1.04] hover:opacity-100`}
              >
                <Quote className="size-8 text-teal/50" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{item.quote}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="size-11 rounded-full border-2 border-primary-soft object-cover sm:size-13" loading="lazy" />
                    <div>
                      <p className="text-sm font-bold text-primary">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, star) => <Star key={star} className="size-3.5 fill-accent text-accent" />)}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-teal" : "w-2 bg-teal/25"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
