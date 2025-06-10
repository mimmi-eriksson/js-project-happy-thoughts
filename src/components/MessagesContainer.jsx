import MessageCard from "./MessageCard"
import PageSelector from "./PageSelector"

const MessagesContainer = ({ messages, page, maxPages, onChangePage, onLike, onDelete, onEdit }) => {

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
      <PageSelector page={page} maxPages={maxPages} onChangePage={onChangePage} />
    </div>
  )
}

export default MessagesContainer