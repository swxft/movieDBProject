import React from 'react'

const Nominations = (nomListItems) => {
  // const nomsLI = nomListItems.map((movie, index) => {}
  // const nomsLI = nomListItems.map((nomListItems) => 
  // <li key={index}>{nomListItems}</li>
    // resultLI = results.map((results) => <li key={index}>{nomListItems}

    return (
      <>
        <div className='Card'>
          <h3>Nominations</h3>
          <ul>
          {nomListItems.map((element, index) => {
            <li key={index}>{element}
            </li>
          })}
          </ul>
        </div>
      </>
    );
  }
  
  export default Nominations;
