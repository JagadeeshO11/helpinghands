import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  return (
    <section className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn>
        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2>
      </FadeIn>
      <FadeIn className="mt-3 sm:mt-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-[#fffdfa] p-3 shadow-[0_5px_16px_rgba(30,54,59,0.05)] sm:rounded-3xl sm:p-8">
          <Quote className="size-5 text-teal/50 sm:size-8" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mt-1 text-[8px] leading-[1.6] text-muted-foreground sm:mt-2 sm:text-sm sm:leading-[1.7]">{active.quote}</p>
              <div className="mt-3 flex items-center justify-between gap-2 sm:mt-6">
                <div className="flex items-center gap-2">
                  <img src={active.avatar} alt={active.name} className="size-8 rounded-full border-2 border-primary-soft object-cover sm:size-12" decoding="async" loading="lazy" />
                  <span className="leading-tight">
                    <span className="block text-[8px] font-bold text-primary sm:text-sm">{active.name}</span>
                    <span className="block text-[6px] text-muted-foreground sm:text-xs">{active.role}</span>
                  </span>
                </div>
                <div className="flex gap-0.5" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: active.rating }).map((_, si) => (
                    <Star key={si} className="size-2.5 fill-accent text-accent sm:size-4" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 sm:mt-4">
          {testimonials.map((_, ti) => (
            <button
              key={ti}
              type="button"
              onClick={() => setIndex(ti)}
              aria-label={`Show testimonial ${ti + 1}`}
              className={`h-1 rounded-full transition-all ${ti === index ? "w-4 bg-teal sm:w-5" : "w-1 bg-primary/25"}`}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
