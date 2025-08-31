// Animation utilities optimized for 60fps performance

import { Variants, Transition } from 'framer-motion'

// Optimized spring configuration for smooth 60fps animations
export const springConfig: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8
}

// Smooth easing curves optimized for performance
export const smoothEase = [0.25, 0.1, 0.25, 1.0] as const
export const quickEase = [0.4, 0.0, 0.2, 1.0] as const

// Optimized variants for common animations
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: springConfig
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig
  }
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: springConfig
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig
  }
}

export const slideInVariants: Variants = {
  hidden: {
    x: -30,
    opacity: 0,
    transition: springConfig
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: springConfig
  }
}

export const scaleHoverVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: quickEase
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: quickEase
    }
  }
}

// GPU-accelerated transform properties only
export const gpuAccelerated = {
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden' as const,
  perspective: 1000
}

// Stagger configuration for list animations
export const staggerConfig = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

// Performance-optimized floating animation
export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse" as const
    }
  }
}

// Optimized gradient animation
export const gradientVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

// Reduced motion preferences
export const respectsReducedMotion = (variants: Variants): Variants => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      ...variants,
      animate: {
        ...variants.animate,
        transition: { duration: 0.01 }
      }
    }
  }
  return variants
}

// Performance monitoring utility
export const animationPerformanceConfig = {
  layoutId: undefined, // Avoid layout animations when possible
  style: gpuAccelerated,
  transition: springConfig
}