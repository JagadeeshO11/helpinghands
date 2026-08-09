import { gallery } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Gallery() {
  return (
    <section id="gallery" className="page-shell px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <FadeIn className="flex items-center justify-between">
        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">Gallery</h2>
      </FadeIn>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-4 sm:gap-4">
        {gallery.map((src, i) => (
          <FadeIn key={src} delay={i * 0.06}>
            <div className="aspect-square overflow-hidden rounded-lg border border-border sm:rounded-2xl">
              <img
                src={src}
                alt={`Foundation activity ${i + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                decoding="async"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
