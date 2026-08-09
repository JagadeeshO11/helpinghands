import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Donate from "./pages/Donate"
import Volunteer from "./pages/Volunteer"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
