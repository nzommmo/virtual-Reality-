import FeatureSection from './Components/FeatureSection'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />



    

    </div>


    
    </>
    
  )
}

export default App