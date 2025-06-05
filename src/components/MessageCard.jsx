import { useState } from "react"
import EditButton from "./EditButton"
import LikeButton from "./LikeButton"
import Tag from "./Tag"
import SubmitButton from "./SubmitButton"

const MessageCard = ({ message, onLike, onDelete, onEdit }) => {

  const [editedMessage, setEditedMessage] = useState("")
  const [showInput, setShowInput] = useState(false)

  // function to format timestamp
  const toElapsedTime = (timeStamp) => {
    const unixTimeStamp = Date.parse(timeStamp)
    const now = Date.now()
    const timeDiff = now - unixTimeStamp

    const seconds = Math.floor(timeDiff / 1000)
    if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""} ago`

    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`

    const days = Math.floor(hours / 24)
    if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`

    const months = Math.floor(days / 30)
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`

    const years = Math.floor(days / 365)
    return `${years} year${years !== 1 ? 's' : ''} ago`
  }

  const handleTyping = (event) => {
    setEditedMessage(event.target.value)
  }

  const onSubmitEditedMessage = (event) => {
    event.preventDefault()
    onEdit(message._id, editedMessage)
    setEditedMessage("")
    setShowInput(false)
  }

  const onEditMessage = () => {
    setShowInput(true)
  }

  return (
    <article
      className="bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-5 animate-fadeIn"
    >
      <div
        className="flex flex-col justify-between gap-6"
      >
        <div
          className="flex flex-col gap-5"
        >
          <div className="flex justify-between items-center">
            <ul
              className="flex gap-3"
            >
              {message.tags.map(tag => {
                return <Tag key={tag} tag={tag} />
              })}
            </ul>
            <div className="flex gap-3">
              <EditButton icon={"🖋️"} onClick={onEditMessage} />
              <EditButton icon={"🗑️"} onClick={onDelete} />
            </div>
          </div>
          <p
            className="font-mono text-lg wrap-break-word"
          >
            {message.message}
          </p>
          {showInput &&
            <form onSubmit={onSubmitEditedMessage}>
              <textarea
                id="thoughtInput"
                className="bg-white border border-gray-400 w-full p-2 font-mono resize-none focus:outline-(--color-accent)"
                placeholder={message.message}
                onChange={handleTyping}
                value={editedMessage}
              />
              <SubmitButton isActive="true" />
            </form>
          }
        </div>
        <div
          className="flex justify-between items-center"
        >
          <div
            className="flex items-center gap-2"
          >
            <LikeButton likes={message.hearts} onLike={onLike} />
            <p
              className="text-[#707070] text-sm"
            >
              x {message.hearts}
            </p>
          </div>
          <p
            className="text-[#707070] text-sm"
          >
            {toElapsedTime(message.createdAt)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MessageCard