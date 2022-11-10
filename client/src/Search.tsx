import {useState, useCallback} from 'react';
import React from 'react'

const Search = () => {
  return (
    function TextFieldExample() {
      const [value, setValue] = useState('Search for a movie');
    
      const handleChange = useCallback((newValue) => setValue(newValue), []);
    
      // return (
      //   <TextField
      //     label="Search the name of a movie"
      //     value={value}
      //     onChange={handleChange}
      //     autoComplete="off"
      //   />
      // );
    }
  )
}

export default Search;
