import React from 'react';
import'./styles/SearchBar.css'

function SearchBar({placeholder,data}){
  return (
    <div className='search'>
        <div className='searchinputs'>
            <input type="text" />
            <div className="searchIcon">
                         </div>
        </div>
        <div className='dataresults'></div>
         </div>
  )
}

export default SearchBar