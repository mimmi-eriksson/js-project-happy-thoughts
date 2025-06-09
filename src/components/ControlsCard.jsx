import SortOption from "./SortOption"
import FilterOption from "./FilterOption"

const ControlsCard = () => {
  return (
    <article
      className="px-5 text-sm"
    >
      <form className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p>Sort on:</p>
          <SortOption radioGroup="sortBy" id="recent" label="Recent thoughts" isChecked={true} />
          <SortOption radioGroup="sortBy" id="popular" label="Popular thoughts" isChecked={false} />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-25" htmlFor="tags">Filter on:</label>
          <select className="bg-[#ffeded] border border-(--color-accent) rounded-lg focus:outline-2 focus:outline-(--color-primary) w-full p-1 cursor-pointer" name="tags" id="tags">
            <FilterOption value="all" />
            <FilterOption value="travel" />
            <FilterOption value="food" />
            <FilterOption value="family" />
            <FilterOption value="friends" />
            <FilterOption value="humor" />
            <FilterOption value="nature" />
            <FilterOption value="wellness" />
            <FilterOption value="home" />
            <FilterOption value="entertainment" />
            <FilterOption value="work" />
            <FilterOption value="other" />
          </select>
        </div>
      </form>
    </article>
  )
}

export default ControlsCard