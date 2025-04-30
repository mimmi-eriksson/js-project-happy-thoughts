const SubmitButton = ({ isActive }) => {
  return (
    <button
      className={`bg-[#ffadad] rounded-full py-2 px-5 ${isActive ? 'cursor-pointer' : 'opacity-50'}`}
      type="submit"
      disabled={!isActive}
    >
      <p>
        ❤️ Send Happy Thought ❤️
      </p>
    </button>
  )
}

export default SubmitButton