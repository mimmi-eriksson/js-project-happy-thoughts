import { useState, useEffect } from "react"
import FormCard from "../components/FormCard"
import MessagesContainer from "../components/MessagesContainer"
import Loader from "../components/Loader"
import Error from "../components/Error"

const MainSection = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
      setError(true)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const postMessage = async (message) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          message: message,
        }),
        headers: { "Content-Type": "application/json" }
      })
      if (response.ok) {
        const newMessage = await response.json()
        setMessages((messages) => [newMessage, ...messages])
      }
    } catch (error) {
      setError(true)
      console.log(error)
    } finally {
      //
    }
  }

  const likeMessage = async (id) => {
    try {
      const response = await fetch(`${url}/${id}/like`, { method: "POST" })
      if (response.ok) {
        const likedMessage = await response.json()
        setMessages((messages) => messages.map(message =>
          message._id === id ? { ...message, hearts: likedMessage.hearts } : message
        ))
      }
    } catch (error) {
      console.log(error)
    } finally {
      //
    }
  }

  const handleMessageSubmission = (message) => {
    postMessage(message)
  }

  const handleLike = (id) => {
    likeMessage(id)
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <section className="flex flex-col gap-10 pb-15 min-h-screen">
      <FormCard onMessageSubmission={handleMessageSubmission} />
      {loading && <Loader />}
      {error && <Error />}
      <MessagesContainer messages={messages} onLike={handleLike} />
    </section>
  )
}

export default MainSection