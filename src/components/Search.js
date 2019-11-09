import React, { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSetSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    
    const resetSearchValue = () => {
        setSearchValue("")
    }

    const onSearch = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetSearchValue()
    }

    return(
        <form className="search">
        <input
          value={searchValue}
          onChange={handleSetSearchValue}
          type="text"
        />
        <input onClick={onSearch} type="submit" value="SEARCH" />
      </form>
    )
}

export default Search