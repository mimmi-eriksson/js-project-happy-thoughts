import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import Error from "../components/Error"
import Loader from "../components/Loader"
import MessagesContainer from "../components/MessagesContainer"
import RadioOption from "../components/RadioOption"

const Thoughts = () => {
  const { currentUser, token } = useAuth()
  const [messageList, setMessageList] = useState("myThoughts")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [page, setPage] = useState()
  const [maxPages, setMaxPages] = useState(1)

  const baseUrl = "https://think-happy-api.onrender.com/thoughts/user"
  // const baseUrl = "http://localhost:8080/thoughts" // local api
  const [fetchUrl, setFetchUrl] = useState(baseUrl)

  // update fetch url when page/currentUser changes
  useEffect(() => {
    let newUrl = baseUrl
    if (messageList === "likedThoughts") {
      newUrl += "/liked"
    }
    if (!page || page < 1) {
      setPage(1)
    }
    newUrl += `?page=${page}`
    setFetchUrl(newUrl)
  }, [page, currentUser, messageList])

  // fetch messages when messageList/fetchUrl/likedMessages changes or on initial render
  useEffect(() => {
    fetchMessages()
  }, [fetchUrl])

  const fetchMessages = async () => {
    try {
      setErrorMessage("")
      setLoading(true)
      const response = await fetch(fetchUrl, {
        method: "GET",
        headers: { "Authorization": token }
      })
      const data = await response.json()
      if (!response.ok) {
        if (response.status === 404) {
          if (messageList === "likedThoughts") {
            setErrorMessage("You have no liked thoughts yet. Like one to get started!")
          }
          if (messageList === "myThoughts") {
            setErrorMessage("You have no thoughts yet. Post one to get started!")
          }
          return
        }
      }
      setMessages(data.response.data)
      setMaxPages(Math.ceil(data.response.totalCount / data.response.limit))
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePage = (newPage) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setPage(newPage)
  }

  const handleUpdate = (updatedMessages) => {
    setMessages(updatedMessages)
    fetchMessages()
  }

  const handleError = (errorMessage) => {
    setErrorMessage(errorMessage)
  }

  const onListChange = (event) => {
    setMessageList(event.target.value)
  }

  return (
    <section className="flex flex-col gap-8 py-10 min-h-screen">
      <h1 className="pb-2 text-(--color-text) text-center text-2xl font-bold">
        Welcome {currentUser.username}!
      </h1>
      <div className="flex justify-evenly items-center gap-1">
        <RadioOption radioGroup="thoughtsList" id="myThoughts" label="My thoughts" isChecked={messageList === "myThoughts"} onChange={onListChange} />
        <RadioOption radioGroup="thoughtsList" id="likedThoughts" label="Liked thoughts" isChecked={messageList === "likedThoughts"} onChange={onListChange} />
      </div>
      {loading && <Loader />}
      {errorMessage && <Error text={errorMessage} />}
      {!errorMessage && <MessagesContainer messages={messages} page={page} maxPages={maxPages} onChangePage={handleChangePage} onError={handleError} update={handleUpdate} />}
    </section>
  )
}

export default Thoughts