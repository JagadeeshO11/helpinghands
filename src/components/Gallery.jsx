import { motion } from "framer-motion"
import { gallery } from "../data/content"
import FadeIn from "./Common/FadeIn"

const REPLACEMENT_IMAGES = {
  4: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85",
  8: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85",
  13: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
}

function GalleryColumn({ items, reverse = false, columnIndex = 0 }) {
  const resolvedItems = items.map(({ src, index }) => ({
    src: REPLACEMENT_IMAGES[index] || src,
    index,
  }))

  const doubled = [...resolvedItems, ...resolvedItems]

  return (
    <div className="h-[520px] overflow-hidden sm:h-[620px] lg:h-[680px]">
      <motion.div
        className="flex flex-col gap-3 sm:gap-4"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 26 + columnIndex * 3, ease: "linear", repeat: Infinity }}
      >
        {doubled.map(({ src, index }, i) => (
          <FadeIn key={`${index}-${columnIndex}-${i}`} className="w-full shrink-0">
            <div className="group aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm sm:rounded-3xl">
              <img
                src={src}
                alt={`Helping Hands activity ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                decoding="async"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = "/images/gallery-1.png"
                }}
              />
            </div>
          </FadeIn>
        ))}
      </motion.div>
    </div>
  )
}

export default function Gallery() {
  const desktopColumns = Array.from({ length: 4 }, (_, columnIndex) =>
    gallery
      .map((src, index) => ({ src, index }))
      .filter(({ index }) => index % 4 === columnIndex)
  )

  const mobileColumns = Array.from({ length: 2 }, (_, columnIndex) =>
    gallery
      .map((src, index) => ({ src, index }))
      .filter(({ index }) => index % 2 === columnIndex)
  )

  return (
    <section id="gallery" className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">Gallery</h2>
        </FadeIn>

        {/* Mobile/tablet: exactly two gallery columns, with all images distributed between them. */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:hidden">
          {mobileColumns.map((column, index) => (
            <GalleryColumn
              key={`mobile-gallery-column-${index}`}
              items={column}
              columnIndex={index}
              reverse={index === 1}
            />
          ))}
        </div>

        {/* Desktop: preserve the existing four-column gallery exactly as before. */}
        <div className="mt-8 hidden grid-cols-4 gap-4 lg:grid lg:gap-5">
          {desktopColumns.map((column, index) => (
            <GalleryColumn
              key={`desktop-gallery-column-${index}`}
              items={column}
              columnIndex={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
