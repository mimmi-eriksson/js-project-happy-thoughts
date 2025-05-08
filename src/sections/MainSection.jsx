import { useState, useEffect } from "react"
import FormCard from "../components/FormCard"
import MessagesContainer from "../components/MessagesContainer"
import Loader from "../components/Loader"

const MainSection = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleMessageSubmission = (message, timeStamp) => {
    const messageObject = { _id: messages.length, message: message, createdAt: timeStamp, hearts: 0 }
    setMessages(messages.concat(messageObject))
  }

  return (
    <section>
      <div
        className="flex flex-col gap-10 pb-15 min-h-screen"
      >
        <FormCard onMessageSubmission={handleMessageSubmission} />
        {loading && <Loader />}
        <MessagesContainer messagesArray={messages} />
      </div>
    </section>
  )
}

export default MainSection