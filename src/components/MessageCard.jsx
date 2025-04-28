const MessageCard = ({ message, likes, time }) => {
  const minutes = time

  return (
    <article>
      <p>{message}</p>
      <div>
        <div>
          <LikeButton />
          <p>{likes}</p>
        </div>
        <p>{minutes} ago</p>
      </div>
    </article>
  )
}

export default MessageCard