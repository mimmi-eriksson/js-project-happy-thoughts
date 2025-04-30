import { useState } from "react"
import SubmitButton from "../components/SubmitButton"

const FormCard = ({ onMessageSubmission }) => {
  const [message, setMessage] = useState("")
  const [characters, setCharacters] = useState(0)

  const handleTyping = (event) => {
    setMessage(event.target.value)
    setCharacters(event.target.value.length)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const unixTimeStamp = Math.floor(new Date() / 1000)
    onMessageSubmission(message, unixTimeStamp)
    setMessage("")
    setCharacters(0)
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
          onChange={handleTyping}
          value={message}
        />
        <p
          className={`font-mono text-xs ${characters < 140 ? 'text-[#464646]' : 'text-[#ff0000]'} self-end -mt-2 mb-1`}
        >
          {characters}/140 characters
        </p>
        <SubmitButton isActive={message.length > 0 ? true : false} />
      </form>
      <p></p>
    </article>
  )
}

export default FormCard