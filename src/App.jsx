
import './App.css'
import Header from './components/Header'
import Bookobjectives from './components/Bookobjectives'
import Writer from './components/Writer'
import Customer from './components/Customer'
import Faq from './components/Faq'
import Sale from './components/Sale'
import Bookobjectives2 from './components/Bookobjectives2'
import PreviewSection  from './components/Previewpages'
import Beforeandafterguide from './components/Beforeandafterguide'
function App() {
  return (
    <>
 {/* <div className="bg-[#f7ede6]">
 <Header/>
<Bookobjectives/>
<Writer/>
  </div> */}
    <div className="relative min-h-screen">

  {/* الخلفية */}
  {/* overlay لون خفيف */}
  <div className="absolute inset-0 bg-[#F8F3EE]/85"></div>

  {/* المحتوى */}
  <div className="relative z-10 p-10">
    <Header/>
<Bookobjectives/>
<Bookobjectives2/>
< PreviewSection/>
<Beforeandafterguide/>
<Writer/>
<Customer/>
<Faq/>
<Sale/>
  </div>

</div>
    </>
  )
}

export default App
