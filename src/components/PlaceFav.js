import React from 'react'

const PlaceFav = ({ onClick, placeClick, name }) => (
  <li onClick={placeClick}

  >
    {name} <button onClick={onClick}>from fav</button>
  </li>
)

export default PlaceFav
