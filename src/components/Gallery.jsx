import { gallery } from "../data/content"
import FadeIn from "./Common/FadeIn"
import AutoSlider from "./Common/AutoSlider"

function GalleryRow({ items, reverse = false, duration = 28, rowIndex = 0 }) {
  return (
    <div className="overflow-hidden">
      <AutoSlider duration={duration} gap="gap-3 sm:gap-4" reverse={reverse}>
        {items.map((src, i) => (
          <FadeIn
            key={`${src}-${rowIndex}-${i}`}
            delay={i * 0.04}
            className="w-[170px] shrink-0 sm:w-[220px] lg:w-[260px]"
          >
            <div className="group aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm sm:rounded-3xl">
              <img
                src={src}
                alt={`Helping Hands activity ${rowIndex * 4 + i + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                decoding="async"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </AutoSlider>
    </div>
  )
}

export default function Gallery() {
  const rows = []
  const itemsPerRow = 4

  for (let i = 0; i < gallery.length; i += itemsPerRow) {
    rows.push(gallery.slice(i, i + itemsPerRow))
  }

  return (
    <section id="gallery" className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">
            Gallery
          </h2>
        </FadeIn>

        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          {rows.map((row, index) => (
            <GalleryRow
              key={`gallery-row-${index}`}
              items={row}
              rowIndex={index}
              reverse={index % 2 === 1}
              duration={24 + index * 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
