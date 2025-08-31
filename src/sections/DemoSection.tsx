import { motion } from 'framer-motion'
import { FileText, ArrowRight, MessageCircle, Zap } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import CodeBlock from '../components/CodeBlock'

export default function DemoSection() {
  const demoCode = `# Install the toolkit
npm install -g faq-ai-toolkit

# Process your documents
faq-toolkit process docs/

# Generate chatbot
faq-toolkit generate --theme modern

# Deploy locally
faq-toolkit serve --port 3000`

  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Upload Documents",
      description: "Drop your PDFs, docs, or text files",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Processing",
      description: "Local AI extracts knowledge instantly",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Chatbot",
      description: "Deployable FAQ bot with your branding",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20">
          <AnimatedText delay={0.2} variant="fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">See It In Action</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4} variant="fadeInUp">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how your documents transform into intelligent chatbots in under 5 minutes
            </p>
          </AnimatedText>
        </div>

        {/* Interactive Demo Flow */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <motion.div
                  className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index + 0.5 }}
                  >
                    <ArrowRight className="w-8 h-8 text-primary-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedText delay={0.4} variant="fadeInLeft">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Simple Command Line Interface
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                No complex setup or configuration. Our toolkit provides a clean CLI that handles 
                everything from document processing to chatbot deployment.
              </p>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-300">Process any document format</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-gray-300">Customize appearance and behavior</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-gray-300">Deploy anywhere instantly</span>
                </motion.div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.6} variant="fadeInRight">
            <CodeBlock 
              code={demoCode}
              language="bash"
            />
          </AnimatedText>
        </div>

        {/* Live Preview */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="glass p-8 rounded-2xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Live Demo Preview</h4>
            
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-4">FAQ AI Chatbot</span>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-end">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-lg max-w-xs">
                    How do I integrate this into my website?
                  </div>
                </div>
                
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-md">
                    Simply copy the generated HTML file to your server, or embed the widget code. 
                    The toolkit includes multiple integration options including React components, 
                    vanilla JS, and iframe embeds.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}