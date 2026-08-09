import { useState } from "react"
import { Bell, Check, Search, Trash2, X } from "lucide-react"
import { useApp } from "../../context/AppContext"
import FadeIn from "../../components/Common/FadeIn"

const STATUS_STYLE = {
  approved: "bg-teal/10 text-teal",
  pending: "bg-amber-50 text-amber-600",
  rejected: "bg-red-50 text-red-500",
}

const UPDATE_TYPES = ["assignment", "activity", "announcement", "reminder"]

export default function AdminVolunteers() {
  const { volunteers, volunteerUpdates, updateVolunteerStatus, addVolunteerUpdate, deleteVolunteerUpdate } = useApp()
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [tab, setTab] = useState("volunteers") // "volunteers" | "updates"

  // Post update form
  const [form, setForm] = useState({ volunteerId: "", title: "", message: "", type: "announcement" })
  const [posted, setPosted] = useState(false)

  const filtered = volunteers.filter((v) => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase()) || v.role.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || v.status === filter
    return matchSearch && matchFilter
  })

  const counts = {
    all: volunteers.length,
    pending: volunteers.filter((v) => v.status === "pending").length,
    approved: volunteers.filter((v) => v.status === "approved").length,
    rejected: volunteers.filter((v) => v.status === "rejected").length,
  }

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handlePost = (e) => {
    e.preventDefault()
    addVolunteerUpdate({ ...form, volunteerId: Number(form.volunteerId) })
    setForm({ volunteerId: "", title: "", message: "", type: "announcement" })
    setPosted(true)
    setTimeout(() => setPosted(false), 2500)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-extrabold text-primary sm:text-xl">Volunteers</h2>
          <p className="mt-0.5 text-[9px] text-muted-foreground sm:text-sm">{volunteers.length} total registrations</p>
        </div>
        <div className="flex gap-1.5">
          {["volunteers", "updates"].map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`rounded-xl border px-3 py-1.5 text-[9px] font-semibold capitalize transition sm:rounded-2xl sm:text-xs ${
                tab === t ? "border-teal bg-primary-soft text-teal" : "border-border bg-card text-primary hover:bg-muted"
              }`}>
              {t === "updates" ? "Post Update" : "Volunteers"}
            </button>
          ))}
        </div>
      </div>

      {tab === "volunteers" && (
        <>
          {/* Summary */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
            {Object.entries(counts).map(([key, val]) => (
              <FadeIn key={key}>
                <button onClick={() => setFilter(key)}
                  className={`w-full rounded-xl border p-3 text-left transition sm:rounded-2xl sm:p-4 ${
                    filter === key ? "border-teal bg-primary-soft" : "border-border bg-card hover:bg-muted/40"
                  }`}>
                  <p className={`font-heading text-[18px] font-extrabold sm:text-2xl ${
                    key === "approved" ? "text-teal" : key === "pending" ? "text-amber-600" : key === "rejected" ? "text-red-500" : "text-primary"
                  }`}>{val}</p>
                  <p className="mt-0.5 text-[8px] capitalize text-muted-foreground sm:text-xs">{key}</p>
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Search */}
          <div className="flex flex-wrap gap-2">
            <div className="relative flex-1 min-w-[160px]">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search volunteers..."
                className="w-full rounded-xl border border-border bg-card py-2 pl-8 pr-3 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm" />
            </div>
            {["all", "pending", "approved", "rejected"].map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`rounded-xl border px-3 py-2 text-[9px] font-semibold capitalize transition sm:rounded-2xl sm:text-xs ${
                  filter === f ? "border-teal bg-primary-soft text-teal" : "border-border bg-card text-primary hover:bg-muted"
                }`}>{f}</button>
            ))}
          </div>

          {/* Table */}
          <FadeIn className="overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    {["Volunteer", "Role", "City", "Applied", "Hours", "Status", "Actions"].map((h) => (
                      <th key={h} className="px-3 py-2.5 text-[8px] font-bold uppercase tracking-wider text-muted-foreground sm:px-4 sm:py-3 sm:text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr><td colSpan={7} className="px-5 py-8 text-center text-sm text-muted-foreground">No volunteers found.</td></tr>
                  ) : filtered.map((v, i) => (
                    <tr key={v.id} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                      <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex items-center gap-2">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal/10 text-[8px] font-bold text-teal sm:size-8 sm:text-xs">
                            {v.name.charAt(0)}
                          </span>
                          <div>
                            <p className="text-[9px] font-semibold text-primary sm:text-sm">{v.name}</p>
                            <p className="text-[7px] text-muted-foreground sm:text-xs">{v.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-[9px] text-muted-foreground sm:px-4 sm:py-3 sm:text-sm">{v.role}</td>
                      <td className="px-3 py-2.5 text-[9px] text-muted-foreground sm:px-4 sm:py-3 sm:text-sm">{v.city}</td>
                      <td className="px-3 py-2.5 text-[9px] text-muted-foreground sm:px-4 sm:py-3 sm:text-sm">{v.appliedDate}</td>
                      <td className="px-3 py-2.5 text-[9px] font-semibold text-primary sm:px-4 sm:py-3 sm:text-sm">{v.hours}h</td>
                      <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                        <span className={`rounded-full px-2 py-0.5 text-[7px] font-bold capitalize sm:text-[10px] ${STATUS_STYLE[v.status]}`}>
                          {v.status}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex items-center gap-1">
                          {v.status !== "approved" && (
                            <button onClick={() => updateVolunteerStatus(v.id, "approved")} title="Approve"
                              className="grid size-6 place-items-center rounded-lg bg-teal/10 text-teal transition hover:bg-teal hover:text-white sm:size-7">
                              <Check className="size-3 sm:size-3.5" />
                            </button>
                          )}
                          {v.status !== "rejected" && (
                            <button onClick={() => updateVolunteerStatus(v.id, "rejected")} title="Reject"
                              className="grid size-6 place-items-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white sm:size-7">
                              <X className="size-3 sm:size-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </>
      )}

      {tab === "updates" && (
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Post form */}
          <FadeIn className="rounded-2xl border border-border bg-card sm:rounded-3xl">
            <div className="border-b border-border px-4 py-3 sm:px-6 sm:py-4">
              <h3 className="text-[11px] font-bold text-primary sm:text-sm">Post New Update</h3>
            </div>
            <form onSubmit={handlePost} className="space-y-3 p-4 sm:space-y-4 sm:p-6">
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Send To *</label>
                <select required value={form.volunteerId} onChange={set("volunteerId")}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm">
                  <option value="">Select volunteer</option>
                  {volunteers.map((v) => (
                    <option key={v.id} value={v.id}>{v.name} — {v.role}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Type *</label>
                <select value={form.type} onChange={set("type")}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm">
                  {UPDATE_TYPES.map((t) => <option key={t} value={t} className="capitalize">{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Title *</label>
                <input required value={form.title} onChange={set("title")} placeholder="Update title"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm" />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-semibold text-muted-foreground sm:text-xs">Message *</label>
                <textarea required rows={3} value={form.message} onChange={set("message")} placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm" />
              </div>
              {posted && (
                <p className="rounded-xl bg-teal/10 px-3 py-2 text-[9px] font-medium text-teal sm:text-xs">✓ Update posted successfully!</p>
              )}
              <button type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal py-2.5 text-[10px] font-bold text-white transition hover:bg-teal-dark sm:rounded-2xl sm:text-sm">
                <Bell className="size-3.5" /> Post Update
              </button>
            </form>
          </FadeIn>

          {/* All updates list */}
          <FadeIn className="rounded-2xl border border-border bg-card sm:rounded-3xl">
            <div className="border-b border-border px-4 py-3 sm:px-6 sm:py-4">
              <h3 className="text-[11px] font-bold text-primary sm:text-sm">All Updates ({volunteerUpdates.length})</h3>
            </div>
            <div className="divide-y divide-border overflow-y-auto" style={{ maxHeight: 420 }}>
              {volunteerUpdates.length === 0 ? (
                <p className="px-4 py-8 text-center text-[10px] text-muted-foreground">No updates posted yet.</p>
              ) : volunteerUpdates.map((u) => {
                const vol = volunteers.find((v) => v.id === u.volunteerId)
                return (
                  <div key={u.id} className="flex items-start justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-primary sm:text-sm truncate">{u.title}</p>
                      <p className="mt-0.5 text-[7px] text-muted-foreground sm:text-xs">
                        To: {vol ? vol.name : "Unknown"} · {u.date}
                      </p>
                      <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-xs line-clamp-2">{u.message}</p>
                    </div>
                    <button onClick={() => deleteVolunteerUpdate(u.id)} title="Delete"
                      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-red-50 text-red-400 transition hover:bg-red-500 hover:text-white sm:size-7">
                      <Trash2 className="size-3 sm:size-3.5" />
                    </button>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      )}
    </div>
  )
}
