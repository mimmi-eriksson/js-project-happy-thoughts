import MessageCard from "./MessageCard"

const MessagesContainer = ({ messagesArray }) => {
  // sort to show latest message first
  const sortedMessages = messagesArray.sort((a, b) => (b.id - a.id))
  return (
    <div
      className="flex flex-col gap-10"
    >
      {sortedMessages.map((message) => {
        return (
          <MessageCard key={message.id} message={message.message} timeStamp={message.timeStamp} />
        )
      })}
    </div>
  )
}

export default MessagesContainer