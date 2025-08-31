import { motion } from 'framer-motion'
import { Star, Quote, Twitter, Linkedin, Github } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechStartup",
      company: "@techstartup",
      avatar: "👩‍💻",
      content: "Saved us 3 months of development time and $15K in contractor costs. The toolkit is incredibly well-built and the local processing is exactly what we needed for compliance.",
      rating: 5,
      highlight: "Saved $15K"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "@marcus_dev",
      avatar: "👨‍💼",
      content: "As someone who's built similar solutions from scratch, I can say this toolkit is worth every penny. The code quality is exceptional and it handles edge cases I never thought of.",
      rating: 5,
      highlight: "Exceptional quality"
    },
    {
      name: "Jennifer Liu",
      role: "Product Manager",
      company: "@jennifer_pm",
      avatar: "👩‍💼",
      content: "Our customer support tickets dropped by 60% after deploying the FAQ bot. Implementation was surprisingly smooth, and our customers love the fast, accurate responses.",
      rating: 5,
      highlight: "60% fewer tickets"
    },
    {
      name: "David Thompson",
      role: "Freelance Developer",
      company: "@davidthompson",
      avatar: "👨‍💻",
      content: "I've used this toolkit for 5 client projects now. Each deployment was profitable and clients are thrilled with the results. Best $45 investment I've made this year.",
      rating: 5,
      highlight: "5 profitable projects"
    },
    {
      name: "Lisa Park",
      role: "Enterprise Architect",
      company: "@lisa_architect",
      avatar: "👩‍🔧",
      content: "The privacy-first approach was a game-changer for our enterprise deployment. No more worrying about sensitive data leaving our network. Compliance team approved instantly.",
      rating: 5,
      highlight: "Enterprise approved"
    },
    {
      name: "Alex Kumar",
      role: "Indie Developer",
      company: "@alex_builds",
      avatar: "🧑‍💻",
      content: "Built a SaaS around this toolkit and hit $2K MRR in first month. The white-label licensing is perfect for entrepreneurs. Definitely recommend!",
      rating: 5,
      highlight: "$2K MRR in month 1"
    }
  ]

  const stats = [
    { number: "500+", label: "Developers Using", icon: "👨‍💻" },
    { number: "50+", label: "Companies Deployed", icon: "🏢" },
    { number: "4.9/5", label: "Average Rating", icon: "⭐" },
    { number: "95%", label: "Would Recommend", icon: "👍" }
  ]

  const platforms = [
    { name: "GitHub", followers: "2.3k", icon: <Github className="w-5 h-5" /> },
    { name: "Twitter", followers: "5.1k", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", followers: "1.2k", icon: <Linkedin className="w-5 h-5" /> }
  ]

  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <AnimatedText delay={0.2} variant="fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Loved by</span>
              <br />
              <span className="gradient-text">Developers Worldwide</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4} variant="fadeInUp">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of developers who've transformed their documentation into intelligent chatbots
            </p>
          </AnimatedText>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-6 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass p-8 rounded-2xl relative group hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute top-4 right-4 text-primary-400/20 group-hover:text-primary-400/40 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.1 * i }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Highlight badge */}
              <motion.div
                className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-400 font-semibold text-sm">
                  {testimonial.highlight}
                </span>
              </motion.div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center text-2xl"
                  whileHover={{ rotate: 10 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-primary-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">
              Follow Our Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-gray-400">
                    {platform.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{platform.name}</div>
                    <div className="text-sm text-gray-400">{platform.followers} followers</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <p>Join our community for updates, tips, and exclusive content</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}