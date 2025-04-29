import FormCard from "../components/FormCard"
import SubmitButton from "../components/SubmitButton"
import MessageCard from "../components/MessageCard"

const MainSection = () => {
  return (
    <section>
      <div
        className="flex flex-col gap-10"
      >
        <FormCard />
        <div
          className="flex flex-col gap-10"
        >
          <MessageCard message="React is making me happy!" time="30 seconds" />
          <MessageCard message="It's sunny!" time="15 minutes" />
        </div>
      </div>
    </section>
  )
}

export default MainSection