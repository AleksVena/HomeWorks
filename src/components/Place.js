import React from 'react'

const Place = ({ onClick, placeClick, name }) => (
  <li    onClick={placeClick}
  >
    {name} <button onClick={onClick}>to fav</button>
  </li>
)

export default Place
