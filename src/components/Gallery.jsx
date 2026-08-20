import { motion } from "framer-motion"
import { gallery } from "../data/content"
import FadeIn from "./Common/FadeIn"

function GalleryColumn({ items, reverse = false, columnIndex = 0 }) {
  const doubled = [...items, ...items]
  return (
    <div className="h-[520px] overflow-hidden sm:h-[620px] lg:h-[680px]">
      <motion.div
        className="flex flex-col gap-3 sm:gap-4"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 26 + columnIndex * 3, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((src, i) => (
          <FadeIn key={`${src}-${columnIndex}-${i}`} className="w-full shrink-0">
            <div className="group aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm sm:rounded-3xl">
              <img
                src={src}
                alt={`Helping Hands activity ${columnIndex * items.length + (i % items.length) + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                decoding="async"
                loading="lazy"
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
  const columns = Array.from({ length: 4 }, (_, columnIndex) =>
    gallery.filter((_, index) => index % 4 === columnIndex)
  )

  return (
    <section id="gallery" className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-lg">Gallery</h2></FadeIn>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {columns.map((column, index) => <GalleryColumn key={`gallery-column-${index}`} items={column} columnIndex={index} reverse={index % 2 === 1} />)}
        </div>
      </div>
    </section>
  )
}
