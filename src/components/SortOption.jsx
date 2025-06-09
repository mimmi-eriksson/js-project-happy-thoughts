const SortOption = ({ radioGroup, id, label, isChecked }) => {
  return (
    <span className="flex gap-1">
      <input className="appearance-none w-4 h-4 border-2 border-(--color-primary) rounded-full focus:outline-2 focus:outline-(--color-primary) checked:bg-(--color-primary) cursor-pointer" type="radio" name={radioGroup} id={id} value={id} defaultChecked={isChecked} />
      <label className="cursor-pointer" htmlFor={id}>{label}</label>
    </span>
  )
}

export default SortOption