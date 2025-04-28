import SubmitButton from "../components/SubmitButton"

const FormCard = () => {
  return (
    <article>
      <p>What's making you happy right now?</p>
      <form>
        <textarea placeholder="Share your happy thought!" />
        <SubmitButton />
      </form>
    </article>
  )
}

export default FormCard