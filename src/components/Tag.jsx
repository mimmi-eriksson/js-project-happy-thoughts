import { useState } from "react"

const Tag = ({ tag, onSelect }) => {
  const [selected, setSelected] = useState(false)

  const handleSelect = (event) => {
    event.preventDefault()
    setSelected(!selected)
    onSelect(tag)
  }
  return (
    <li
      className={`px-3 py-2 text-xs ${selected ? "bg-(--color-primary)" : "bg-[#ffeded]"}`}
    >
      <button type="button" onClick={handleSelect} className="cursor-pointer">
        {tag}
      </button>
    </li>
  )
}

export default Tag