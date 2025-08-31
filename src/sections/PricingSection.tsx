import { motion } from 'framer-motion'
import { Download, Check, Zap, Crown } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import PricingCard from '../components/PricingCard'
import Button from '../components/Button'
import XPayButton from '../components/XPayButton'

export default function PricingSection() {
  const handlePaymentSuccess = (transactionId: string) => {
    console.log('Payment successful:', transactionId)
    // Redirect to success page or show success message
    window.location.href = '/success?transaction=' + transactionId
  }

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error)
    alert('Payment failed: ' + error)
  }

  const features = [
    "Complete source code access",
    "Local AI processing engine",
    "Multiple document format support",
    "Customizable UI themes",
    "Mobile-responsive chatbots",
    "Deployment scripts included",
    "Email support for 1 year",
    "Free updates for 6 months",
    "Commercial usage rights",
    "No attribution required"
  ]

  const bonuses = [
    {
      title: "Premium Themes Pack",
      description: "5 professionally designed chatbot themes",
      value: "$50"
    },
    {
      title: "Deployment Templates",
      description: "Ready-to-use Docker, AWS, and Vercel configs",
      value: "$30"
    },
    {
      title: "Integration Examples",
      description: "React, Vue, Angular, and vanilla JS examples",
      value: "$40"
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20">
          <AnimatedText delay={0.2} variant="fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Simple, Honest</span>
              <br />
              <span className="gradient-text">Pricing</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4} variant="fadeInUp">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pay once, own forever. No subscriptions, no hidden fees, no surprises.
            </p>
          </AnimatedText>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto mb-20">
          <motion.div
            className="glass p-12 rounded-3xl border-2 border-primary-500/50 glow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Popular badge */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Crown className="w-5 h-5 inline mr-2" />
              Complete Package
            </motion.div>

            <div className="text-center mb-12 mt-8">
              <h3 className="text-3xl font-bold text-white mb-4">FAQ AI Toolkit</h3>
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold text-white">$45</span>
                  <span className="text-2xl text-gray-500 line-through">$450</span>
                </div>
                <span className="text-gray-400">one-time payment • lifetime access</span>
              </div>
              
              <motion.div
                className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-3 rounded-full mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">90% OFF Launch Special</span>
              </motion.div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <XPayButton
              amount={45}
              productName="FAQ AI Toolkit - Complete Package"
              productId="faq-toolkit-v1"
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              className="mb-8"
            />

            <div className="text-center text-sm text-gray-400">
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Instant download after purchase</p>
              <p>✓ Works on Windows, Mac, and Linux</p>
            </div>
          </motion.div>
        </div>

        {/* Bonus Items */}
        <div className="text-center mb-16">
          <AnimatedText delay={0.6} variant="fadeInUp">
            <h3 className="text-3xl font-bold text-white mb-6">
              Plus These Exclusive Bonuses
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={0.8} variant="fadeInUp">
            <p className="text-gray-300 mb-12">
              Included free with your purchase (normally sold separately)
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              className="glass p-8 rounded-2xl text-center border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <span className="text-2xl">🎁</span>
              </motion.div>
              
              <h4 className="text-xl font-bold text-white mb-3">{bonus.title}</h4>
              <p className="text-gray-300 mb-4">{bonus.description}</p>
              <div className="text-lg font-semibold text-amber-400">
                Value: {bonus.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto glass p-12 rounded-3xl">
            <h4 className="text-2xl font-bold text-white mb-6">
              Don't Let This Opportunity Slip Away
            </h4>
            
            <p className="text-lg text-gray-300 mb-8">
              This 90% discount is only available during our launch week. 
              After that, the price goes back to $450.
            </p>

            <motion.div
              className="flex justify-center items-center gap-8 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">$450</div>
                <div className="text-sm text-gray-400">Regular Price</div>
              </div>
              
              <motion.div
                className="text-4xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">$45</div>
                <div className="text-sm text-gray-400">Launch Price</div>
              </div>
            </motion.div>

            <XPayButton
              amount={45}
              productName="FAQ AI Toolkit - Complete Package"
              productId="faq-toolkit-v1"
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}