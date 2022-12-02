import {useState} from 'react';
import React from 'react'

function Search({onSearch}) {
  const [userQuery, setUserQuery] = useState("");

  const onClickSearch = (event) => {
    onSearch(userQuery)
  }
  return (
    <div className="Card">
        <div className="logo">Movie Title 🔍</div>
        <form>
        <input type="text" name="name" placeholder="Enter a movie title" value={userQuery} onChange={(event) => setUserQuery(event.target.value)} />
        <button type="button" onClick={onClickSearch} >Search</button>
        </form>
      <div className="user-image">
      </div>
    </div>
  );
}

export default Search;
