import { useEffect, useState } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { BarChart2, Heart, Image, LayoutDashboard, LogOut, Menu, Users, X } from "lucide-react"
import Logo from "../../components/Common/Logo"
import { useApp } from "../../context/AppContext"

const NAV = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/donors", icon: Heart, label: "Donors" },
  { to: "/admin/volunteers", icon: Users, label: "Volunteers" },
  { to: "/admin/gallery", icon: Image, label: "Gallery" },
  { to: "/admin/reports", icon: BarChart2, label: "Reports" },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAdminLoggedIn, adminLogout } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdminLoggedIn) navigate("/admin/login")
  }, [isAdminLoggedIn, navigate])

  if (!isAdminLoggedIn) return null

  const handleLogout = () => {
    adminLogout()
    navigate("/admin/login")
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[11px] font-semibold transition sm:text-sm ${
      isActive
        ? "bg-teal text-white shadow-sm"
        : "text-primary hover:bg-primary-soft"
    }`

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-56 flex-col border-r border-border bg-card transition-transform duration-300 lg:static lg:translate-x-0 sm:w-64 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* Logo */}
        <div className="flex h-14 items-center gap-2 border-b border-border px-4 sm:h-16">
          <span className="grid size-7 place-items-center rounded-full border border-[#cbe7e8] bg-[#effafa] sm:size-8">
            <Logo className="size-4 sm:size-5" />
          </span>
          <div className="leading-none">
            <p className="text-[9px] font-extrabold tracking-tight text-primary sm:text-[11px]">HELPING HANDS</p>
            <p className="text-[6px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[8px]">Admin Panel</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto grid size-7 place-items-center rounded-lg text-muted-foreground hover:bg-muted lg:hidden">
            <X className="size-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {NAV.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end={to === "/admin"} className={linkClass} onClick={() => setSidebarOpen(false)}>
              <Icon className="size-4 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-[11px] font-semibold text-muted-foreground transition hover:bg-red-50 hover:text-red-500 sm:text-sm"
          >
            <LogOut className="size-4 shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-card/95 px-3 backdrop-blur-md sm:h-16 sm:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="grid size-8 place-items-center rounded-xl text-teal hover:bg-primary-soft lg:hidden"
          >
            <Menu className="size-5" />
          </button>
          <h1 className="text-[12px] font-bold text-primary sm:text-base">Admin Panel</h1>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden text-[8px] text-muted-foreground sm:block">admin@helpinghands.org</span>
            <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[8px] font-bold text-teal sm:text-[10px]">
              Super Admin
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-3 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
