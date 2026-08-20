import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  ChevronDown,
  CreditCard,
  Download,
  FileText,
  Heart,
  Landmark,
  Lock,
  QrCode,
  ShieldCheck,
  Smartphone,
  Upload,
  UserRound,
  Wallet,
} from "lucide-react"

const MEMBERSHIPS = [
  ["Gram Panchayat Membership", "₹299"],
  ["Mandal Membership", "₹599"],
  ["District Membership", "₹1,100"],
  ["State Membership", "₹2,100"],
  ["National Membership", "₹5,100"],
]

const PAYMENT_METHODS = [
  { id: "razorpay", title: "Razorpay", detail: "Card / UPI / Net Banking", icon: CreditCard },
  { id: "offline", title: "UPI / Bank / Cash", detail: "Verify your payment manually", icon: Landmark },
]

const FIELD = ({ label, children, required = false, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="mb-1.5 block text-xs font-semibold text-[#061D49] sm:text-sm">
      {label}{required && <span className="ml-1 text-[#EF9A0A]">*</span>}
    </span>
    {children}
  </label>
)

const inputClass = "w-full rounded-xl border border-[#dce4ee] bg-white px-3.5 py-3 text-sm text-[#061D49] outline-none transition placeholder:text-[#8b98aa] focus:border-[#04458F] focus:ring-2 focus:ring-[#04458F]/10"
const selectClass = `${inputClass} appearance-none pr-9`

export default function Donate() {
  const [membership, setMembership] = useState(MEMBERSHIPS[0][1])
  const [payment, setPayment] = useState("razorpay")
  const [recurring, setRecurring] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const downloadQr = () => {
    const link = document.createElement("a")
    link.href = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=Helping%20Hands%20Foundation%20UPI%20QR"
    link.download = "helping-hands-upi-qr.png"
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.click()
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc]">
      <section className="border-b border-[#04458F]/10 bg-gradient-to-br from-[#061D49] via-[#04458F] to-[#196823] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#EF9A0A]">
              <Heart className="size-3.5 fill-current" /> Membership & Support
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Registration Form</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">Join Helping Hands Foundation and turn your support into measurable community impact. Complete your membership details and payment verification in one guided application.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <form onSubmit={handleSubmit} className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start">
          <div className="overflow-hidden rounded-3xl border border-[#dce4ee] bg-white shadow-[0_14px_45px_rgba(6,29,73,0.08)]">
            <div className="flex items-center justify-between border-b border-[#dce4ee] bg-gradient-to-r from-[#eef7e9] via-white to-[#eaf2fb] px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#196823]">Step 1</p>
                <h2 className="mt-1 font-heading text-xl font-extrabold text-[#061D49] sm:text-2xl">Membership & Personal Information</h2>
              </div>
              <div className="grid size-11 place-items-center rounded-2xl bg-[#04458F] text-white"><UserRound className="size-5" /></div>
            </div>

            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
              <FIELD label="Membership Selection" required className="sm:col-span-2 lg:col-span-2">
                <div className="relative"><select value={membership} onChange={(e) => setMembership(e.target.value)} className={selectClass}>{MEMBERSHIPS.map(([label, amount]) => <option key={amount} value={amount}>{label} — {amount}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#04458F]" /></div>
              </FIELD>
              <FIELD label="Designation" required><select className={selectClass} defaultValue=""><option value="" disabled>Select designation</option><option>Member</option><option>Volunteer</option><option>Coordinator</option><option>Social Worker</option></select></FIELD>
              <FIELD label="Full Name" required><input className={inputClass} placeholder="Enter full name" required /></FIELD>
              <FIELD label="Gender" required><select className={selectClass} defaultValue=""><option value="" disabled>Select gender</option><option>Male</option><option>Female</option><option>Other</option></select></FIELD>
              <FIELD label="S/o D/o W/o"><input className={inputClass} placeholder="Parent / spouse name" /></FIELD>
              <FIELD label="Date of Birth" required><input type="date" className={inputClass} required /></FIELD>
              <FIELD label="Profession" required><input className={inputClass} placeholder="Enter profession" required /></FIELD>
              <FIELD label="Blood Group"><select className={selectClass} defaultValue=""><option value="" disabled>Select group</option>{["A+","A-","B+","B-","AB+","AB-","O+","O-"].map((v) => <option key={v}>{v}</option>)}</select></FIELD>
              <FIELD label="Email Address" required><input type="email" className={inputClass} placeholder="you@example.com" required /></FIELD>
              <FIELD label="Mobile Number" required><input type="tel" inputMode="numeric" className={inputClass} placeholder="10-digit mobile number" required /></FIELD>
              <FIELD label="Password" required><input type="password" className={inputClass} placeholder="Create a password" required /></FIELD>
              <FIELD label="Aadhaar Number" required><input inputMode="numeric" maxLength={12} className={inputClass} placeholder="12-digit Aadhaar number" required /></FIELD>
              <FIELD label="State" required><select className={selectClass} defaultValue=""><option value="" disabled>Select state</option><option>Andhra Pradesh</option><option>Telangana</option><option>Karnataka</option><option>Tamil Nadu</option><option>Other</option></select></FIELD>
              <FIELD label="District" required><input className={inputClass} placeholder="Enter district" required /></FIELD>
              <FIELD label="Working Area" required><input className={inputClass} placeholder="Village / Mandal / City" required /></FIELD>
              <FIELD label="Pincode" required><input inputMode="numeric" maxLength={6} className={inputClass} placeholder="6-digit pincode" required /></FIELD>
              <FIELD label="Full Address" required className="sm:col-span-2 lg:col-span-3"><textarea rows={3} className={`${inputClass} resize-y`} placeholder="House number, street, village/city, district" required /></FIELD>

              <div className="sm:col-span-2 lg:col-span-3">
                <div className="mb-3 flex items-center gap-2"><FileText className="size-4 text-[#196823]" /><h3 className="text-sm font-bold text-[#061D49]">Document Uploads</h3><span className="text-xs text-[#52627a]">JPG, PNG or PDF</span></div>
                <div className="grid gap-3 md:grid-cols-3">
                  {["Profile Picture", "Aadhaar Card — Front", "Aadhaar Card — Back"].map((label) => (
                    <label key={label} className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#04458F]/30 bg-[#f7fbff] px-4 py-5 text-center transition hover:border-[#196823] hover:bg-[#eef7e9]">
                      <Upload className="mb-2 size-5 text-[#04458F] group-hover:text-[#196823]" /><span className="text-xs font-semibold text-[#061D49]">{label}</span><span className="mt-1 text-[10px] text-[#52627a]">Choose file</span><input type="file" className="sr-only" accept="image/*,.pdf" />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-24">
            <div className="overflow-hidden rounded-3xl border border-[#dce4ee] bg-white shadow-[0_14px_45px_rgba(6,29,73,0.08)]">
              <div className="border-b border-[#dce4ee] bg-gradient-to-r from-[#fff4dc] via-white to-[#eef7e9] px-5 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#EF9A0A]">Step 2</p>
                <h2 className="mt-1 font-heading text-xl font-extrabold text-[#061D49]">Payment & Verification</h2>
              </div>
              <div className="space-y-5 p-5">
                <div className="grid gap-2">
                  {PAYMENT_METHODS.map(({ id, title, detail, icon: Icon }) => {
                    const active = payment === id
                    return <button key={id} type="button" onClick={() => setPayment(id)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${active ? "border-[#04458F] bg-[#eaf2fb] ring-2 ring-[#04458F]/10" : "border-[#dce4ee] bg-white hover:border-[#196823]/40"}`}><span className={`grid size-10 place-items-center rounded-xl ${active ? "bg-[#04458F] text-white" : "bg-[#eef7e9] text-[#196823]"}`}><Icon className="size-5" /></span><span className="min-w-0"><span className="block text-sm font-bold text-[#061D49]">{title}</span><span className="block text-[11px] text-[#52627a]">{detail}</span></span>{active && <Check className="ml-auto size-4 text-[#196823]" />}</button>
                  })}
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#dce4ee] bg-[#f7fbff] p-3"><input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} className="mt-0.5 size-4 accent-[#04458F]" /><span><span className="block text-xs font-bold text-[#061D49]">Annual recurring membership</span><span className="mt-0.5 block text-[10px] leading-5 text-[#52627a]">Enable annual renewal if supported by the selected payment method.</span></span></label>

                <div className="rounded-2xl border border-[#196823]/20 bg-[#eef7e9] p-4">
                  <div className="flex items-center gap-2"><Landmark className="size-4 text-[#196823]" /><h3 className="text-sm font-bold text-[#061D49]">Bank Transfer Details</h3></div>
                  <dl className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between gap-3"><dt className="text-[#52627a]">Account Name</dt><dd className="font-semibold text-[#061D49]">Sarv Abhyudaya Foundation</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-[#52627a]">Bank Name</dt><dd className="font-semibold text-[#061D49]">State Bank of India</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-[#52627a]">Account Number</dt><dd className="font-semibold text-[#061D49]">To be configured</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-[#52627a]">IFSC Code</dt><dd className="font-semibold text-[#061D49]">To be configured</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-[#52627a]">UPI ID</dt><dd className="font-semibold text-[#061D49]">To be configured</dd></div>
                  </dl>
                </div>

                <div className="rounded-2xl border border-[#dce4ee] bg-white p-4 text-center">
                  <div className="mx-auto grid size-40 place-items-center rounded-2xl border-8 border-white bg-[#061D49] shadow-inner sm:size-44">
                    <QrCode className="size-28 text-white sm:size-32" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#061D49]">UPI QR Code</p>
                  <p className="mt-1 text-[10px] text-[#52627a]">Payment QR will be connected when the official UPI ID is provided.</p>
                  <button type="button" onClick={downloadQr} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#04458F]/20 px-3 py-2 text-xs font-bold text-[#04458F] transition hover:bg-[#eaf2fb]"><Download className="size-3.5" />Download QR</button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {["PhonePe", "Google Pay", "Paytm", "BHIM"].map((name) => <button key={name} type="button" disabled className="rounded-xl border border-[#dce4ee] bg-white px-2 py-2 text-[9px] font-bold text-[#52627a] opacity-70"><Smartphone className="mx-auto mb-1 size-3.5 text-[#04458F]" />{name}</button>)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[#04458F]/10 bg-[#eaf2fb] p-4"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#04458F]" /><p className="text-[11px] leading-5 text-[#061D49]">Your personal information should be handled securely. Payment credentials are processed only through the selected payment provider.</p></div>
          </aside>

          <div className="xl:col-span-2">
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EF9A0A] px-5 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(239,154,10,0.22)] transition hover:bg-[#d98900] active:scale-[0.99]">{submitted ? <><Check className="size-5" /> Application Submitted</> : <><Wallet className="size-5" /> Submit Application</>}</button>
            <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-[#52627a]"><Lock className="size-3" /> Review your details before submitting.</div>
          </div>
        </form>
      </section>
    </main>
  )
}
