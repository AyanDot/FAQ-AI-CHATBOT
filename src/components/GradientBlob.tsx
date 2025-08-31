import { motion } from 'framer-motion'

interface GradientBlobProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'accent'
  animate?: boolean
}

export default function GradientBlob({
  className = '',
  size = 'md',
  color = 'primary',
  animate = true
}: GradientBlobProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  }

  const colors = {
    primary: 'from-primary-500/30 via-primary-600/20 to-primary-700/30',
    secondary: 'from-secondary-500/30 via-secondary-600/20 to-secondary-700/30',
    accent: 'from-accent-500/30 via-accent-600/20 to-accent-700/30'
  }

  const animationProps = animate
    ? {
        animate: {
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }
      }
    : {}

  return (
    <motion.div
      className={`absolute bg-gradient-to-br ${colors[color]} ${sizes[size]} blur-3xl opacity-50 ${className}`}
      {...animationProps}
    />
  )
}