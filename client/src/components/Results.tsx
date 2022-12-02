import React, { useState } from 'react'

const Results = ({results, onAddNom, nomListItems}) => {
  if (results.length <1 ) {
    return <p> no results</p>
  }
  const resultLI = results.map((result) => 
  <li key={result.imdbID}>{result.title}
    <button onClick={() => onAddNom(result)}> Nominate</button></li>
  );
  return (
    <>
      <h3>Results</h3>
        <div className='Card'>
          <ul>
            {resultLI}
          </ul>
        </div>
      </>
    );
  }

export default Results;
