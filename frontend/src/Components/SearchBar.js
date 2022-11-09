import React from 'react'

function SearchBar({placeholder,data}){
  return (
    <div className='search'>
        <div className='searchinputs'>
            <input type="text" />
            <div className='SearchIcon'></div>
        </div>
        <div className='dataresults'></div>
    </div>
  )
}

export default SearchBar