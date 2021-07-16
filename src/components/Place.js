import React from 'react'

const Place = ({ onClick, name }) => (
  <li
    
  >
    {name} <button onClick={onClick}>to fav</button>
  </li>
)

export default Place
