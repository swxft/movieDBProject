import {useState, useCallback} from 'react';
import React from 'react'

function Search({onSearch}) {
  const [keyword, setKeyword] = useState("");

  const onClickSearch = (event) => {
    onSearch(keyword)
  }
  return (
    <div className="Card">
        <div className="logo">Movie Title 🔍</div>
        <form>
        <input type="text" name="name" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
        <button type="button" onClick={onClickSearch} >Search</button>
        </form>
      <div className="user-image">
      </div>
    </div>
  );
}

export default Search;
