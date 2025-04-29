import LikeButton from "./LikeButton"

const MessageCard = ({ message, time }) => {
  const minutes = time

  return (
    <article
      className="bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-5"
    >
      <div
        className="flex flex-col justify-between gap-3"
      >
        <p
          className="font-mono text-lg"
        >
          {message}
        </p>
        <div
          className="flex justify-between items-center"
        >
          <LikeButton />
          <p
            className="text-[#818181] text-sm"
          >
            {minutes} ago
          </p>
        </div>
      </div>
    </article>
  )
}

export default MessageCard