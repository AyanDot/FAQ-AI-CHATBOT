import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  showCopy?: boolean
}

export default function CodeBlock({
  code,
  language = 'bash',
  className = '',
  showCopy = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <motion.div
      className={`relative glass rounded-xl overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {showCopy && (
        <motion.button
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 z-10"
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: copied ? 360 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </motion.div>
        </motion.button>
      )}
      
      <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-400 ml-4">{language}</span>
      </div>
      
      <pre className="p-6 overflow-x-auto">
        <code className="font-mono text-sm text-gray-100 whitespace-pre">
          {code}
        </code>
      </pre>
    </motion.div>
  )
}