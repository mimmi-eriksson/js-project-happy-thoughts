import MessageCard from "./MessageCard"

const MessagesContainer = ({ messages, onLike, onDelete, onEdit }) => {
  return (
    <div
      className="flex flex-col gap-10"
    >
      {messages.map((message) => {
        return (
          <MessageCard
            key={message._id}
            message={message}
            onLike={() => onLike(message._id)}
            onDelete={() => onDelete(message._id)}
            onEdit={onEdit}
          />
        )
      })}
    </div>
  )
}

export default MessagesContainer