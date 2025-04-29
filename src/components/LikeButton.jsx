import { useState } from "react"

const LikeButton = () => {
  const [likes, setLikes] = useState(0)

  return (
    <div
      className="flex items-center gap-2"
    >
      <button
        className={`bg-[#eaeaea] ${likes > 0 && 'bg-[#ffadad]'} rounded-full p-2`}
        type="button"
        onClick={() => setLikes(likes + 1)}
      >
        ❤️
      </button>
      <p
        className="text-[#818181] text-sm"
      >
        x {likes}
      </p>
    </div>

  )
}

export default LikeButton