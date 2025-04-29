import { useState } from "react"
import SubmitButton from "../components/SubmitButton"

const FormCard = () => {
  const [message, setMessage] = useState("")

  return (
    <article
      className="bg-[#eaeaea] border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <form
        className="flex flex-col items-start gap-3"
        onSubmit={(event) => event.preventDefault}
      >
        <p>What's making you happy right now?</p>
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