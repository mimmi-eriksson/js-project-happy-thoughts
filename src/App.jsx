import Header from "./sections/Header"
import MainSection from "./sections/MainSection"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <div
        className="max-w-md min-h-screen px-4 mx-auto pb-15"
      >
        <Header />
        <MainSection />
      </div>
      <Footer />
    </>
  )
}

export default App
