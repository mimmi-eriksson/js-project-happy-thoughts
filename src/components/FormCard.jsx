import SubmitButton from "../components/SubmitButton"

const FormCard = () => {
  return (
    <article
      className="bg-[#eaeaea] border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <form
        className="flex flex-col items-start gap-3"
      >
        <p>What's making you happy right now?</p>
        <textarea
          className="bg-white border border-gray-400 w-full p-2 font-mono"
          placeholder="Share your happy thought!"
        />
        <SubmitButton />
      </form>
    </article>
  )
}

export default FormCard