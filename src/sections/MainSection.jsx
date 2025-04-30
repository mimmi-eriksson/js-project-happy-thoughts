import { useState } from "react"
import FormCard from "../components/FormCard"
import MessagesContainer from "../components/MessagesContainer"
import messages from "../data/messages.json"

const MainSection = () => {
  const [messagesList, setMessagesList] = useState(messages.messages)

  const handleMessageSubmission = (message, timeStamp) => {
    const messageObject = { id: messagesList.length, message: message, timeStamp: timeStamp }
    setMessagesList(messagesList.concat(messageObject))
  }

  return (
    <section>
      <div
        className="flex flex-col gap-10"
      >
        <FormCard onMessageSubmission={handleMessageSubmission} />
        <MessagesContainer messagesArray={messagesList} />
      </div>
    </section>
  )
}

export default MainSection