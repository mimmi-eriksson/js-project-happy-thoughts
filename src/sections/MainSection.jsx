import { useEffect, useState } from "react"

import Error from "../components/Error"
import FormCard from "../components/FormCard"
import ControlsCard from "../components/ControlsCard"
import Loader from "../components/Loader"
import MessagesContainer from "../components/MessagesContainer"

const MainSection = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // const url = "https://think-happy-api.onrender.com/thoughts" // deployed api
  const url = "http://localhost:8080/thoughts" // local api

  const fetchMessages = async () => {
    try {
      setErrorMessage("")
      setLoading(true)
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.response)
      }
    } catch (error) {
      setErrorMessage(`An error occured when loading thoughts: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const postMessage = async (message) => {
    try {
      setErrorMessage("")
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          message: message,
        }),
        headers: { "Content-Type": "application/json" }
      })
      if (response.ok) {
        const newMessage = await response.json()
        setMessages((messages) => [newMessage.response, ...messages])
      }
    } catch (error) {
      setErrorMessage(`An error occured when posting thought: ${error.message}`)
    } finally {
      //
    }
  }

  const likeMessage = async (id) => {
    try {
      setErrorMessage("")
      const response = await fetch(`${url}/${id}/like`, { method: "PATCH" })
      if (response.ok) {
        const likedMessage = await response.json()
        setMessages((messages) => messages.map(message =>
          message._id === id ? { ...message, hearts: likedMessage.response.hearts } : message
        ))
      }
    } catch (error) {
      setErrorMessage(`An error occured when liking thought: ${error.message}`)
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
      <ControlsCard />
      {loading && <Loader />}
      {errorMessage && <Error text={errorMessage} />}
      <MessagesContainer messages={messages} onLike={handleLike} />
    </section>
  )
}

export default MainSection