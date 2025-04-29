import FormCard from "../components/FormCard"
import SubmitButton from "../components/SubmitButton"
import MessageCard from "../components/MessageCard"
import MessagesContainer from "../components/MessagesContainer"
import messages from "../data/messages.json"

const MainSection = () => {
  return (
    <section>
      <div
        className="flex flex-col gap-10"
      >
        <FormCard />
        <MessagesContainer messagesArray={messages.messages} />
      </div>
    </section>
  )
}

export default MainSection