import React from 'react'

function SearchInput(props) {

  return (
    <div>

    <form >
      <input
          type="text"
          name="search"
          placeholder="Search"
      />
      <input
          type="submit"
          value="Search"
      />
    </form>
    </div>
  )

}

export default SearchInput
