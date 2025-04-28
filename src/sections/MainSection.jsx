import FormCard from "../components/FormCard"
import SubmitButton from "../components/SubmitButton"
import MessageCard from "../components/MessageCard"

const MainSection = () => {
  return (
    <section>
      <FormCard />
      <MessageCard message="React is making me happy!" likes="10" time="2 minutes" />
    </section>
  )
}

export default MainSection