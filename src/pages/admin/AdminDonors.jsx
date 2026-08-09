import { useState } from "react"
import { Download, Search } from "lucide-react"
import { useApp } from "../../context/AppContext"
import FadeIn from "../../components/Common/FadeIn"

export default function AdminDonors() {
  const { donors } = useApp()
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const filtered = donors.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.email.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || d.status === filter
    return matchSearch && matchFilter
  })

  const totalRaised = donors.filter((d) => d.status === "success").reduce((s, d) => s + d.amount, 0)
  const successCount = donors.filter((d) => d.status === "success").length

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-extrabold text-primary sm:text-xl">Donors</h2>
          <p className="mt-0.5 text-[9px] text-muted-foreground sm:text-sm">{donors.length} total donations</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-[9px] font-semibold text-primary transition hover:bg-muted sm:rounded-2xl sm:text-xs">
          <Download className="size-3.5" /> Export CSV
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { label: "Total Raised", value: `₹${totalRaised.toLocaleString()}`, color: "text-teal" },
          { label: "Successful", value: successCount, color: "text-teal" },
          { label: "Failed", value: donors.length - successCount, color: "text-red-500" },
        ].map((s) => (
          <FadeIn key={s.label} className="rounded-xl border border-border bg-card p-3 sm:rounded-2xl sm:p-4">
            <p className={`font-heading text-[18px] font-extrabold sm:text-2xl ${s.color}`}>{s.value}</p>
            <p className="text-[8px] text-muted-foreground sm:text-xs">{s.label}</p>
          </FadeIn>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="relative flex-1 min-w-[160px]">
          <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search donors..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-8 pr-3 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm"
          />
        </div>
        {["all", "success", "failed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-xl border px-3 py-2 text-[9px] font-semibold capitalize transition sm:rounded-2xl sm:text-xs ${
              filter === f ? "border-teal bg-primary-soft text-teal" : "border-border bg-card text-primary hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <FadeIn className="overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {["Donor", "Campaign", "Amount", "Txn ID", "Date", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2.5 text-[8px] font-bold uppercase tracking-wider text-muted-foreground sm:px-5 sm:py-3 sm:text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="px-5 py-8 text-center text-sm text-muted-foreground">No donors found.</td></tr>
              ) : filtered.map((d, i) => (
                <tr key={d.id} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                  <td className="px-3 py-2.5 sm:px-5 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-[8px] font-bold text-teal sm:size-8 sm:text-xs">
                        {d.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-[9px] font-semibold text-primary sm:text-sm">{d.name}</p>
                        <p className="text-[7px] text-muted-foreground sm:text-xs">{d.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-[9px] text-muted-foreground sm:px-5 sm:py-3 sm:text-sm">{d.campaign}</td>
                  <td className="px-3 py-2.5 sm:px-5 sm:py-3">
                    <span className="font-heading text-[10px] font-extrabold text-primary sm:text-sm">₹{d.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-3 py-2.5 text-[8px] font-mono text-muted-foreground sm:px-5 sm:py-3 sm:text-xs">{d.txnId}</td>
                  <td className="px-3 py-2.5 text-[9px] text-muted-foreground sm:px-5 sm:py-3 sm:text-sm">{d.date}</td>
                  <td className="px-3 py-2.5 sm:px-5 sm:py-3">
                    <span className={`rounded-full px-2 py-0.5 text-[7px] font-bold sm:text-[10px] ${
                      d.status === "success" ? "bg-teal/10 text-teal" : "bg-red-50 text-red-500"
                    }`}>
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  )
}
