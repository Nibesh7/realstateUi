import "./filter.scss";
const Filter = () => {
    return(
        <div className="filter">
            <h1>
                Search Result For <b>London</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="City Location" />
                </div>
            </div>

            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="city">Property</label>
                    <select name="type" id="type">
                        <option value="">Any</option>

                        <option value="house">Apaertment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="rent">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price </label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="any" />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="any" />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter;