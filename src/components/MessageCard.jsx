import { useState } from "react"
import { formatDistance } from "date-fns"
import MessageCardButton from "./MessageCardButton"
import LikeButton from "./LikeButton"
import Tag from "./Tag"
import SubmitButton from "./SubmitButton"
import CancelButton from "./CancelButton"

const MessageCard = ({ message, onFilter, onLike, onDelete, onEdit }) => {

  const [editedMessage, setEditedMessage] = useState("")
  const [showInput, setShowInput] = useState(false)
  const maxCharacters = 140
  const minCharacters = 5

  const handleTyping = (event) => {
    setEditedMessage(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      onSubmitEditedMessage(event)
    }
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
  const onCancel = () => {
    setEditedMessage("")
    setShowInput(false)
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
                return <Tag key={tag} tag={tag} onFilter={onFilter} />
              })}
            </ul>
            <div className="flex gap-3">
              <MessageCardButton icon={"🖋️"} onClick={onEditMessage} ariaLabel="Edit thought" />
              <MessageCardButton icon={"🗑️"} onClick={onDelete} ariaLabel="Delete thought" />
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
                onKeyDown={handleKeyDown}
                value={editedMessage}
                maxLength={maxCharacters}
                autoFocus
              />
              <div className="flex justify-between">
                <SubmitButton text="❤️ Edit Thought ❤️" isActive={editedMessage.length >= minCharacters ? true : false} />
                <CancelButton onClick={onCancel} />
              </div>
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
            {formatDistance(message.createdAt, new Date(), { addSuffix: true })}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MessageCard