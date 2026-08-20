import { Link, useParams } from "react-router-dom"
import { ArrowLeft, FileText, Award, Image, Video, Trophy, Newspaper, Download } from "lucide-react"

const DATA = {
  reports: { title: "Reports", description: "Annual and audit reports documenting our work, impact and financial accountability.", icon: FileText, items: ["Annual Report 2025–26", "Annual Report 2024–25", "Audit Report 2025–26", "Impact & Activities Report"] },
  certificates: { title: "Certificates", description: "Registration and statutory certificates for transparent organizational information.", icon: Award, items: ["Registration Certificate", "12A Certificate", "80G Certificate", "NGO Darpan Registration"] },
  registration: { title: "Registration Certificate", description: "Official registration details and organizational registration certificate of Helping Hands Foundation.", icon: Award, items: ["Certificate of Registration", "Organization Registration Details"] },
  "12a": { title: "12A Certificate", description: "Statutory 12A registration information supporting the foundation's tax-exempt charitable status.", icon: Award, items: ["12A Registration Certificate", "12A Registration Details"] },
  "80g": { title: "80G Certificate", description: "80G certification information for eligible donations made in support of Helping Hands Foundation.", icon: Award, items: ["80G Certificate", "80G Registration Details"] },
  "ngo-darpan": { title: "NGO Darpan Registration", description: "NGO Darpan registration information and organizational identification details.", icon: Award, items: ["NGO Darpan Registration", "NGO Identification Details"] },
  photos: { title: "Photos", description: "A visual collection of community activities, programs and outreach initiatives.", icon: Image, items: ["Community Outreach", "Education Programs", "Health Camps", "Volunteer Activities"] },
  videos: { title: "Videos", description: "Stories and highlights from our programs and community initiatives.", icon: Video, items: ["Community Impact Story", "Volunteer Day Highlights", "Education Initiative", "Health Camp Highlights"] },
  achievements: { title: "Achievements & Awards", description: "Milestones, recognitions and achievements from our journey.", icon: Trophy, items: ["Community Impact Recognition", "Volunteer Excellence Award", "Education Initiative Milestone", "Community Service Recognition"] },
  press: { title: "Press & Stories", description: "News coverage, stories and public highlights about our work.", icon: Newspaper, items: ["Community Initiative Feature", "Education Program Story", "Volunteer Spotlight", "Impact Story"] },
}

export default function ResourcePage() {
  const { type } = useParams()
  const data = DATA[type] || DATA.reports
  const Icon = data.icon
  return <main className="min-h-screen bg-background">
    <section className="border-b border-border bg-gradient-to-br from-primary-soft via-background to-secondary-soft px-4 py-14 sm:px-6 lg:px-10 lg:py-18">
      <div className="mx-auto max-w-6xl"><Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-teal"><ArrowLeft className="size-4" /> Back to About Us</Link><div className="mt-7 flex items-start gap-4"><div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-white"><Icon className="size-7" /></div><div><h1 className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">{data.title}</h1><p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{data.description}</p></div></div></div>
    </section>
    <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20"><div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{data.items.map((item, i) => <article key={item} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-accent">{String(i + 1).padStart(2, "0")}</span><Icon className="size-5 text-teal" /></div><h2 className="mt-5 font-heading text-lg font-bold text-primary">{item}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Demo content for presentation. Official document or media can be connected here later.</p><button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-primary/90"><Download className="size-3.5" /> View / Download</button></article>)}</div></section>
  </main>
}
