import { useState } from "react"
import SubmitButton from "../components/SubmitButton"

const FormCard = ({ onMessageSubmission }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const unixTimeStamp = Math.floor(new Date() / 1000)
    onMessageSubmission(message, unixTimeStamp)
    setMessage("")
  }

  return (
    <article
      className="bg-[#eaeaea] border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <form
        className="flex flex-col items-start gap-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="thoughtInput">What's making you happy right now?</label>
        <textarea
          id="thoughtInput"
          className="bg-white border border-gray-400 w-full p-2 font-mono"
          placeholder="Share your happy thought!"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <SubmitButton isActive={message.length > 0 ? true : false} />
      </form>
      <p></p>
    </article>
  )
}

export default FormCard