import MessageCard from "./MessageCard"

const MessagesContainer = ({ messagesArray }) => {
  return (
    <div
      className="flex flex-col gap-10"
    >
      {messagesArray.map(message => <MessageCard key={message.timeStamp} message={message.message} timeStamp={message.timeStamp} />)}
    </div>
  )
}

export default MessagesContainer