import { useState } from "react";
import "./searchbar.scss"
const types = ["buy", "rent"];

const Search = ()=>{

    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0
    })
    const switchType = (val) => {
        setQuery(prev => ({...prev, type:val}))
    }
    return (
        <div className="searchbar">
            <div className="type">
                {types.map((type) => (
                    // <button key={type} onClick={() => switchType(type)}>
                    //     {type.charAt(0).toUpperCase() + type.slice(1)}
                    // </button>
                    <button  key={type} onClick={() => switchType(type)} className={query.type === type ? 'active': ''}>{type} </button>
                ))}
            </div>
            <form action="">
                <input type="text" name="location " placeholder="City Location"/>
                <input type="number" name="minPrice"  min={0} max={1000000} placeholder="Min Price"/>
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price"/>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default Search;