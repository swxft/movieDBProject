import React from 'react'
import Banner from './Banner';

const Nominations = ({nomListItems, onRemoveNom}) => {
  
    return (
      <>
        <div className='Card'>
          <h3>Nominations</h3>
          <ul>
          {nomListItems.map((element, index) => 
            <li key={index}>{element.title}
            <button onClick={() => onRemoveNom(element)}>Remove</button>
            </li>
          )}
          </ul>
        </div>
        {nomListItems.length >=5 ? <Banner /> : null}
      </>
    );
  }
  
  export default Nominations;
