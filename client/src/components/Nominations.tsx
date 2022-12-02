import React from 'react'

const Nominations = ({nomListItems}) => {
    return (
      <>
        <div className='Card'>
          <h3>Nominations</h3>
          <ul>
          {nomListItems.map((element, index) => 
            <li key={index}>{element.title}
            </li>
          )}
          </ul>
        </div>
      </>
    );
  }
  
  export default Nominations;
