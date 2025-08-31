import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Code2, 
  Palette, 
  Database, 
  Smartphone,
  Lock,
  Rocket,
  Brain
} from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import FeatureCard from '../components/FeatureCard'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield />,
      title: "Privacy First",
      description: "All processing happens locally on your machine. Your documents never leave your control or get sent to external APIs."
    },
    {
      icon: <Zap />,
      title: "Lightning Fast",
      description: "Process documents and generate chatbots in seconds, not hours. Optimized for speed and efficiency."
    },
    {
      icon: <Code2 />,
      title: "Full Source Code",
      description: "Complete access to all source code. Modify, customize, and extend the toolkit to fit your exact needs."
    },
    {
      icon: <Palette />,
      title: "Custom Branding",
      description: "Fully customizable themes, colors, and styling. Make the chatbot look like it belongs to your brand."
    },
    {
      icon: <Database />,
      title: "Multiple Formats",
      description: "Support for PDF, Word, text files, and more. Extract knowledge from any document format seamlessly."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Optimized",
      description: "Generated chatbots work perfectly on all devices. Responsive design that adapts to any screen size."
    },
    {
      icon: <Lock />,
      title: "No Vendor Lock-in",
      description: "Own the entire solution forever. No monthly fees, no API limits, no dependency on external services."
    },
    {
      icon: <Rocket />,
      title: "Easy Deployment",
      description: "Deploy anywhere - your server, cloud platforms, or embed directly into existing websites with one click."
    },
    {
      icon: <Brain />,
      title: "Smart AI Matching",
      description: "Advanced semantic search finds the most relevant answers, even for complex or loosely related questions."
    }
  ]

  const problemSolutions = [
    {
      problem: "Expensive API costs eating your budget?",
      solution: "One-time $45 payment. No monthly fees, ever.",
      highlight: "Save $100s monthly"
    },
    {
      problem: "Worried about data privacy and security?",
      solution: "100% local processing. Your data never leaves your control.",
      highlight: "Complete privacy"
    },
    {
      problem: "Vendor lock-in keeping you trapped?",
      solution: "Full source code ownership. Modify and deploy anywhere.",
      highlight: "Total freedom"
    }
  ]

  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        {/* Problem/Solution Section */}
        <div className="text-center mb-20">
          <AnimatedText delay={0.2} variant="fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Stop Paying for</span>
              <br />
              <span className="gradient-text">What You Can Own</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4} variant="fadeInUp">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              While others charge you monthly, we give you everything once. Forever.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={item.problem}
                className="glass p-8 rounded-2xl text-center group hover:border-primary-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-4">
                    {item.problem}
                  </h4>
                  <div className="w-12 h-px bg-gradient-to-r from-red-500 to-transparent mx-auto mb-4"></div>
                  <p className="text-gray-300 mb-4">
                    {item.solution}
                  </p>
                  <motion.div
                    className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-400 font-semibold text-sm">
                      {item.highlight}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <AnimatedText delay={0.2} variant="fadeInUp">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Everything You Need, Built In
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={0.4} variant="fadeInUp">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete toolkit with professional features that would cost thousands to develop from scratch
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto border-2 border-primary-500/30">
            <motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💎
            </motion.div>
            
            <h4 className="text-3xl font-bold text-white mb-6">
              Worth <span className="gradient-text">$500+</span> of Development Time
            </h4>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Skip months of development, research, and testing. Get a battle-tested solution 
              that includes everything from AI processing to deployment scripts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "AI Processing", value: "$150+" },
                { label: "UI Components", value: "$100+" },
                { label: "Deployment Tools", value: "$120+" },
                { label: "Documentation", value: "$80+" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary-400 mb-2">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 text-4xl font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
              <span className="text-gray-500 line-through">$450+</span>
              <span className="text-primary-400 ml-4">$45</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}