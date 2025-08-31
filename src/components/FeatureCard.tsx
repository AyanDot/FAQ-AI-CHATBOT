import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  className = ''
}: FeatureCardProps) {
  return (
    <motion.div
      className={`glass p-8 rounded-2xl group hover:bg-white/10 transition-all duration-500 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
    >
      <motion.div
        className="w-16 h-16 mx-auto mb-6 p-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <div className="text-primary-400 text-2xl">
          {icon}
        </div>
      </motion.div>
      
      <motion.h3
        className="text-xl font-bold text-white mb-4 text-center group-hover:text-primary-300 transition-colors duration-300"
        layout
      >
        {title}
      </motion.h3>
      
      <motion.p
        className="text-gray-300 text-center leading-relaxed"
        layout
      >
        {description}
      </motion.p>
    </motion.div>
  )
}