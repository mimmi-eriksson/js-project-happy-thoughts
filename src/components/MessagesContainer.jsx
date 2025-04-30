import MessageCard from "./MessageCard"

const MessagesContainer = ({ messagesArray }) => {
  //show latest message first
  const sortedMessages = messagesArray.sort((a, b) => (b.id - a.id))

  const toElapsedTime = (timeStamp) => {
    const now = Date.now()
    const timeDiff = now - timeStamp * 1000 //difference in milliseconds

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

  return (
    <div
      className="flex flex-col gap-10"
    >
      {sortedMessages.map((message) => {
        return (
          <MessageCard key={message.id} message={message.message} time={toElapsedTime(message.timeStamp)} />
        )
      })}
    </div>
  )
}

export default MessagesContainer