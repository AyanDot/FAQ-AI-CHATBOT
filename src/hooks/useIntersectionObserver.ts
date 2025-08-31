import { useEffect, useRef, useState } from 'react'
import { trackSectionView } from '../utils/analytics'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  trackAnalytics?: boolean
  analyticsLabel?: string
}

export const useIntersectionObserver = ({
  threshold = 0.3,
  rootMargin = '0px',
  trackAnalytics = false,
  analyticsLabel = ''
}: UseIntersectionObserverOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting
        setIsIntersecting(isCurrentlyIntersecting)

        // Track first time intersection for analytics
        if (isCurrentlyIntersecting && !hasIntersected && trackAnalytics && analyticsLabel) {
          trackSectionView(analyticsLabel)
          setHasIntersected(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasIntersected, trackAnalytics, analyticsLabel])

  return { targetRef, isIntersecting, hasIntersected }
}