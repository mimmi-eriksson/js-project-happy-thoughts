import { useState } from "react"
import SubmitButton from "../components/SubmitButton"
import messages from "../data/messages.json"

const FormCard = () => {
  const [message, setMessage] = useState("")
  const [timeStamp, setTimeStamp] = useState(new Date())

  const handleSubmit = (event) => {
    event.preventDefault()
    setTimeStamp(new Date())
    const unixTime = Math.floor(timeStamp.getTime() / 1000)
    console.log(message)
    console.log(unixTime)

  }

  return (
    <article
      className="bg-[#eaeaea] border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <form
        className="flex flex-col items-start gap-3"
        onSubmit={handleSubmit}
      >
        <label>What's making you happy right now?</label>
        <textarea
          className="bg-white border border-gray-400 w-full p-2 font-mono"
          placeholder="Share your happy thought!"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <SubmitButton />
      </form>
    </article>
  )
}

export default FormCard