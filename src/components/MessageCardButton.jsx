const MessageCardButton = ({ icon, onClick }) => {
  return (
    <button
      className="bg-(--color-secondary) hover:bg-[#ffadad] rounded-full p-2 focus:outline-2 focus:outline-(--color-primary) text-sm cursor-pointer"
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default MessageCardButton