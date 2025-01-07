import Download from './sections/Download'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import GraphicDesign from './sections/GraphicDesign'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Seo from './sections/Seo'
import Services from './sections/Services'
import SocialMediaMarketing from './sections/SocialMediaMarketing'
import Testimonials from './sections/Testimonials'
import Website from './sections/Website'

const App = () => {
  return (
   <main className='overflow-hidden'>
    <Header/>
    <Hero/>
    <Services/> 
    <Features/>
    <Pricing/>
    <GraphicDesign/>
    <Website/>
    <Seo/>
    <SocialMediaMarketing/>
    <Faq/>
    <Testimonials/>
    <Download/>
    <Footer/>
   </main>
  )
}

export default App