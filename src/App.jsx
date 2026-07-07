import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Header from './components/Header'
import Bookobjectives from './components/Bookobjectives'
import Writer from './components/Writer'
import Customer from './components/Customer'
import Faq from './components/Faq'
import Sale from './components/Sale'
import Bookobjectives2 from './components/Bookobjectives2'
import PreviewSection from './components/Previewpages'
import Beforeandafterguide from './components/Beforeandafterguide'
import OfferPopup from './components/Offerpopup'
import Pricing from './components/Pricing'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'


function Home() {
  return (
    <>
      <OfferPopup />
      <Navbar />

      <main className="relative w-full max-w-full overflow-hidden">
        <Header />
        <Bookobjectives />
        <Bookobjectives2 />
        <PreviewSection />
        <Beforeandafterguide />
        <Pricing />
        <TrustBadges />
        <Writer />
        <Customer />
        <Sale />
        <Faq />
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#FDFBF7] text-black">
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  )
}

export default App