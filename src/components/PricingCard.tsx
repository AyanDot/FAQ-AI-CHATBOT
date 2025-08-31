import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

interface PricingCardProps {
  title: string
  price: string
  originalPrice?: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  onButtonClick?: () => void
  delay?: number
}

export default function PricingCard({
  title,
  price,
  originalPrice,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  onButtonClick,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl ${
        highlighted 
          ? 'glass border-2 border-primary-500/50 glow' 
          : 'glass hover:border-white/20'
      } transition-all duration-500`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        y: highlighted ? 0 : -8,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
    >
      {highlighted && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.4 }}
        >
          Most Popular
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-white">${price}</span>
            {originalPrice && (
              <span className="text-2xl text-gray-500 line-through">${originalPrice}</span>
            )}
          </div>
          <span className="text-gray-400">one-time payment</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * (index + 1), duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-primary-400" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>

      <Button
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        onClick={onButtonClick}
        className="w-full"
      >
        {buttonText}
      </Button>
    </motion.div>
  )
}