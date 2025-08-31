import { useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import DemoSection from './sections/DemoSection'
import FeaturesSection from './sections/FeaturesSection'
import PricingSection from './sections/PricingSection'
import TestimonialsSection from './sections/TestimonialsSection'
import { initializeAnalytics } from './utils/analytics'

function App() {
  useEffect(() => {
    // Initialize analytics - replace with your actual Google Analytics ID
    const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual tracking ID
    initializeAnalytics(GA_TRACKING_ID)

    // Track initial page load
    if (typeof window !== 'undefined') {
      document.title = 'FAQ AI Toolkit - Build Smart Chatbots from Documents | $45 One-Time'
    }
  }, [])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container-custom">
          <div className="text-center text-gray-400">
            <p className="mb-4 text-sm sm:text-base">
              © 2024 FAQ AI Toolkit. Built with ❤️ for developers who value privacy and ownership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Support</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
