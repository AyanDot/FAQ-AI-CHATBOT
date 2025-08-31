import { motion } from 'framer-motion'
import { Download, Zap, Shield, Code2 } from 'lucide-react'
import Button from '../components/Button'
import AnimatedText from '../components/AnimatedText'
import GradientBlob from '../components/GradientBlob'

export default function HeroSection() {
  const handleGetStarted = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <GradientBlob 
          className="top-1/4 -left-1/4" 
          size="xl" 
          color="primary" 
        />
        <GradientBlob 
          className="bottom-1/4 -right-1/4" 
          size="xl" 
          color="secondary" 
        />
        <GradientBlob 
          className="top-3/4 left-1/2 transform -translate-x-1/2" 
          size="lg" 
          color="accent" 
        />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(156,146,172,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <AnimatedText delay={0.2} variant="fadeInDown">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">Build AI chatbots in minutes, not months</span>
            </motion.div>
          </AnimatedText>

          {/* Main headline */}
          <AnimatedText delay={0.4} variant="fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Transform Documents</span>
              <br />
              <span className="text-white">Into Smart AI Chatbots</span>
            </h1>
          </AnimatedText>

          {/* Subheadline */}
          <AnimatedText delay={0.6} variant="fadeInUp">
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Skip expensive APIs and vendor lock-in. Build powerful FAQ chatbots that run locally, 
              process your documents privately, and cost just <span className="text-primary-400 font-semibold">$45 once</span>.
            </p>
          </AnimatedText>

          {/* Feature highlights */}
          <AnimatedText delay={0.8} variant="fadeInUp">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
              >
                <Shield className="w-5 h-5 text-green-400" />
                <span>100% Local Processing</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
              >
                <Code2 className="w-5 h-5 text-blue-400" />
                <span>Full Source Code</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
              >
                <Download className="w-5 h-5 text-purple-400" />
                <span>Instant Download</span>
              </motion.div>
            </div>
          </AnimatedText>

          {/* CTA Buttons */}
          <AnimatedText delay={1.0} variant="fadeInUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleGetStarted}
                icon={<Download className="w-5 h-5" />}
                className="text-lg px-10 py-5"
              >
                Get FAQ Toolkit - $45
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={handleViewDemo}
                className="text-lg px-8 py-5"
              >
                See Live Demo
              </Button>
            </div>
          </AnimatedText>

          {/* Social proof */}
          <AnimatedText delay={1.2} variant="fadeInUp">
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full border-2 border-gray-900"
                    />
                  ))}
                </div>
                <span className="ml-2">500+ developers building with our toolkit</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    ⭐
                  </motion.div>
                ))}
                <span className="ml-2">4.9/5 rating</span>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}