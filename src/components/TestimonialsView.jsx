import { testimonialsCards } from '../data/testimonialsCards'
import TestimonialsCard from './TestimonialsCard'
import { AnimatePresence, motion } from 'framer-motion'

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.075,
    },
  },
}

export default function TestimonialsView() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="px-8 py-16 md:px-16 md:py-24 xl:flex xl:h-screen xl:items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid-layout mx-auto max-w-[40rem] gap-8 self-auto xl:max-w-[70rem]"
        >
          {testimonialsCards.map((card) => (
            <TestimonialsCard key={card.id} {...card} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
