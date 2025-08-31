import { motion } from 'framer-motion'
import { CreditCard, Shield, Check } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

interface XPayButtonProps {
  amount: number
  productName: string
  productId: string
  onSuccess?: (transactionId: string) => void
  onError?: (error: string) => void
  className?: string
}

export default function XPayButton({
  amount,
  productName,
  productId,
  onSuccess,
  onError,
  className = ''
}: XPayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    setIsProcessing(true)

    try {
      // XPay Payment Integration
      const response = await fetch('/api/xpay/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          product_name: productName,
          product_id: productId,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cancel`
        })
      })

      if (!response.ok) {
        throw new Error('Payment initialization failed')
      }

      const { checkout_url, payment_id } = await response.json()
      
      // Store payment ID for verification
      sessionStorage.setItem('xpay_payment_id', payment_id)
      
      // Redirect to XPay checkout
      window.location.href = checkout_url
      
    } catch (error) {
      console.error('Payment error:', error)
      onError?.(error instanceof Error ? error.message : 'Payment failed')
      setIsLoading(false)
      setIsProcessing(false)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        size="lg"
        onClick={handlePayment}
        disabled={isLoading || isProcessing}
        icon={isProcessing ? undefined : <CreditCard className="w-5 h-5" />}
        className="w-full text-xl py-6 relative overflow-hidden"
      >
        {isProcessing ? (
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Processing...
          </motion.div>
        ) : (
          `Secure Checkout - $${amount}`
        )}
      </Button>

      {/* Security badges */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4 text-green-400" />
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4 text-green-400" />
          <span>30-Day Guarantee</span>
        </div>
        <div className="flex items-center gap-1">
          <CreditCard className="w-4 h-4 text-blue-400" />
          <span>Instant Download</span>
        </div>
      </motion.div>

      {/* Payment methods */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-sm text-gray-500 mb-3">Secure payment powered by XPay</p>
        <div className="flex justify-center items-center gap-3 opacity-60">
          <div className="text-2xl">💳</div>
          <div className="text-2xl">🏦</div>
          <div className="text-2xl">💰</div>
          <div className="text-2xl">🔒</div>
        </div>
      </motion.div>
    </div>
  )
}