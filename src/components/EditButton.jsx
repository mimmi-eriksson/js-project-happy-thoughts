const EditButton = ({ icon, onClick }) => {
  return (
    <button
      className="bg-(--color-secondary) hover:bg-[#ffadad] rounded-full p-2 text-sm cursor-pointer"
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default EditButton