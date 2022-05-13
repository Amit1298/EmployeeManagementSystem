import React from 'react';
import './style.css';
const options = [
  {
    id: 1,
    description: 'Employees',
  },
  {
    id: 2,
    description: 'Sallery',
  },
];
function Sidebar({onClickOption}) {

  return (
    <aside className='sidebar'>
      <ul>
       {options.map((option) => ( <li key={option.id} onClick={() => onClickOption(option)}>{option.description}</li>))}
      </ul>
    </aside>
  );
}

export default Sidebar;
