// Centered "— OUR CAUSES —" style eyebrow heading with flanking rules.
export default function SectionHeading({ children }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
      <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {children}
      </h2>
      <span className="h-px w-6 bg-primary/40" aria-hidden="true" />
    </div>
  )
}
