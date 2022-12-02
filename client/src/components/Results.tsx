import React, { useState } from 'react'

const Results = ({results, onAddNom}) => {
  console.log(results)
  const resultLI = results.map((results) => 
    <li key={results.title}>{results.title}
    <button onClick={() => onAddNom(results)}> Nominate</button></li>
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
