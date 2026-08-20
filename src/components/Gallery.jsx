import { gallery } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Gallery() {
  return (
    <section id="gallery" className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="flex items-center justify-between">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">Gallery</h2>
        </FadeIn>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          {gallery.map((src, i) => (
            <FadeIn key={src} delay={i * 0.06}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted sm:rounded-3xl">
                <img src={src} alt={`Foundation activity ${i + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" decoding="async" loading="lazy" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
