import SubmitButton from "../components/SubmitButton"

const FormCard = () => {
  return (
    <article
      className="p-5 bg-[#eaeaea] border border-black border-solid shadow-[10px_10px] shadow-black"
    >
      <form
        className="flex flex-col items-start gap-3"
      >
        <p>What's making you happy right now?</p>
        <textarea
          className="font-mono bg-white border border-gray-400 p-2 w-full"
          placeholder="Share your happy thought!"
        />
        <SubmitButton />
      </form>
    </article>
  )
}

export default FormCard