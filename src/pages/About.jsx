import { motion } from "framer-motion"
import { Heart, Target, Users, Zap } from "lucide-react"
import { team, impact, partners } from "../data/content"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"

const VALUES = [
  { icon: Heart, title: "Compassion", desc: "We lead with empathy in every action we take.", color: "accent" },
  { icon: Target, title: "Impact", desc: "Every program is designed for measurable change.", color: "primary" },
  { icon: Users, title: "Community", desc: "We build with communities, not just for them.", color: "accent" },
  { icon: Zap, title: "Transparency", desc: "100% of donations go directly to programs.", color: "primary" },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-soft">
        <div className="page-shell px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-teal sm:text-[11px]">About Us</p>
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] text-primary sm:text-5xl lg:text-[56px]">
              Who We Are
            </h1>
            <p className="mt-3 text-[10px] leading-[1.65] text-muted-foreground sm:mt-5 sm:text-sm sm:leading-[1.75] lg:text-[15px]">
              Helping Hands Foundation was established in 2010 with a single belief — that every person deserves dignity, opportunity, and care. Today we operate across 120+ villages, touching 15,000+ lives every year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="page-shell px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <FadeIn className="rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-8">
            <span className="inline-block rounded-full bg-teal/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-teal sm:text-[10px]">Mission</span>
            <h2 className="mt-3 font-heading text-[20px] font-extrabold text-primary sm:text-2xl">We Serve, We Care, We Empower</h2>
            <p className="mt-2 text-[9px] leading-[1.65] text-muted-foreground sm:text-sm">
              To provide sustainable support to underprivileged communities through education, healthcare, food security and women empowerment programs.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-8">
            <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-accent sm:text-[10px]">Vision</span>
            <h2 className="mt-3 font-heading text-[20px] font-extrabold text-primary sm:text-2xl">A World Without Poverty</h2>
            <p className="mt-2 text-[9px] leading-[1.65] text-muted-foreground sm:text-sm">
              A future where every child has access to education, every family has food security, and every woman has the opportunity to thrive.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="page-shell px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <FadeIn><SectionHeading>Our Values</SectionHeading></FadeIn>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-card p-3 sm:rounded-2xl sm:p-5">
                <span className={`grid size-8 place-items-center rounded-full sm:size-11 ${v.color === "accent" ? "bg-accent-soft text-accent" : "bg-primary-soft text-teal"}`}>
                  <v.icon className="size-4 sm:size-5" />
                </span>
                <h3 className="mt-2 text-[11px] font-bold text-primary sm:mt-3 sm:text-sm">{v.title}</h3>
                <p className="mt-1 text-[8px] leading-[1.5] text-muted-foreground sm:text-xs">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="page-shell px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <FadeIn className="rounded-2xl bg-teal-dark px-4 py-6 text-white sm:rounded-3xl sm:px-8 sm:py-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {impact.stats.map((stat, i) => (
              <FadeIn key={stat.id} delay={i * 0.08} className="text-center">
                <span className="font-heading text-[22px] font-extrabold sm:text-3xl lg:text-4xl">{stat.value}</span>
                <p className="mt-1 text-[8px] text-white/75 sm:text-xs">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Team */}
      <section className="page-shell px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <FadeIn><SectionHeading>Our Team</SectionHeading></FadeIn>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4 lg:grid-cols-3">
          {team.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-3 text-center sm:rounded-2xl sm:p-6">
                <img src={member.avatar} alt={member.name} className="mx-auto size-12 rounded-full border-2 border-primary-soft object-cover sm:size-20" decoding="async" loading="lazy" />
                <h3 className="mt-2 text-[9px] font-bold text-primary sm:mt-3 sm:text-sm">{member.name}</h3>
                <p className="mt-0.5 text-[7px] text-muted-foreground sm:text-xs">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="page-shell px-3 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <FadeIn><SectionHeading>Our Partners</SectionHeading></FadeIn>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 sm:gap-4">
          {partners.map((name) => (
            <FadeIn key={name}>
              <div className="grid h-12 place-items-center rounded-xl border border-border bg-card px-3 sm:h-16 sm:rounded-2xl">
                <span className="text-[8px] font-bold text-muted-foreground sm:text-sm">{name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  )
}
