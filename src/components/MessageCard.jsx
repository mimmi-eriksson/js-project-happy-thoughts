import { useState } from "react"
import LikeButton from "./LikeButton"

const MessageCard = ({ message, timeStamp }) => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <article
      className="bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <div
        className="flex flex-col justify-between gap-3"
      >
        <p
          className="font-mono text-lg"
        >
          {message}
        </p>
        <div
          className="flex justify-between items-center"
        >
          <div
            className="flex items-center gap-2"
          >
            <LikeButton likes={likes} onLike={handleLike} />
            <p
              className="text-[#707070] text-sm"
            >
              x {likes}
            </p>
          </div>
          <p
            className="text-[#707070] text-sm"
          >
            {timeStamp}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MessageCard