import { createContext, useContext, useState } from "react"
import { gallery as galleryData } from "../data/content"

const AppContext = createContext(null)

const INITIAL_DONORS = [
  { id: 1, name: "Ramesh Kumar", email: "ramesh@email.com", amount: 2500, campaign: "Medical Support", date: "2024-05-12", status: "success", txnId: "pay_RZP001" },
  { id: 2, name: "Anita Sharma", email: "anita@email.com", amount: 1000, campaign: "School Supplies", date: "2024-05-10", status: "success", txnId: "pay_RZP002" },
  { id: 3, name: "Vikram Singh", email: "vikram@email.com", amount: 500, campaign: "Feed a Family", date: "2024-05-08", status: "success", txnId: "pay_RZP003" },
  { id: 4, name: "Priya Nair", email: "priya@email.com", amount: 5000, campaign: "Medical Support", date: "2024-05-06", status: "success", txnId: "pay_RZP004" },
  { id: 5, name: "Suresh Patel", email: "suresh@email.com", amount: 1000, campaign: "School Supplies", date: "2024-05-04", status: "failed", txnId: "pay_RZP005" },
]

const INITIAL_VOLUNTEERS = [
  { id: 1, name: "Arjun Mehta", email: "arjun@email.com", phone: "9876543210", role: "Education Volunteer", city: "Delhi", status: "approved", appliedDate: "2024-05-01", hours: 24 },
  { id: 2, name: "Sunita Rao", email: "sunita@email.com", phone: "9876543211", role: "Health Camp Volunteer", city: "Mumbai", status: "pending", appliedDate: "2024-05-10", hours: 0 },
  { id: 3, name: "Kiran Das", email: "kiran@email.com", phone: "9876543212", role: "Food Distribution", city: "Bangalore", status: "approved", appliedDate: "2024-04-20", hours: 36 },
  { id: 4, name: "Meena Joshi", email: "meena@email.com", phone: "9876543213", role: "Women Empowerment", city: "Pune", status: "pending", appliedDate: "2024-05-12", hours: 0 },
  { id: 5, name: "Ravi Kumar", email: "ravi@email.com", phone: "9876543214", role: "Education Volunteer", city: "Chennai", status: "rejected", appliedDate: "2024-04-15", hours: 0 },
]

// password is last 4 digits of phone for demo
const getPassword = (phone) => phone.slice(-4)

export function AppProvider({ children }) {
  const [donors, setDonors] = useState(INITIAL_DONORS)
  const [volunteers, setVolunteers] = useState(INITIAL_VOLUNTEERS)
  const [galleryImgs, setGalleryImgs] = useState(galleryData)
  const [volunteerUpdates, setVolunteerUpdates] = useState([
    { id: 1, volunteerId: 1, title: "Education Camp Scheduled", message: "You are assigned to the Education Camp in Delhi on June 10. Please confirm attendance.", date: "2024-05-20", type: "assignment" },
    { id: 2, volunteerId: 3, title: "New Activity Added", message: "A food distribution drive has been added for June 5 in Bangalore. You are invited to participate.", date: "2024-05-18", type: "activity" },
  ])
  const [loggedInVolunteer, setLoggedInVolunteer] = useState(null)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const ADMIN_CREDENTIALS = { email: "admin@helpinghands.org", password: "Admin@1234" }

  const adminLogin = (email, password) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAdminLoggedIn(true)
      return { success: true }
    }
    return { success: false, error: "Invalid admin credentials." }
  }

  const adminLogout = () => setIsAdminLoggedIn(false)

  const volunteerLogin = (email, password) => {
    const vol = volunteers.find((v) => v.email === email && getPassword(v.phone) === password)
    if (vol) { setLoggedInVolunteer(vol); return { success: true } }
    return { success: false, error: "Invalid email or password." }
  }

  const volunteerLogout = () => setLoggedInVolunteer(null)

  const addDonor = (donor) =>
    setDonors((prev) => [{ ...donor, id: Date.now(), date: new Date().toISOString().slice(0, 10) }, ...prev])

  const updateVolunteerStatus = (id, status) =>
    setVolunteers((prev) => prev.map((v) => (v.id === id ? { ...v, status } : v)))

  const addVolunteer = (vol) =>
    setVolunteers((prev) => [
      { ...vol, id: Date.now(), status: "pending", appliedDate: new Date().toISOString().slice(0, 10), hours: 0 },
      ...prev,
    ])

  const addVolunteerUpdate = (update) =>
    setVolunteerUpdates((prev) => [{ ...update, id: Date.now(), date: new Date().toISOString().slice(0, 10) }, ...prev])

  const deleteVolunteerUpdate = (id) =>
    setVolunteerUpdates((prev) => prev.filter((u) => u.id !== id))

  const addGalleryImg = (url) => setGalleryImgs((prev) => [...prev, url])
  const removeGalleryImg = (url) => setGalleryImgs((prev) => prev.filter((u) => u !== url))

  return (
    <AppContext.Provider value={{
      donors, volunteers, galleryImgs, volunteerUpdates, loggedInVolunteer,
      addDonor, updateVolunteerStatus, addVolunteer,
      addVolunteerUpdate, deleteVolunteerUpdate,
      volunteerLogin, volunteerLogout,
      adminLogin, adminLogout, isAdminLoggedIn,
      addGalleryImg, removeGalleryImg,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
