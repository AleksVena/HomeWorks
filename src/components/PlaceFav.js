import React from 'react'

const PlaceFav = ({ onClick, name }) => (
  <li
    
  >
    {name} <button onClick={onClick}>from fav</button>
  </li>
)

export default PlaceFav
