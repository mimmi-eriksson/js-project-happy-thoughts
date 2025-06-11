import { motion } from "motion/react"

const LikeButton = ({ likes, onLike }) => {
  return (
    <motion.button
      className={`bg-(--color-secondary) ${likes > 0 && 'bg-[#ffadad]'} rounded-full focus:outline-2 focus:outline-(--color-primary) p-2 cursor-pointer`}
      type="button"
      onClick={onLike}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Like thought"
    >
      ❤️
    </motion.button>
  )
}

export default LikeButton