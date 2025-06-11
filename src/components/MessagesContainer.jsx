import MessageCard from "./MessageCard"
import PageSelector from "./PageSelector"

const MessagesContainer = ({ messages, page, maxPages, onChangePage, onFilter, onLike, onDelete, onEdit }) => {

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
            onFilter={onFilter}
          />
        )
      })}
      <PageSelector page={page} maxPages={maxPages} onChangePage={onChangePage} />
    </div>
  )
}

export default MessagesContainer