import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2></FadeIn>
        <FadeIn className="mt-6 sm:mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(6,29,73,0.06)] sm:p-10 lg:p-12">
            <Quote className="size-7 text-teal/50 sm:size-9" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }}>
                <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.75]">{active.quote}</p>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={active.avatar} alt={active.name} className="size-11 rounded-full border-2 border-primary-soft object-cover sm:size-14" decoding="async" loading="lazy" />
                    <span className="leading-tight"><span className="block text-sm font-bold text-primary sm:text-base">{active.name}</span><span className="block mt-1 text-xs text-muted-foreground">{active.role}</span></span>
                  </div>
                  <div className="flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                    {Array.from({ length: active.rating }).map((_, si) => <Star key={si} className="size-4 fill-accent text-accent" />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((_, ti) => <button key={ti} type="button" onClick={() => setIndex(ti)} aria-label={`Show testimonial ${ti + 1}`} className={`h-1.5 rounded-full transition-all ${ti === index ? "w-6 bg-teal" : "w-1.5 bg-primary/25"}`} />)}
        </div>
      </div>
    </section>
  )
}
