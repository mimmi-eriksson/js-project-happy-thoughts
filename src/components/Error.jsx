const Error = ({ text }) => {
  return (
    <div className="bg-white border border-black border-solid shadow-[10px_10px] shadow-black p-5 text-center text-red-500">
      <p>{text}</p>
    </div>
  )
}

export default Error