import MessageCard from "./MessageCard"

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
      <div className="flex gap-2 items-center self-center">
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => onChangePage(page - 1)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <p>Page {page}</p>
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => onChangePage(page + 1)}
          disabled={page === maxPages}
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default MessagesContainer