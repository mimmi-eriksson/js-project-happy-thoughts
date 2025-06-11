import { useState } from "react";

const LogInCard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.email || !formData.password) {
      setError("Please fill in both fields")
      return
    }

    setError("")

    console.log(formData)

    //log in user

    //hide login card

    //clear input fields?

  }

  const onSignUp = () => {
    //hide login card
    //show signup card
    console.log("go to sign up page")
  }

  const onContinue = () => {
    //hide login card
    //show signup card
    console.log("continuing as an anonymous user")
  }

  return (
    <article className="flex flex-col items-center gap-10 bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-10">
      <form
        className="flex flex-col gap-8 w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className="pb-1 text-(--color-primary) text-2xl font-semibold" >Welcome!</h2>
          <p className="text-sm" >Please log in to continue</p>
        </div>
        <div className="flex flex-col gap-2" >
          <label htmlFor="email">Email:</label>
          <input
            className="bg-white border border-gray-400 w-full p-2 font-mono focus:outline-(--color-accent)"
            type="email"
            name="email"
            placeholder="yourname@email.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2" >
          <label htmlFor="password">Password:</label>
          <input
            className="bg-white border border-gray-400 w-full p-2 font-mono focus:outline-(--color-accent)"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            value={formData.password}
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button className="bg-[#ffadad] rounded-xl py-2 px-5 focus:outline-2 focus:outline-(--color-primary) cursor-pointer" type="submit">
          Log in
        </button>
      </form>
      <div className="flex flex-col items-center gap-1 text-sm">
        <p>Don't have an account?</p>
        <div className="flex gap-2 text-sm">
          <button
            className="text-(--color-primary) underline cursor-pointer"
            type="button"
            onClick={onSignUp}
          >
            Sign up
          </button>
          <p>or</p>
          <button
            className="text-(--color-primary) underline cursor-pointer"
            type="button"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </article>
  )
}

export default LogInCard