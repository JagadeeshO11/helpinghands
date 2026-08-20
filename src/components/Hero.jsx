import { motion } from "framer-motion"
import { HandHeart, Heart } from "lucide-react"
import { NavLink } from "react-router-dom"
import { hero } from "../data/content"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden home-hero">
      <div className="page-shell grid items-start gap-5 px-3 pb-8 pt-6 sm:grid-cols-[1fr_190px] sm:items-center sm:gap-8 sm:px-6 sm:pb-12 sm:pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:pb-16 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/75 sm:mb-4 sm:text-[11px]">
            Helping Hands Foundation
          </p>
          <h1 className="font-heading max-w-[540px] text-[clamp(2rem,7vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
            Together,
            <br />
            We Can
            <br />
            Change Lives
          </h1>
          <p className="mt-3 max-w-[440px] text-sm leading-[1.7] text-white/80 sm:mt-5 sm:text-base lg:mt-6 lg:text-[15px] lg:leading-[1.7]">
            {hero.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-7 sm:gap-3 lg:mt-8">
            <NavLink to="/donate" className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-2 text-[10px] font-bold text-white shadow-lg transition hover:brightness-95 active:scale-95 sm:px-5 sm:py-3 sm:text-[11px]">
              Donate Now <Heart className="size-3.5 fill-current sm:size-4" />
            </NavLink>
            <NavLink to="/volunteer" className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/50 bg-white/10 px-3 py-2 text-[10px] font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary active:scale-95 sm:px-5 sm:py-3 sm:text-[11px]">
              Become Volunteer <HandHeart className="size-3.5 sm:size-4" />
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="row-start-1 mx-auto w-full max-w-[220px] sm:row-auto sm:mx-0 sm:max-w-none sm:w-full"
        >
          <div className="overflow-hidden rounded-[48%_52%_42%_58%/42%_43%_57%_58%] bg-white/15 p-1 shadow-2xl ring-1 ring-white/20 lg:h-[430px]">
            <img src={hero.image} alt="Smiling child" className="h-[142px] w-full rounded-[inherit] object-cover object-center sm:h-[250px] lg:h-full" decoding="async" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
