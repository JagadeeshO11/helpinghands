import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 3600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2>
        </FadeIn>

        <div className="relative mx-auto mt-7 h-[390px] w-full max-w-[1180px] sm:mt-9 sm:h-[350px]">
          {testimonials.map((item, index) => {
            const offset = (index - active + testimonials.length) % testimonials.length
            const isCenter = offset === 0
            const isRight = offset === 1
            const isLeft = offset === testimonials.length - 1
            const isVisible = isCenter || isRight || isLeft

            return (
              <article
                key={item.id}
                onClick={() => setActive(index)}
                aria-hidden={!isVisible}
                className={`absolute left-1/2 top-1/2 h-[260px] w-[min(86vw,480px)] -translate-y-1/2 rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-xl transition-[transform,opacity,filter] duration-700 ease-out sm:h-[270px] sm:p-7 ${
                  isCenter
                    ? "z-30 -translate-x-1/2 scale-100 opacity-100 blur-0"
                    : isRight
                      ? "z-20 translate-x-[calc(-50%+300px)] scale-[0.88] opacity-55 blur-[0.3px]"
                      : isLeft
                        ? "z-20 translate-x-[calc(-50%-300px)] scale-[0.88] opacity-55 blur-[0.3px]"
                        : "pointer-events-none z-0 -translate-x-1/2 scale-[0.72] opacity-0"
                } ${isVisible ? "cursor-pointer hover:z-40 hover:scale-[0.93] hover:opacity-85" : ""} ${isCenter ? "hover:scale-[1.015]" : ""}`}
              >
                <Quote className="size-7 text-teal/50 sm:size-8" aria-hidden="true" />
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">{item.quote}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="size-10 shrink-0 rounded-full border-2 border-primary-soft object-cover sm:size-11" loading="lazy" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-primary">{item.name}</p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">{item.role}</p>
                    </div>
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
          {testimonials.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-teal" : "w-2 bg-teal/25"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
