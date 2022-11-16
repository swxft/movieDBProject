import {useState, useCallback} from 'react';
import React from 'react'

function Search() {
  return (
    <div className="Card">
        <div className="logo">Movie Title 🔍</div>
        <form>
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
        </form>
      <div className="user-image">
      </div>
    </div>
  );
}

export default Search;
