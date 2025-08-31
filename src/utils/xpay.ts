// XPay Integration Utilities

export interface XPayConfig {
  apiKey: string
  environment: 'sandbox' | 'production'
  webhookSecret?: string
}

export interface PaymentRequest {
  amount: number // in cents
  product_name: string
  product_id: string
  customer_email?: string
  success_url: string
  cancel_url: string
  metadata?: Record<string, any>
}

export interface PaymentResponse {
  payment_id: string
  checkout_url: string
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
}

class XPayService {
  private config: XPayConfig

  constructor(config: XPayConfig) {
    this.config = config
  }

  async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    const baseUrl = this.config.environment === 'production' 
      ? 'https://api.xpay.com' 
      : 'https://sandbox.xpay.com'

    try {
      const response = await fetch(`${baseUrl}/v1/payments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'FAQ-AI-Toolkit/1.0'
        },
        body: JSON.stringify({
          amount: request.amount,
          currency: 'USD',
          product_name: request.product_name,
          product_id: request.product_id,
          success_url: request.success_url,
          cancel_url: request.cancel_url,
          customer_email: request.customer_email,
          metadata: {
            source: 'faq-ai-toolkit',
            ...request.metadata
          }
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Payment creation failed')
      }

      return await response.json()
    } catch (error) {
      console.error('XPay payment creation error:', error)
      throw error
    }
  }

  async verifyPayment(paymentId: string): Promise<PaymentResponse> {
    const baseUrl = this.config.environment === 'production' 
      ? 'https://api.xpay.com' 
      : 'https://sandbox.xpay.com'

    try {
      const response = await fetch(`${baseUrl}/v1/payments/${paymentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Payment verification failed')
      }

      return await response.json()
    } catch (error) {
      console.error('XPay payment verification error:', error)
      throw error
    }
  }

  async handleWebhook(payload: string, signature: string): Promise<any> {
    // Verify webhook signature for security
    if (!this.config.webhookSecret) {
      throw new Error('Webhook secret not configured')
    }

    // In a real implementation, you would verify the webhook signature here
    // using crypto.createHmac('sha256', this.config.webhookSecret)
    
    try {
      return JSON.parse(payload)
    } catch (error) {
      throw new Error('Invalid webhook payload')
    }
  }
}

// Singleton instance
let xpayInstance: XPayService | null = null

export function initializeXPay(config: XPayConfig): XPayService {
  xpayInstance = new XPayService(config)
  return xpayInstance
}

export function getXPayInstance(): XPayService {
  if (!xpayInstance) {
    throw new Error('XPay not initialized. Call initializeXPay() first.')
  }
  return xpayInstance
}

// Helper function to format price for display
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

// Helper function to validate payment amount
export function isValidAmount(amount: number): boolean {
  return amount > 0 && amount <= 999999 && Number.isInteger(amount)
}