import React, { useState } from 'react'

const Results = ({results}) => {
  console.log(results)
  const resultLI = results.map((results) => 
    <li key={results.title}>{results.title}</li>
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
