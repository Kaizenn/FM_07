import imageQuote from '/src/assets/images/bg-pattern-quotation.svg'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function TestimonialsCard({ id, image, name, title, text, text2, cell, color }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`${color.background} relative rounded-lg p-8 shadow-2xl shadow-[#00000065]`}
      style={{ gridArea: cell }}
    >
      {id === 1 && (
        <img
          src={imageQuote}
          alt=""
          className="absolute top-0 right-1/5 z-0 hidden md:block"
          aria-hidden="true"
        />
      )}
      <div className="relative z-1 mb-4 flex items-center gap-4">
        <div>
          <img
            className="max-w-8 rounded-full border-2 border-[rgba(255,255,255,0.5)]"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <p className={`${color.name} text-preset2 z-1 pb-0.5`}>{name}</p>
          <p className={`${color.title} text-preset4`}>{title}</p>
        </div>
      </div>
      <div className="relative z-1">
        <p className={`${color.text} text-preset1 mb-4`}>{text}</p>
        <p className={`${color.text2} text-preset3`}>{text2}</p>
      </div>
    </motion.div>
  )
}
