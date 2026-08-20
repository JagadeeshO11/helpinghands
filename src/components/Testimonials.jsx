import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/content"
import FadeIn from "./Common/FadeIn"
import AutoSlider from "./Common/AutoSlider"

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">What People Say</h2></FadeIn>
        <div className="mt-6 sm:mt-8">
          <AutoSlider duration={34} gap="gap-5 sm:gap-6">
            {testimonials.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08} className="w-[88vw] max-w-[520px] shrink-0 sm:w-[470px] lg:w-[500px]">
                <motion.div className="relative h-full min-h-[250px] overflow-hidden rounded-3xl border border-border bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(6,29,73,0.06)] sm:p-8 lg:p-10">
                  <Quote className="size-7 text-teal/50 sm:size-9" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-[1.8] text-muted-foreground sm:text-base sm:leading-[1.75]">{item.quote}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt={item.name} className="size-11 rounded-full border-2 border-primary-soft object-cover sm:size-13" decoding="async" loading="lazy" />
                      <span className="leading-tight"><span className="block text-sm font-bold text-primary">{item.name}</span><span className="mt-1 block text-xs text-muted-foreground">{item.role}</span></span>
                    </div>
                    <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: item.rating }).map((_, si) => <Star key={si} className="size-3.5 fill-accent text-accent sm:size-4" />)}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  )
}
