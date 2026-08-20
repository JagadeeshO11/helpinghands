import { partners } from "../data/content"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"
import AutoSlider from "./Common/AutoSlider"

export default function Partners() {
  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn><SectionHeading>Our Partners</SectionHeading></FadeIn>
        <div className="mt-6 sm:mt-8">
          <AutoSlider duration={24} gap="gap-3 sm:gap-4">
            {partners.map((name, i) => (
              <FadeIn key={`${name}-${i}`} delay={i * 0.06} className="w-[150px] shrink-0 sm:w-[190px]">
                <div className="grid h-16 place-items-center rounded-2xl border border-border bg-card px-4 shadow-sm sm:h-24 sm:rounded-3xl">
                  <span className="text-center text-xs font-bold text-muted-foreground sm:text-sm">{name}</span>
                </div>
              </FadeIn>
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  )
}
