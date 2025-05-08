import { useState } from "react"
import LikeButton from "./LikeButton"

const MessageCard = ({ id, message, time, hearts }) => {
  const [likes, setLikes] = useState(hearts)

  const url = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

  const postLike = async () => {
    try {
      const response = await fetch(url, { method: "POST" })
      if (response.ok) {
        // 
      }
    } catch (error) {
      console.log(error)
    } finally {
      //
    }
  }

  const handleLike = () => {
    setLikes(likes + 1)
    postLike()
  }

  return (
    <article
      className="bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <div
        className="flex flex-col justify-between gap-3"
      >
        <p
          className="font-mono text-lg wrap-break-word"
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
            {time}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MessageCard