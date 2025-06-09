const ControlsCard = () => {
  return (
    <article
      className="text-sm"
    >
      <form className="flex gap-2 justify-between">
        <div className="flex gap-1">
          <span>
            <input type="radio" name="sortBy" id="recent" value="recent" defaultChecked />
            <label htmlFor="recent">Recent thoughts</label>
          </span>
          <span>
            <input type="radio" name="sortBy" id="popular" value="popular" />
            <label htmlFor="popular">Popular thoughts</label>
          </span>
        </div>

        <div className="flex gap-1">
          <label htmlFor="tags">Filter on tag:</label>
          <select name="tags" id="tags">
            <option value="all">All</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="humor">Humor</option>
            <option value="nature">Nature</option>
            <option value="wellness">Wellness</option>
            <option value="home">Home</option>
            <option value="entertainment">Entertainment</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </article>
  )
}

export default ControlsCard