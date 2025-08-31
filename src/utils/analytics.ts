// Analytics and tracking utilities

interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

class AnalyticsService {
  private isInitialized = false
  private debugMode = false

  constructor(debugMode = false) {
    this.debugMode = debugMode
  }

  // Initialize analytics (Google Analytics, Mixpanel, etc.)
  initialize(trackingId: string) {
    if (typeof window === 'undefined') return

    try {
      // Google Analytics 4 (gtag.js) initialization
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
      document.head.appendChild(script)

      // Initialize gtag
      ;(window as any).dataLayer = (window as any).dataLayer || []
      const gtag = (...args: any[]) => {
        ;(window as any).dataLayer.push(args)
      }

      gtag('js', new Date())
      gtag('config', trackingId, {
        page_title: 'FAQ AI Toolkit',
        page_location: window.location.href,
        custom_map: {
          custom_parameter_1: 'toolkit_version'
        }
      })

      // Store gtag globally
      ;(window as any).gtag = gtag

      this.isInitialized = true
      
      if (this.debugMode) {
        console.log('Analytics initialized with tracking ID:', trackingId)
      }
    } catch (error) {
      console.error('Failed to initialize analytics:', error)
    }
  }

  // Track custom events
  trackEvent({
    event,
    category,
    action,
    label,
    value,
    custom_parameters = {}
  }: AnalyticsEvent) {
    if (typeof window === 'undefined' || !this.isInitialized) return

    try {
      const gtag = (window as any).gtag
      if (gtag) {
        gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
          custom_map: custom_parameters,
          ...custom_parameters
        })
      }

      if (this.debugMode) {
        console.log('Analytics event tracked:', { event, category, action, label, value })
      }
    } catch (error) {
      console.error('Failed to track event:', error)
    }
  }

  // Track page views
  trackPageView(pagePath: string, pageTitle: string) {
    if (typeof window === 'undefined' || !this.isInitialized) return

    try {
      const gtag = (window as any).gtag
      if (gtag) {
        gtag('config', 'GA_TRACKING_ID', {
          page_path: pagePath,
          page_title: pageTitle
        })
      }

      if (this.debugMode) {
        console.log('Page view tracked:', { pagePath, pageTitle })
      }
    } catch (error) {
      console.error('Failed to track page view:', error)
    }
  }

  // Track conversion events
  trackConversion(transactionId: string, value: number, currency = 'USD') {
    this.trackEvent({
      event: 'purchase',
      category: 'ecommerce',
      action: 'purchase_completed',
      label: 'faq_toolkit',
      value: value,
      custom_parameters: {
        transaction_id: transactionId,
        currency: currency,
        items: [{
          item_id: 'faq-toolkit-v1',
          item_name: 'FAQ AI Toolkit',
          item_category: 'software',
          price: value,
          quantity: 1
        }]
      }
    })
  }

  // Track user engagement
  trackEngagement(action: string, section: string) {
    this.trackEvent({
      event: 'engagement',
      category: 'user_interaction',
      action: action,
      label: section
    })
  }
}

// Create singleton instance
const analytics = new AnalyticsService(process.env.NODE_ENV === 'development')

// Pre-defined tracking functions for common events
export const trackButtonClick = (buttonName: string, section: string) => {
  analytics.trackEngagement('button_click', `${section}_${buttonName}`)
}

export const trackSectionView = (sectionName: string) => {
  analytics.trackEvent({
    event: 'section_view',
    category: 'page_interaction',
    action: 'section_viewed',
    label: sectionName
  })
}

export const trackVideoPlay = (videoName: string) => {
  analytics.trackEvent({
    event: 'video_play',
    category: 'media_interaction',
    action: 'video_started',
    label: videoName
  })
}

export const trackDownloadAttempt = (downloadType: string) => {
  analytics.trackEvent({
    event: 'download_attempt',
    category: 'conversion',
    action: 'download_started',
    label: downloadType
  })
}

export const trackPaymentInitiated = (amount: number) => {
  analytics.trackEvent({
    event: 'begin_checkout',
    category: 'ecommerce',
    action: 'payment_initiated',
    value: amount,
    custom_parameters: {
      currency: 'USD',
      payment_method: 'xpay'
    }
  })
}

export const trackPaymentCompleted = (transactionId: string, amount: number) => {
  analytics.trackConversion(transactionId, amount)
}

// Initialize analytics with your tracking ID
export const initializeAnalytics = (trackingId: string) => {
  analytics.initialize(trackingId)
}

export default analytics