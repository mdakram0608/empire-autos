import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCars'
import BrandHighlights from './components/BrandHighlights'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCars />
        <BrandHighlights />
      </main>
      <Footer />
    </div>
  )
}

export default App
