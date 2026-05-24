
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
import { pageWrap } from './utils/layout'

function App() {
  return (
   <div
  dir="rtl"
  lang="ar"
  className="min-h-screen overflow-x-hidden bg-[#FDFBF7] text-black"
>
      <OfferPopup />
      <Navbar />
    <main className="relative w-full max-w-full overflow-hidden">
        <Header />
        <Bookobjectives />
        <Bookobjectives2 />
        <div className={`${pageWrap} w-full min-w-0`}>
          <PreviewSection />
        </div>
        <Beforeandafterguide />
        <Pricing />
        <TrustBadges />
        <Writer />
        <Customer />
        <Sale />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
