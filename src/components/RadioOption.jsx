const RadioOption = ({ radioGroup, id, label, isChecked, onChange }) => {
  return (
    <div className={`rounded-full py-1 px-4 focus:outline-2 focus:outline-(--color-primary) text-sm cursor-pointer ${isChecked ? "bg-[#ffadad]" : "bg-(--color-secondary)"}`}>
      <input className="appearance-none" type="radio" name={radioGroup} id={id} value={id} checked={isChecked} onChange={onChange} />
      <label className="cursor-pointer" htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioOption