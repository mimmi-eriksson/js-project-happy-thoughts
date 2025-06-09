const FilterOption = ({ value }) => {
  return (
    <option className="appearance-none cursor-pointer" value={value}>{value}</option>
  )
}

export default FilterOption