const LikeButton = ({ likes, onLike }) => {
  return (
    <button
      className={`bg-(--color-secondary) ${likes > 0 && 'bg-[#ffadad]'} rounded-full p-2 cursor-pointer`}
      type="button"
      onClick={onLike}
    >
      ❤️
    </button>
  )
}

export default LikeButton