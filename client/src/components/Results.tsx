import React, { useState } from 'react'

const Results = ({results, onAddFav}) => {
  console.log(results)
  const resultLI = results.map((results) => 
    <li key={results.title}>{results.title}<button onClick={() => onAddFav(results)}>Add favorite</button></li>
    // on click increment nomlist
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
